import React, { useState } from "react";
import './login.scss';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import show from '../../../src/Assets/Images/show.png';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        let id = 0;
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
                    localStorage.setItem(id, data._id)
                    console.log(localStorage.getItem(id))
                }
            })
    }

    const showPassword = () => {
        const data = passwordVisible ? false : true;
        setPasswordVisible(data)
    }


    return (
        <div className="login_container">
            <div className="login_header">
                {/* <img src="" /> */}
            </div>
            <div className="login_body">
                <div className="login_video">Video Place</div>
                <div className="login_form">
                    <span className="login_form_header">Log In</span>
                    <form className="login_form_content">
                        <label className="form_label">Email Adress</label>
                        <input
                            type='text'
                            placeholder="Email Address"
                            className='form_input_address'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <label className="form_label">Password</label>
                        <input
                            type={passwordVisible === true ? 'text' : 'password'}
                            placeholder="Password"
                            className='form_input_address'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}

                        />
                        <img src={show} alt='' height='16px' width='28px' className='show_image' onClick={showPassword} />
                        <span className="form_forgot_text">Forgot Password</span>
                        <Button onClick={handleLogin}><span className="form_login_btn">Login</span></Button>
                    </form>
                    <span className="signup_link">Do not have an Account? <Link to='/signup'>Signup Instead</Link></span>
                </div>
            </div>


        </div>
    )
}
export default Login;