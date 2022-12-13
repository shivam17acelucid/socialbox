import React, { useState } from "react";
import './index.scss';
import help from '../../Assets/Images/help.png';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useNavigate, redirect } from 'react-router-dom';
import UserIcon from '../../Assets/Images/userIcon.png';

function TopBar() {

    const [showDropDownSelected, setShowDropdownSelected] = useState(false);
    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('name');
    const navigate = useNavigate();

    const handleShowProfileDropdown = () => {
        let data = showDropDownSelected ? false : true;
        setShowDropdownSelected(data)
    }

    const handleRedirectToProfileSettings = () => {
        navigate(`/updateprofile/${userId}`)
    }

    const handleRedireactToAbout = () => {
        navigate(`/about`)
    }

    const handleLogout = () => {
        localStorage.clear();
        // <redirect to='/login' />
        // let url = `http://localhost:4000/logout`;
        // fetch((url), {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     }
        // })
    }

    return (
        <>
            <div className="topbar">
                <div className="page_title">Home</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="topbar_help_icon"><img src={help} /></span>
                    <img src={UserIcon} className="topbar_user_icon" />
                    <span className="topbar_username">{userName}</span>
                    <span style={{ marginRight: '4rem', cursor: 'pointer' }}><MdOutlineArrowDropDown onClick={handleShowProfileDropdown} /></span>
                </div>
            </div>
            {
                showDropDownSelected === true ?
                    <div className="dropdown">
                        <div onClick={handleRedirectToProfileSettings} className="dropdown_title">Profile Settings</div>
                        <div onClick={handleRedireactToAbout} className="dropdown_title">About</div>
                        <div onClick={handleLogout} className="dropdown_title">Logout</div>
                    </div>
                    : null
            }
        </>
    )
}
export default TopBar;
