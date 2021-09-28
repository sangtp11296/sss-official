import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import styles from './Profile.module.css'
import axios from 'axios';

export default function Profile() {
    const [authorname,setAuthorname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);
    const [passErr,setPassErr] = useState(false);
    const [avatar,setAvatar] = useState(false);
    const [cover,setCover] = useState(false);
    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');
    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault()
        setError(false);
        setPassErr(false);

        if(password1 === password2) {
            setPassword(password1)
            const updatedUser = {
                userId: user._id,
                username:user.username,
                authorname,
                email,
                password
            }
            if (cover){
                const data = new FormData();
                const covername = Date.now()+ '_' + cover.name;
                data.append('name',covername);
                data.append('file',cover);
                updatedUser.profileCover = covername;
                try{
                    await axios.post('/upload/profile', data)
                }catch(err){
                }
            }
            if (avatar){
                const data = new FormData();
                const avatarname = Date.now()+ '_' + avatar.name;
                data.append('name',avatarname);
                data.append('file',avatar);
                updatedUser.profileAvatar = avatarname;
                try{
                    await axios.post('/upload/profile', data)
                }catch(err){
                }
            }
            try{
                await axios.put(`/users/${user._id}`, updatedUser);
                window.location.reload();
            }catch(err){}
        } else setPassErr(true);
    }
    return (
        <div className={styles.profile}>
            <div className={styles.mainInfo}>
                <div className={styles.cover}>
                    <div className={styles.coverPhoto} alt='' style={{backgroundImage:`url(http://localhost:5000/images/covers/1632111556548_DSCF0639.jpg)`}}>
                        <label htmlFor='cover'>
                            <i className={`${styles.editIcon} ${styles.editCover} fas fa-pencil-alt`}></i>
                        </label>
                    </div>
                    <img alt='' className={styles.avatar} src='http://localhost:5000/images/profile/217629690_365261008312082_2296721951295676000_n.jpg'></img>
                    <label htmlFor='avatar'>
                        <i className={`${styles.editIcon} fas fa-pencil-alt`}></i>
                    </label>
                    <input type='file' id='avatar' style={{display:'none'}} onChange={e=>{setAvatar(e.target.files[0])}}/>
                    <input type='file' id='cover' style={{display:'none'}} onChange={e=>{setCover(e.target.files[0])}}/>
                </div>
                <div className={styles.sideInfo}>
                    <h3>1000 <span>Follower</span></h3>
                    <h3>500 <span>Posts</span></h3>
                    <h3>1000 <span>Likes</span></h3>
                    <h3>1000 <span>Comments</span></h3>
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
                        <input name='password' type='password' required maxLength='500' className={styles.textInput} onChange={e=>{setPassword1(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Confirm Password<span className={styles.textDanger}>*</span></label>
                        <input name='password' type='password' required maxLength='500' className={styles.textInput} onChange={e=>{setPassword2(e.target.value)}}/>
                    </div>
                    {passErr?<h5>Wrong Confirmation</h5>:null}
                </div>
                <div className={styles.socialSide}>
                    <div className={styles.textField}>
                        <label>Facebook</label>
                        <input name='password' type='text' maxLength='500' className={styles.textInput} value='https://www.facebook.com/sang.tp.11296/' onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Instagram</label>
                        <input name='password' type='text' maxLength='500' className={styles.textInput} value='https://www.instagram.com/nguoidiban.mua/' onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                </div>
                {error ? <div><h5 style={{color:'red',textAlign:'right'}}>Something went wrong! Please check again...</h5></div>:null}
                <div className={styles.submit}>
                    <button className={styles.uploadBtn} type='submit'>Update</button>
                </div>
            </form>
            
        </div>
    )
}
