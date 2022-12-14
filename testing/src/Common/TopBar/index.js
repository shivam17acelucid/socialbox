import React, { useState } from "react";
import './index.scss';
import help from '../../Assets/Images/help.png';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import UserIcon from '../../Assets/Images/userIcon.png';

function TopBar() {

    const [showDropDownSelected, setShowDropdownSelected] = useState(false);
    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('name');
    const navigate = useNavigate();
    const location = useLocation();

    let TOPBAR_TEXTS = [{ page: `/home/${userId}`, text: "Home" }, { page: "/calculator", text: "Calculator" }, { page: "/influencerslist/", text: "Search Results" }, { page: "/basketInfluencers", text: "Influencer Bundle" }, { page: "/userLists", text: "List" }, { page: "/profile", text: "Influencer Profile" }, { page: `/updateprofile/${userId}`, text: "Profile Settings" }]
    let textToShow = TOPBAR_TEXTS.find(el => location.pathname.includes(el.page))?.text

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
        <Link to='/login' />
        localStorage.clear();
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
                <div className="page_title">{textToShow}</div>
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
                        <div onClick={handleLogout} className="dropdown_title"><Link to='/login'>Logout</Link></div>
                    </div>
                    : null
            }
        </>
    )
}
export default TopBar;
