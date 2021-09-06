import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Register.module.css'
export default function Register() {
    return (
        <div className={styles.register}>
            <form className={styles.registerForm}>
                <span className={styles.registerTitle}>Register</span>
                <label>Account ID<span>*</span></label>
                <input type='text' placeholder='Enter account ID...' className={styles.registerInput}></input>
                <label>Email<span>*</span></label>
                <input type='text' placeholder='Enter your email...' className={styles.registerInput}></input>
                <label>Password</label>
                <input type='password' className={styles.registerInput}></input>
                <label>Confirm Your Password</label>
                <input type='password' className={styles.registerInput}></input>
                <button className={styles.registerBtn}>Register</button>
                <h5>Already haved account? Let's Login</h5>
                <Link to='/login'>
                    <button className={styles.loginBtn}>Login</button>
                </Link>
            </form>
        </div>
    )
}
