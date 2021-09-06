import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <form className='loginForm'>
                <span className="loginTitle">Login</span>
                <label>Account ID</label>
                <input type='text' placeholder='Welcome back!' className='loginInput'></input>
                <label>Password</label>
                <input type='password' className='loginInput'></input>
                <button className='loginBtn'>Login</button>
                <h5>Don't have an account?</h5>
                <Link to='/register'>
                    <button className='registerBtn'>Register</button>
                </Link>
            </form>
        </div>
    )
}
export default Login