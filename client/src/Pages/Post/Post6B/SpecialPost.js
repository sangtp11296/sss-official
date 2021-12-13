import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SpecialPost.module.css'

export default function SpecialPost(props) {
    const coversFolder = 'https://drive.google.com/uc?id='
    return (
        <>
            {props.post.coverPhoto && 
                <div className={styles.post} style={{backgroundImage:`url(${coversFolder}${props.post.coverPhoto})`}}>
                    <Link to={`/posts/${props.post.slug}`} className={styles.gradient}></Link>
                    <div className={styles.postInfo}>
                        <div className={styles.postTitle}>
                                {props.post.title}
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
            }
        </>
    )
}
