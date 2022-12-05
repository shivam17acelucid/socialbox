import React from "react";
import './index.scss';
import help from '../../Assets/Images/help.png';

function TopBar() {
    return (
        <div className="topbar">
            <div className="page_title">Home</div>
            <div><img src={help} /></div>
            <div>Username</div>
        </div>
    )
}
export default TopBar;
