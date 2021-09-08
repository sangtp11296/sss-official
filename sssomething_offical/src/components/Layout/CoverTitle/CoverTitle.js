import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CoverTitle.module.css'

const CoverTitle = (props) => {
    console.log(props.postCover)
    return (
        <div className={styles.articleCover}>
            <div className={styles.coverImageGradient}></div>
            <h1 className={styles.articleCoverTitle}>
                <div className={styles.titleWrapper}>
                    <div className={styles.category}>{props.postCover.section}</div>
                    <div className={styles.title}>{props.postCover.title}</div>
                    <div className={styles.articleCoverSummary}>{props.postCover.desc}</div>
                    <div className={styles.authorText}>
                        <em>
                            <p>
                                <Link to={`/?photographer=${props.postCover.photographer}`} style={{color:'white'}}>
                                    {props.postCover.photographer ? 'Photographs by ' + props.postCover.photographer  : ''}
                                </Link>
                                <br/>
                                <Link to={`/?author=${props.postCover.authorname}`} style={{color:'white'}}>
                                    Essay by {props.postCover.authorname}
                                </Link>
                                
                            </p>
                        </em>
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default CoverTitle
