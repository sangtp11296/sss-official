import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Register.module.css'
export default function Register(props) {
    props.setWhiteHeaderCallback(true);
    const [username,setUsername] = useState('');
    const [authorname,setAuthorname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passcheck,setPassCheck] = useState('');
    const [passerr,setPassErr] = useState(false);
    const [error,setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false);
        setPassErr(false);
        try{
            if(password === passcheck) {
                const res = await axios.post('/auth/register',{
                    username,
                    authorname,
                    email,
                    password
                });
                res.data && window.location.replace('/login');
            } else{
                setPassErr(true);}
        }catch (err){
            setError(true);
        }
    }

        
        
    return (
        <div className={styles.register}>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <span className={styles.registerTitle}>Register</span>
                <label>Account ID<span className={styles.red}>*</span>{error ? <span className={styles.red}> Not Available</span>:null}</label>
                <input type='text' placeholder='Enter account ID...' className={styles.registerInput} onChange={e=>setUsername(e.target.value)}></input>
                <label>Author Name<span className={styles.red}>*</span>{error ? <span className={styles.red}> Not Available</span>:null}</label>
                <input type='text' placeholder='Enter your author name...' className={styles.registerInput} onChange={e=>setAuthorname(e.target.value)}></input>
                <label>Email<span className={styles.red}>*</span></label>
                <input type='text' placeholder='Enter your email...' className={styles.registerInput} onChange={e=>setEmail(e.target.value)}></input>
                <label>Password<span className={styles.red}>*</span>{passerr?<span className={styles.red}> Password not the same!</span>:null}</label>
                <input type='password' className={styles.registerInput} onChange={e=>setPassword(e.target.value)}></input>
                <label>Confirm Your Password<span className={styles.red}>*</span></label>
                <input type='password' className={styles.registerInput} onChange={e=>setPassCheck(e.target.value)}></input>
                <button className={styles.registerBtn}>Register</button>
                <h5>Already haved account? Let's Login</h5>
                <Link to='/login'>
                    <button className={styles.loginBtn} type='submit'>Login</button>
                </Link>
            </form>
        </div>
    )

}
