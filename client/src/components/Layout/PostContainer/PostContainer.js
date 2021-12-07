import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostContainer.module.css'
import ShareButton from './ShareButton/ShareButton'

const PostContainer = (props) => {
    const editCallBackFunction = (editCall) => {
        if(editCall){
            props.editCallBackProp(true)
        }
    }
    const deleteCallBackFunction = (deleteCall) => {
        if(deleteCall){
            props.deleteCallBackProp(true)
        }
    }
    return (
        <div className={styles.postContainer}>
            <div className={styles.containerArticle} itemScope itemType={'http://schema.org/Article'}>
                <div className={styles.articleWrapper}>
                    <div className={styles.articleText}>
                        <div dangerouslySetInnerHTML={{__html:props.postContent}}></div>
                    </div>
                </div>
                <div className={styles.articleWrapper}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorSocial}>
                            <Link target="_blank" to="/about">
                                <img src='/images/avatar/sss-avatar.jpg' className={styles.authorAvatar} alt="SangTranPhucavatar"/>
                            </Link>
                            <h2 className={styles.authorName}>
                                <Link target="_blank" to="/about">
                                    Sang Tran Phuc
                                </Link>
                            </h2>
                            <div className={styles.viewProfile}>
                                <Link target="_blank" to="/about">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShareButton editCallBackProp={editCallBackFunction} deleteCallBackProp={deleteCallBackFunction}/>
        </div>
    )
}

export default PostContainer
