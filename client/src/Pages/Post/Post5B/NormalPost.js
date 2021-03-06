import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NormalPost.module.css'

export default function NormalPost(props) {
    const coversFolder = 'https://drive.google.com/uc?id='
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
                        <span key={id} className={styles.postCat}><Link to={`/?cat=${c}`}>{c}</Link></span>
                    ))}
                </div>
            </div>
        </div>
    )
}
