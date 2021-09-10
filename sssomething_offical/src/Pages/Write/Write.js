import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css'
import styles from './Write.module.css'


export default function Write(props) {
    props.setWhiteHeaderCallback(true);
    const [text,setText] = useState('');
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

    return (
        <div>
            <div className={styles.write}>
                {/* <form className={styles.writeForm}>
                    <div className={styles.writeFormGroup}>
                        <label htmlFor='fileInput'>
                            <i className='fas fa-plus'/>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}}/>
                        <input type='text' placeholder='Title' className={styles.writeInput} autoFocus={true}/>
                    </div>
                    <div className="writeFormGroup"></div>
                </form> */}
                <div className={styles.writeContainer}>
                    <div className={styles.writeForm} style={{display:"flex"}}>
                        <div className={styles.imageSide}>
                            <h5>Cover Image</h5>
                            <div className={styles.uploadImage}>
                                <label htmlFor='fileInput' className={styles.icon}>
                                    <i  className="fas fa-camera-retro"></i>
                                </label>
                                <label htmlFor='fileInput' className={styles.uploadBtn}>Upload Image</label>
                                <input type='file' id='fileInput' style={{display:'none'}}/>
                            </div>
                            <div className={styles.notice}>
                                For better design, please use:
                                <ul>
                                    <li>Minimum width image size is 1080</li>
                                    <li>The best ratio is 16:9</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.textSide}>
                            <form className={styles.textForm}>
                                <div className={styles.textField}>
                                    <label>Title of the Post<span className={styles.textDanger}>*</span></label>
                                    <input name='title' type='text' required maxLength='500' className={styles.textInput} autoFocus={true} placeholder='Title'/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Categories<span className={styles.textDanger}>*</span></label>
                                    <input name='categories' type='text' className={styles.textInput}/>
                                </div>
                                <div className={styles.textField}>
                                    <label>Description<span className={styles.textDanger}>*</span></label>
                                    <textarea name='description' type='text' className={styles.textInput} placeholder='Description'></textarea>
                                </div>
                                <div className={styles.textField}>
                                    <label>Main Content<span className={styles.textDanger}>*</span></label>
                                    <ReactQuill theme='snow' value={text} onChange={setText} placeholder='Show me something...' modules={modules} formats={formats} />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
