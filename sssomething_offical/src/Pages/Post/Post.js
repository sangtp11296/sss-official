import React from 'react'
import styles from './Post.module.css'
import {Link} from 'react-router-dom'

export default function Post(props) {
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
    const postSlug = toSlug(props.post.title);
    return (
        <div className={styles.post}>
            {props.post.photo && (<img className={styles.postImg} src={props.post.photo} alt=''/>)}
            <div className={styles.postInfo}>
                <div className={styles.postTitle}>
                    <Link to={`/post/${postSlug}`}>
                        {props.post.title}
                    </Link>
                </div>
                
                <div className={styles.postDescription}>
                    {props.post.desc}
                </div>
                <hr/>
                <span className={styles.postDate}>{new Date(props.post.createdAt).toDateString()}</span>
                <div className={styles.postCats}>
                    {props.post.categories.map((c,id)=>(
                        <span key={id} className={styles.postCat}>{c}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

