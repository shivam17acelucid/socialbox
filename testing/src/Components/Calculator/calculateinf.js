import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../Common/Sidebar/sidebar';
import Topbar from '../../Common/TopBar/index';
import './calculateinf.scss';
import CalculateBg1 from '../../Assets/Images/calculatebg1.png';
import CalculateBg2 from '../../Assets/Images/calculate2.png';

function CalculateCost() {

    const [stepActive, setStepActive] = useState(false);


    return (
        <div className='calculate_container'>
            <Navbar />
            <div className='middle_pane_calculate'>
                <Topbar />
                <div className='middle_pane_content'>
                    <div className='steps_pane'>
                        <div className={stepActive ? 'steps_pane_part' : 'steps_pane_part_active'}>a</div>
                        <div className={stepActive ? 'steps_pane_part' : 'steps_pane_part_active'}>b</div>
                        <div className={stepActive ? 'steps_pane_part' : 'steps_pane_part_active'}>b</div>
                        <div className={stepActive ? 'steps_pane_part' : 'steps_pane_part_active'}>d</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CalculateCost;