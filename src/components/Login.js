import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

import axios from '../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // will only run once, when the page loads
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // error message clears if the username AND password get filled
    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({user, pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('missing Username or password');
            }   else if (err.response?.status === 401) {
                setErrMsg('unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

    }

    
    return (
        <>
        {success ? (
        <section style={{color: 'white'}}>
            <h1>You're Logged In!</h1>
            <br/>
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
        ) : (
        <section style={{color: 'white'}}>
            <p ref={errRef} className={errMsg ? 'errmsg' : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form  onSubmit={handleSubmit}>
                <label  htmlFor="username">Username</label>
                <input
                    className='search-bar'
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    placeholder='ChubbyBunny231'
                    onChange={(e) => setUser(e.target)}
                    // value={user}
                    required 
                    />
                <label htmlFor="password">Password</label>
                <input 
                    className='search-bar'
                    type="password" 
                    id="password"
                    autoComplete="off"
                    placeholder='*****'
                    onChange={(e) => setPwd(e.target)}
                    // value={Pwd}
                    required 
                    />
                {/* dont need onclick event for SignIn Button, since its the only button on this form */}
                <button>Sign In</button>
            </form>
            <p>
                Need an Account? <br/>
                <span className='line'>
                    <a href="##">Sign Up</a>
                </span>
            </p>
        </section>)}
    </>
  )
}

export default Login