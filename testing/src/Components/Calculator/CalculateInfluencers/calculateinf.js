import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../../Common/Sidebar/sidebar';
import Topbar from '../../../Common/TopBar/index';
import './calculateinf.scss';

function CalculateCost() {


    return (
        <div className='calculate_container'>
            <Navbar />
            <div className='middle_pane_calculate'>
                <Topbar />
                <div className='middle_pane_content'>

                </div>
            </div>
        </div>
    )
}
export default CalculateCost;