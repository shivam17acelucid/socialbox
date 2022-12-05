import React from "react";
import './index.scss';
import help from '../../Assets/Images/help.png';

function TopBar() {

    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('name');

    return (
        <div className="topbar">
            <div className="page_title">Home</div>
            <div style={{ display: 'flex' }}>
                <span className="topbar_help_icon"><img src={help} /></span>
                <span className="topbar_username">{userName}</span>
            </div>
        </div>
    )
}
export default TopBar;
