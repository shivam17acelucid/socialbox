import React, { useState } from "react";
import './signup.scss';
import logo from '../../Assets/Images/logo.png'
import logo1 from '../../Assets/Images/logo1.png'
import { Input } from "reactstrap";
import Button from '@mui/material/Button';
import google from '../../Assets/Images/google_logo.png'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = () => {
        const url = `http://localhost:4000/signup`;
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ name, email, password, confirmPassword }),
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
                    navigate(`/`);
                }
            })
    }

    const handleLogin = () => {
        navigate(`/`);
    }

    return (
        <div className="signup_container">
            <div className="left_pane">
                <img src={logo} className='social_logo' />
                <div className="signup_form">
                    <div className="signup_header">Sign up</div>
                    <div className="signup_title">Let's Get Started with your free trial</div>
                    <div className="input_boxes">
                        <Input className="registeration_fields" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input className="registeration_fields" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <Input className="registeration_fields" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <Input className="registeration_fields" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        <Button onClick={handleSignup}>Sign up</Button>
                    </div>
                </div>
                <div className="login_link">
                    Already have an Account? <span onClick={handleLogin} style={{ cursor: 'pointer' }}>Log in</span>
                </div>
                <div className="social_login_btn">
                    <img src={google} height="14px" /><span style={{ marginLeft: '12px' }}>Log in with Google</span>
                </div>
                <div className="signup_footer">
                    ©︎ 2022 The Social Box. All rights reserved  |  Privacy policy
                </div>
            </div>
            <div className="right_pane">
                <div className="right_pane_text">
                    Get a brand ambassador
                    <span style={{ display: 'block' }}>to endorse your product.</span>
                    <span style={{ display: 'block' }}>Drive sales through</span>
                    <span style={{ display: 'block' }}>content creators.</span>
                </div>
            </div>
        </div>
    )
}
export default Signup;