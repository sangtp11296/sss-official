import React from 'react'
import styles from './Post.module.css'
import {Link} from 'react-router-dom'

export default function Post(props) {
    const coversFolder = 'http://localhost:5000/images/covers/'
    return (
        <div className={styles.post}>
            {props.post.coverPhoto && (<Link to={`/posts/${props.post.slug}`}><img className={styles.postImg} src={coversFolder + props.post.coverPhoto} alt={props.post.title}/></Link>)}
            <div className={styles.postInfo}>
                <div className={styles.postTitle}>
                    <Link to={`/posts/${props.post.slug}`}>
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

