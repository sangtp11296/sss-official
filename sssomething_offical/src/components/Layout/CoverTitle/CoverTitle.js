import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CoverTitle.module.css'

const CoverTitle = (props) => {
    return (
        <div className={styles.articleCover} style={{backgroundImage:`url(http://localhost:5000/images/covers/${props.postCover.coverPhoto})`}}>
            <div className={styles.coverImageGradient}></div>
            <h1 className={styles.articleCoverTitle}>
                <div className={styles.titleWrapper}>
                    <div className={styles.category}><Link to={`/${props.postCover.section}`}>{props.postCover.section}</Link></div>
                    <div className={styles.title}>{props.postCover.title}</div>
                    <div className={styles.articleCoverSummary}>{props.postCover.desc}</div>
                    <div className={styles.authorText}>
                        <em>
                            <p>
                                {props.postCover.photographer ? <span>Photographs by <Link to={`/?author=${props.postCover.photographer}`}>{props.postCover.photographer}</Link></span>:null}
                                <br/>
                                {props.postCover.authorname ? <span>Essay by <Link to={`/?author=${props.postCover.authorname}`}>{props.postCover.authorname}</Link></span>:null}
                            </p>
                        </em>
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default CoverTitle
