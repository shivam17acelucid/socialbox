import React from 'react';
import './index.scss';
import TopBar from '../../Common/TopBar/index';
import SideBar from "../../Common/Sidebar/sidebar";

function ProfileSettings() {
    return (
        <div className='update_profile_container'>
            <SideBar />
            <div className='main_pane'>
                <TopBar />
                <div className='middle_pane'>

                </div>
            </div>
        </div>
    )
}
export default ProfileSettings;