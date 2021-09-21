import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Context } from '../../context/Context';
import './quill.css'
import styles from './Write.module.css'
import axios from 'axios'
import QuillEditor from '../../components/Editor/QuillEditor';
// import QuillEditor from '../../components/Editor/QuillEditor';


export default function Write(props) {
    props.setWhiteHeaderCallback(true);
    const [title,setTitle] = useState('');
    const [section,setSection] = useState('');
    const [categories,setCats] = useState([]);
    const [desc,setDesc] = useState('');
    const [photographer,setPhotographer] = useState('');
    const [cover,setCover] = useState(null);
    const [content,setContent] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        const newPost = {
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
            const covername = Date.now()+ '_' + cover.name;
            data.append('name',covername);
            data.append('file',cover);
            newPost.coverPhoto = covername;
            try{
                await axios.post('/upload', data)
            }catch(err){
            }
        }
        try{
            const res = await axios.post('/posts', newPost);
            window.location.replace('/posts/' + res.data.slug);
        }catch(err){
            setError(true)
        }
        
    }
    // const modules = {
    //     toolbar: [
    //       [{ 'header': [1, 2, false] }],
    //       ['bold', 'italic', 'underline','strike', 'blockquote'],
    //       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    //       ['link', 'image'],
    //       ['clean']
    //     ],
    //   }
    const modules = {
        // syntax: true,
        toolbar: [
          [{ 'font': [] }, { 'size': [] }],
          [ 'bold', 'italic', 'underline', 'strike' ],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'super' }, { 'script': 'sub' }],
          [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
          [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
          [ 'direction', { 'align': [] }],
          [ 'link', 'image', 'video', 'formula' ],
          [ 'clean' ]
        ]
    }
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'color', 'background', 'script', 'size', 'font',
        'list', 'bullet', 'indent', 'direction', 'align',
        'link', 'image', 'video', 'fomula', 'clean'
      ]
    return (
        <div className={styles.container}>
            <div className={styles.write}>
                <div className={styles.writeContainer}>
                    <div className={styles.writeForm} style={{display:"flex"}}>
                        <div className={styles.imageSide}>
                            <h5>Cover Image</h5>
                            {cover? <div className={styles.uploadImage}>
                                        <img className={styles.coverPhoto} alt='' src={URL.createObjectURL(cover)}/>
                                        <i className={`${styles.xIcon} fas fa-times fa-2x`} onClick={e=>{setCover(null)}}/>
                                    </div> : 
                                    <div className={styles.uploadImage}>
                                        <label htmlFor='fileInput' className={styles.icon}>
                                            <i  className="fas fa-camera-retro"></i>
                                        </label>
                                        <label htmlFor='fileInput' className={styles.uploadBtn}>Upload Image</label>
                                        <input type='file' id='fileInput' style={{display:'none'}} onChange={e=>{setCover(e.target.files[0])}}/>
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
                            <form className={styles.textForm} onSubmit={handleSubmit}>
                                <div className={styles.textField}>
                                    <label>Title of the Post<span className={styles.textDanger}>*</span></label>
                                    <input name='title' type='text' required maxLength='500' className={styles.textInput} autoFocus={true} placeholder='Title' onChange={e=>{setTitle(e.target.value)}}/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Photographer's Name</label>
                                    <input name='photographer' type='text' maxLength='500' className={styles.textInput} placeholder='Photographer Name...' onChange={e=>{setPhotographer(e.target.value)}}/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Sections<span className={styles.textDanger}>*</span></label>
                                    <select name='sections' placeholder='Select section...' className={styles.textInput}  onChange={e=>{setSection(e.target.value)}}>
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
                                    <input name='categories' type='text' className={styles.textInput}  onChange={e=>{setCats(e.target.value.split(' '))}}/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Description<span className={styles.textDanger}>*</span></label>
                                    <textarea name='description' type='text' className={styles.textInput} placeholder='Description'  onChange={e=>{setDesc(e.target.value)}}></textarea>
                                </div>
                                <div className={styles.textField}>
                                    <label>Main Content<span className={styles.textDanger}>*</span></label>
                                    <ReactQuill theme='snow' value={content} onChange={setContent} placeholder='Show me something...' modules={modules} formats={formats} />
                                    <QuillEditor/>
                                </div>
                                <div className={styles.submit}>
                                    <button className={styles.uploadBtn}>Preview</button>
                                    <button className={styles.uploadBtn} type='submit'>Submit</button>
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
