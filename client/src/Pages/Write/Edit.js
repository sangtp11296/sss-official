import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import styles from './Write.module.css'
import axios from 'axios'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import 'ckeditor5-custom-build/build/translations/vi';
import 'ckeditor5-custom-build/build/translations/de';
import 'ckeditor5-custom-build/build/translations/zh-cn';

function Edit(props) {
    const data = props.location.state.state;
    const [title,setTitle] = useState(data.title);
    const [section,setSection] = useState(data.section);
    const [categories,setCats] = useState(data.categories);
    const [desc,setDesc] = useState(data.desc);
    const [photographer,setPhotographer] = useState(data.photographer);
    const [cover,setCover] = useState();
    const [content,setContent] = useState(data.content);
    const {user} = useContext(Context);
    const [error,setError] = useState(false);

    function toSlug(str)
    {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        str = str.replace(/(ß)/g, 'B');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        setError(false)
        const editPost = {
            username:user.username,
            title,
            slug: toSlug(title),
            desc,
            section,
            categories,
            authorname:user.authorname,
            photographer,
            content
        }
        if (cover){
            const data = new FormData();
            const covername = Date.now()+ '_' + toSlug(title);
            data.append('type','postCover')
            data.append('name',covername);
            data.append('file',cover);
            data.append('userID',user._id);
            editPost.coverPhoto = covername;
            try{
                await axios.post('/upload', data)
            }catch(err){
            }
        }
        try{
            const res = await axios.put(`/posts/${data._id}`, editPost);
            window.location.replace('/posts/' + res.data.slug);
        }catch(err){
            setError(true)
        }
        
    }

    const editorConfiguration = {
        removePlugins: ['Title','Markdown', 'Watchdog'],
        language:{
            textPartLanguage: [
                { title: 'English', languageCode: 'en' },
                { title: 'German', languageCode: 'de' },
                { title: 'Vietnamese', languageCode: 'vi' },
                { title: 'Chinese', languageCode: 'zh-cn'}
            ]
        },
        toolbar: {
            items: [
                'textPartLanguage', 'heading', '|',
                'fontfamily', 'fontsize', '|',
                'alignment', '|',
                'fontColor', 'fontBackgroundColor', '|',
                'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                'link', '|',
                'outdent', 'indent', '|',
                'bulletedList', 'numberedList', 'todoList', 'horizontalLine', '|',
                'code', 'codeBlock', 'sourceEditing', '|',
                'insertTable', '|',
                'insertImage', 'mediaEmbed', 'blockQuote', '|',
                'undo', 'redo', 'findAndReplace', 'highlight', 'specialCharacters'
            ],
            viewportTopOffset: 30,
            shouldNotGroupWhenFull: true
        },
        ckfinder: {
            uploadUrl: '/uploads'
        },
        highlight: {
            options: [
                {
                    model: 'blueMarker',
                    class: 'marker-blue',
                    title: 'Blue marker',
                    color: 'var(--main-brand-color-theme)',
                    type: 'marker'
                },
                {
                    model: 'greenMarker',
                    class: 'marker-green',
                    title: 'Green marker',
                    color: 'var(--ck-highlight-marker-green)',
                    type: 'marker'
                },
                {
                    model: 'redPen',
                    class: 'pen-red',
                    title: 'Red pen',
                    color: 'var(--ck-highlight-pen-red)',
                    type: 'pen'
                }
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells',
                'tableProperties', 'tableCellProperties', 'toggleTableCaption'
            ],
        },
        image: {
            toolbar: [
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                '|',
                'toggleImageCaption',
                'imageTextAlternative',
                'linkImage'
            ]},
        mediaEmbed: {
            removeProviders: [ 'instagram', 'twitter', 'googleMaps', 'flickr', 'facebook' ]
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.write}>
                <div className={styles.writeContainer}>
                    <div className={styles.writeForm} style={{display:"flex"}}>
                        <div className={styles.imageSide}>
                            <h5>Cover Image</h5>
                            {cover || data.coverPhoto ? <div className={styles.uploadImage}>
                                        <img className={styles.coverPhoto} alt='' id='changeCover' src={data.coverPhoto?`https://drive.google.com/uc?id=${data.coverPhoto}`:URL.createObjectURL(cover)}/>
                                        <i className={`${styles.xIcon} fas fa-times fa-2x`} onClick={(e)=>{
                                            e.preventDefault();
                                            setCover(null);
                                            data.coverPhoto=null;
                                            }}/>
                                    </div> : 
                                    <div className={styles.uploadImage}>
                                        <label htmlFor='fileInput' className={styles.icon}>
                                            <i  className="fas fa-camera-retro"></i>
                                        </label>
                                        <label htmlFor='fileInput' className={styles.uploadBtn}>Upload Image</label>
                                        <input type='file' id='fileInput' required style={{display:'none'}} onChange={e=>{
                                            e.preventDefault();
                                            setCover(e.target.files[0]);
                                            }}/>
                                    </div>
                                    }
                            <div className={styles.notice}>
                                For better design, please use:
                                <ul>
                                    <li>Minimum width image size is 1080</li>
                                    <li>The best ratio is 16:9</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.textSide}>
                            <form className={styles.textForm} onSubmit={handleUpdate}>
                                <div className={styles.textField}>
                                    <label>Title of the Post<span className={styles.textDanger}>*</span></label>
                                    <input name='title' type='text' required maxLength='500' className={styles.textInput} autoFocus={true} value={title} onChange={e=>{setTitle(e.target.value)}}/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Photographer's Name</label>
                                    <input name='photographer' type='text' maxLength='500' className={styles.textInput} value={photographer}  onChange={e=>{setPhotographer(e.target.value)}}/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Sections<span className={styles.textDanger}>*</span></label>
                                    <select name='sections' value={section}  className={styles.textInput}  onChange={e=>{setSection(e.target.value)}}>
                                        <option value='none' defaultValue className={styles.items}>Select section...</option>
                                        <option value='photography' className={styles.items}>photography</option>
                                        <option value='explore' className={styles.items}>explore</option>
                                        <option value='photographers' className={styles.items}>photographers</option>
                                        <option value='challenge' className={styles.items}>challenge</option>
                                        <option value='book' className={styles.items}>book</option>
                                        <option value='music' className={styles.items}>music</option>
                                        <option value='life' className={styles.items}>life</option>
                                    </select>
                                </div>
                                <div className={styles.textField}>
                                    <label>Categories<span className={styles.textDanger}>*</span></label>
                                    <input name='categories' type='text' className={styles.textInput} value={categories} onChange={e=>{setCats(e.target.value.split(' '))}}/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Description<span className={styles.textDanger}>*</span></label>
                                    <textarea name='description' type='text' className={styles.textInput} value={desc}  onChange={e=>{setDesc(e.target.value)}}></textarea>
                                </div>
                                <div className={styles.textField}>
                                    <label>Main Content<span className={styles.textDanger}>*</span></label>
                                    {/* <ReactQuill theme='snow' value={content} onChange={setContent} placeholder='Show me something...' modules={modules} formats={formats} /> */}
                                    <CKEditor
                                        editor={ Editor }
                                        config={ editorConfiguration }
                                        data={content}
                                        // onReady={ editor => {
                                        //     // You can store the "editor" and use when it is needed.
                                        //     console.log( 'Editor is ready to use!', editor );
                                        // } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            // console.log( { event, editor, data } );
                                            setContent(data)
                                            console.log(content)
                                        } }
                                        // onBlur={ ( event, editor ) => {
                                        //     console.log( 'Blur.', editor );
                                        // } }
                                        // onFocus={ ( event, editor ) => {
                                        //     console.log( 'Focus.', editor );
                                        // } }
                                    />
                                </div>
                                <div className={styles.submit}>
                                    <button className={styles.uploadBtn}>Preview</button>
                                    <button className={styles.uploadBtn} type='submit'>Update</button>
                                </div>
                                {error ? <div><h5 style={{color:'red',textAlign:'right'}}>Something went wrong! Please check again...</h5></div>:null}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit