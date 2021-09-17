import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../CoverTitle/CoverTitle.module.css'

export default function HomeCover(props)  {
    return (
        <div className={styles.articleCover} style={{backgroundImage:`url(http://localhost:5000/images/covers/${props.posts.coverPhoto})`}}>
            <div className={styles.coverImageGradient}></div>
            <h1 className={styles.articleCoverTitle}>
                <div className={styles.titleWrapper}>
                    <div className={styles.category}><Link to={`/${props.posts.section}`}>{props.posts.section}</Link></div>
                    <div className={styles.title}>
                        <Link to={`posts/${props.posts.slug}`}>{props.posts.title}</Link>
                    </div>
                    <div className={styles.articleCoverSummary}>{props.posts.desc}</div>
                    <div className={styles.authorText}>
                        <em>
                            <p>
                                {props.posts.photographer ? <span>Photographs by <Link to={`/?author=${props.posts.photographer}`}>{props.posts.photographer}</Link></span>:null}
                                <br/>
                                {props.posts.authorname ? <span>Essay by <Link to={`/?author=${props.posts.authorname}`}>{props.posts.authorname}</Link></span>:null}
                            </p>
                        </em>
                    </div>
                </div>
            </h1>
        </div>
    )
}
