import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import styles from './Profile.module.css'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Profile() {
    const [authorname,setAuthorname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);
    const [passErr,setPassErr] = useState(false);
    const [avatar,setAvatar] = useState(false);
    const [cover,setCover] = useState(false);
    const [passcheck,setPassCheck] = useState('');
    
    const {user,dispatch} = useContext(Context)
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault()
        setError(false);
        setPassErr(false);

        if(password === passcheck) {
            const updatedUser = {
                userId: user._id,
                username:user.username,
                authorname,
                email,
                password
            }
            if (cover){
                const dataCover = new FormData();
                const covername = Date.now()+ '_' + cover.name;
                dataCover.append('name',covername);
                dataCover.append('file',cover);
                updatedUser.profileCover = covername;
                try{
                    await axios.post('/upload/profile', dataCover)
                }catch(err){
                }
            }
            if (avatar){
                const dataAvatar = new FormData();
                const avatarname = Date.now()+ '_' + avatar.name;
                dataAvatar.append('name',avatarname);
                dataAvatar.append('file',avatar);
                dataAvatar.append('userID',user._id)
                try{
                    await axios.post('/upload/profile', dataAvatar)
                }catch(err){
                }
            }
            try{
                await axios.put(`/users/${user._id}`, updatedUser);
                dispatch({type:"LOGOUT"})
                history.push('/login')
                // window.location.reload();
            }catch(err){}
        } else setPassErr(true);
    }
    return (
        <div className={styles.profile}>
            <div className={styles.mainInfo}>
                <div className={styles.cover}>
                {cover || user.profileCover ? 
                    <>
                        <img className={styles.coverPhoto} alt='' src={user.profileCover?`http://localhost:5000/images/profile/${user.profileCover}`:URL.createObjectURL(cover)}/>
                        <label htmlFor='cover'>
                            <i className={`${styles.editIcon} ${styles.editCover} fas fa-pencil-alt`}></i>
                        </label>
                        <input type='file' id='cover' style={{display:'none'}} onChange={e=>{setCover(e.target.files[0]); user.profileCover=null}}/>
                    </>
                    :
                    <>
                        <img className={styles.coverPhoto} alt='' style={{backgroundImage:`url(http://localhost:5000/images/covers/1632111556548_DSCF0639.jpg)`}}/>
                        <label htmlFor='cover'>
                            <i className={`${styles.editIcon} ${styles.editCover} fas fa-pencil-alt`}></i>
                        </label>
                        <input type='file' id='cover' style={{display:'none'}} onChange={e=>{setCover(e.target.files[0])}}/>
                    </>
                    }
                    {avatar || user.profileAvatar ? 
                        <>
                            {/* <img alt='' className={styles.avatar} src={user.profileAvatar?`http://localhost:5000/images/profile/${user.profileAvatar}`:URL.createObjectURL(avatar)}/> */}
                            <img alt='' className={styles.avatar} src={user.profileAvatar? `https://drive.google.com/uc?id=16x_FIHe6avFwbikF8BE6VRYLHGj1boAL`:URL.createObjectURL(avatar)}/>
                            
                            <label htmlFor='avatar'>
                                <i className={`${styles.editIcon} fas fa-pencil-alt`}></i>
                            </label>
                            <input type='file' id='avatar' style={{display:'none'}} onChange={e=>{setAvatar(e.target.files[0]); user.profileAvatar=null}}/>
                        </>
                        : 
                        <>
                            <img alt='' className={styles.avatar} style={{backgroundColor:"white"}}/>
                            <label htmlFor='avatar'>
                                <i className={`${styles.editIcon} fas fa-pencil-alt`}></i>
                            </label>
                            <input type='file' id='avatar' style={{display:'none'}} onChange={e=>{setAvatar(e.target.files[0])}}/>
                        </>}
                    
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
                        <input name='fullName' type='text' required maxLength='500' className={styles.textInput}  onChange={e=>{setAuthorname(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Email<span className={styles.textDanger}>*</span></label>
                        <input name='email' type='text' required maxLength='500' className={styles.textInput}  onChange={e=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Password<span className={styles.textDanger}>*</span></label>
                        <input name='password' type='password' required maxLength='500' className={styles.textInput} onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Confirm Password<span className={styles.textDanger}>*</span></label>
                        <input name='password' type='password' required maxLength='500' className={styles.textInput} onChange={e=>{setPassCheck(e.target.value)}}/>
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
