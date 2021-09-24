import React, { useState,useCallback,useEffect, useContext } from 'react'
import styles from './ShareButton.module.css'
import {Context} from '../../../../context/Context'
import { useLocation } from 'react-router'
import axios from 'axios'


const ShareButton = (props) => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const {user} = useContext(Context);
    const [visible, setVisible] = useState(false);
    const scrollDetect = useCallback(
        (e) => {
            const window = e.currentTarget;
            // Này là làm hiện social media icon khi kéo xuống
            if (window.scrollY >= 720){
                setVisible(true);
            } else {
                setVisible(false);
            }
        },
        [],
    );
    useEffect(() =>{
        window.addEventListener('scroll', scrollDetect);
        return () => {
            window.removeEventListener('scroll', scrollDetect);
        };
    }, [scrollDetect]);

    function fbShare() {
        let postUrl = encodeURI(document.location.href);
        // let postTitle = encodeURI('In the middle of the night i crawl onto your chest and purr gently to help you sleep');
        const fbButton = document.querySelector('#fbBtn');
        fbButton.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`);
    }
    function twShare() {
        let postUrl = encodeURI(document.location.href);
        let postTitle = encodeURI('In the middle of the night i crawl onto your chest and purr gently to help you sleep');
        const twButton = document.querySelector('#twBtn');
        twButton.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    }
    function mailShare() {
        let postUrl = encodeURI(document.location.href);
        let postTitle = encodeURI('In the middle of the night i crawl onto your chest and purr gently to help you sleep');
        const mailButton = document.querySelector('#mailBtn');
        mailButton.setAttribute('href', `'mailto:?subject=' . ${postTitle} . '&body=Check out this site: '. ${postUrl} .'" title="Share by Email'`);
    }

    function handleEdit(){
        
    }
    async function handleDelete(){
        try{
            await axios.delete('/posts/' + path, {
                data:{username:user.username}})
            window.location.replace('/')
        }catch (err){}
    }
    
    return (
        <div className={`${styles.shareButtonContainer} ${visible?styles.visible:''}`}>
            <a className={`${styles.btn} ${styles.fbButton}`} href=' ' id="fbBtn" onClick={fbShare} target="_blank">
                <i className="fab fa-facebook-f"></i>
            </a>
            <div className={`${styles.quotes} ${styles.fbQuotes}`}>Share</div>
            <a className={`${styles.btn} ${styles.twButton}`} href=' ' id="twBtn" onClick={twShare} target="_blank">
                <i className="fab fa-twitter"></i>
            </a>
            <div className={`${styles.quotes} ${styles.twQuotes}`}>Tweet</div>
            <a className={`${styles.btn} ${styles.mailButton}`} href=' ' id="mailBtn" onClick={mailShare} target="_blank">
                <i className="fa fa-envelope"></i>
            </a>
            <div className={`${styles.quotes} ${styles.mailQuotes}`}>Mail</div>
            <div className={`${styles.btn}`} href=' ' id="mailBtn" onClick={()=>window.scrollTo(0, 0)}>
                <i className="fas fa-paper-plane"></i>
            </div>
            <div className={`${styles.quotes} ${styles.topQuotes}`}>To Top</div>
            {user ? <>
                        <div className={`${styles.btn} ${styles.editButton}`} onClick={handleEdit} id="editBtn">
                            <i className="fas fa-pen-square"></i>
                        </div>
                        <div className={`${styles.quotes} ${styles.editQuotes}`}>Edit</div>
                        <div className={`${styles.btn} ${styles.deleteButton}`} onClick={handleDelete}>
                            <i className="fas fa-trash-alt"></i>
                        </div>
                        <div className={`${styles.quotes} ${styles.deleteQuotes}`}>Delete</div>
                    </> : null}
            
        </div>
    )
}

export default ShareButton
