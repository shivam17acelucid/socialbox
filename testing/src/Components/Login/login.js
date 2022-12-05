import React, { useState } from "react";
import './login.scss';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import show from '../../../src/Assets/Images/show.png';
import logo from '../../../src/Assets/Images/logo.png';
import logo1 from '../../../src/Assets/Images/logo1.png';
import textbg from '../../Assets/Images/signupbgss.png';
import google from '../../../src/Assets/Images/google_logo.png';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        const url = 'http://localhost:4000/login';
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const { errors } = data;
                if (errors) {
                    console.log(errors)
                }
                else {
                    navigate(`/welcome`);
                    localStorage.setItem('id', data._id)
                    console.log(localStorage.getItem('id'))
                }
            })
    }

    const showPassword = () => {
        const data = passwordVisible ? false : true;
        setPasswordVisible(data)
    }


    return (
        <div className="login_container">
            <div className="left_pane">
                <img src={logo} className='social_logo' />
                <div className="welcome_heading">
                    <div>Welcome back,</div>
                    <div>Please Enter Your Details</div>
                    <div className="social_login_btn">
                        <img src={google} height="14px" /><span style={{ marginLeft: '12px' }}>Log in with Google</span>
                    </div>
                </div>
                <div className="login_form">
                    <input
                        type='text'
                        placeholder="Email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="registeration_fields"
                    />
                    <input
                        type={passwordVisible === true ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        className="registeration_fields"

                    />
                    {/* <img src={show} alt='' height='16px' width='28px' className='show_image' onClick={showPassword} /> */}
                    <span className="form_forgot_text">Forgot Password</span>
                    <Button onClick={handleLogin}><span className="form_login_btn">Login</span></Button>
                </div>
                <div className="signup_link">Don't have an Account? <Link to='/signup'>Signup for free</Link></div>
                <div className="signup_footer">
                    ©︎ 2022 The Social Box. All rights reserved  |  Privacy policy
                </div>
            </div>
            <div className="login_right">
                <div className="right_pane_top">
                    <div className="right_pane_text">
                        <span style={{ display: 'block' }}>Get a brand ambassador</span>
                        <span style={{ display: 'block' }}>to endorse your product.</span>
                        <span style={{ display: 'block' }}>Drive sales through</span>
                        <span style={{ display: 'block' }}>content creators.</span>
                    </div>
                </div>
                <div className="right_pane_bottom">
                </div>

            </div>

        </div>
    )
}
export default Login;