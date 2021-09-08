import React from 'react'
import styles from './CoverTitle.module.css'

const CoverTitle = (props) => {
    return (
        <div className={styles.articleCover}>
            <div className={styles.coverImageGradient}></div>
            <h1 className={styles.articleCoverTitle}>
                <div className={styles.titleWrapper}>
                    <div className={styles.category}>{props.postCover.categories}</div>
                    <div className={styles.title}>{props.postCover.title}</div>
                    <div className={styles.articleCoverSummary}>{props.postCover.desc}</div>
                    <div className={styles.authorText}>
                        <em>
                            <p>
                                {props.postCover.photographer ? 'Photographs by ' + props.postCover.photographer  : ''}
                                <br/>
                                Essay by {props.postCover.authorname}
                            </p>
                        </em>
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default CoverTitle
