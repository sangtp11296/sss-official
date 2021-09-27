import React, { useState } from 'react'
import styles from './Profile.module.css'

export default function Profile() {
    const [authorname,setAuthorname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);

    function handleSubmit(){

    }
    return (
        <div className={styles.profile}>
            <div className={styles.mainInfo}>
                <div className={styles.cover}>
                    <div className={styles.coverPhoto} alt='' style={{backgroundImage:`url(http://localhost:5000/images/covers/1632111556548_DSCF0639.jpg)`}}/>
                    <img alt='' className={styles.avatar} src='http://localhost:5000/images/avatar/217629690_365261008312082_2296721951295676000_n.jpg'></img>
                </div>
                <div className={styles.sideInfo}>
                    <span>Follower</span>
                    <span>Posts</span>
                    <span>Likes</span>
                    <span>Comments</span>
                </div>
            </div>
            <form className={styles.textForm} onSubmit={handleSubmit}>
                <h3>Basic Information</h3>
                <div className={styles.infoSide}>
                    <div className={styles.textField}>
                        <label>Full Name<span className={styles.textDanger}>*</span></label>
                        <input name='fullName' type='text' required maxLength='500' className={styles.textInput} value='Sang Tran Phuc' onChange={e=>{setAuthorname(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Email<span className={styles.textDanger}>*</span></label>
                        <input name='email' type='text' required maxLength='500' className={styles.textInput} value='sang.tp.11296@gmail.com' onChange={e=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Password<span className={styles.textDanger}>*</span></label>
                        <input name='password' type='password' required maxLength='500' className={styles.textInput} onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Password<span className={styles.textDanger}>*</span></label>
                        <input name='password' type='password' required maxLength='500' className={styles.textInput} onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                </div>
                <div className={styles.socialSide}>
                    <div className={styles.textField}>
                        <label>Facebook</label>
                        <input name='password' type='password' maxLength='500' className={styles.textInput} onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Instagram</label>
                        <input name='password' type='password' maxLength='500' className={styles.textInput} onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                </div>
                {error ? <div><h5 style={{color:'red',textAlign:'right'}}>Something went wrong! Please check again...</h5></div>:null}
            </form>
            
        </div>
    )
}
