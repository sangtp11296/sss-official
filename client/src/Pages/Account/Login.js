import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './Login.css'

function Login(props) {
    props.setWhiteHeaderCallback(true);

    const userRef = useRef();
    const passRef = useRef();
    const { dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e)=> {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"})
        }
    }
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <span className="loginTitle">Login</span>
                <label>Account ID</label>
                <input type='text' placeholder='Welcome back!' className='loginInput' ref={userRef}></input>
                <label>Password</label>
                <input type='password' className='loginInput' ref={passRef}></input>
                <button className='loginBtn' type='submit' disabled={isFetching}>Login</button>
                <h5>Don't have an account?</h5>
                <Link to='/register'>
                    <button className='registerBtn'>Register</button>
                </Link>
            </form>
        </div>
    )
}
export default Login