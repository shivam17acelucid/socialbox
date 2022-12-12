import React, { useState } from 'react';
import './index.scss';
import TopBar from '../../Common/TopBar/index';
import SideBar from "../../Common/Sidebar/sidebar";
import Profile from '../../Assets/Images/profile.png';
import { Input } from 'reactstrap';
import Button from '@mui/material/Button';

function ProfileSettings() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('')

    return (
        <div className='update_profile_container'>
            <SideBar />
            <div className='main_pane'>
                <TopBar />
                <div className='middle_pane'>
                    <div className='pane1_3'>
                        <img src={Profile} />
                    </div>
                    <div className='pane2_3'>
                        <div>Personal Details</div>
                        <Input
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className="update_input_fields"
                        />
                        <Input
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="update_input_fields"
                        />
                        <Input
                            type='tel'
                            placeholder='Mobile'
                            value={mobile}
                            onChange={(e) => { setMobile(e.target.value) }}
                            className="update_input_fields"
                        />
                        <div>
                            Adress
                        </div>
                        <Input
                            type='text'
                            placeholder='Apartment # / Building'
                            className="update_input_fields"
                        />
                        <Input
                            type='text'
                            placeholder='Street name / Locality'
                            className="update_input_fields"
                        />
                        <Input
                            type='text'
                            placeholder='Landmark (optional)'
                            className="update_input_fields"
                        />
                        {/* <Input
                            type='text'
                            placeholder='City / District'
                            className="update_input_fields"
                        /> */}
                        {/* <Input
                            type='text'
                            placeholder='State'
                            className="update_input_fields"
                        />
                        <Input
                            type='text'
                            placeholder='PIN'
                            className="update_input_fields"
                        /> */}
                        <div className='btn_div'>
                            <Button>Save</Button>
                            <Button className='cancel_btn'>Cancel</Button>
                        </div>
                    </div>
                </div>
                <div className='footer_pane'>
                    ©︎ 2022 The Social Box. All rights reserved.
                </div>
            </div>
        </div>
    )
}
export default ProfileSettings;