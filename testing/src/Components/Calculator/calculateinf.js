import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../Common/Sidebar/sidebar';
import Topbar from '../../Common/TopBar/index';
import './calculateinf.scss';
import { Input } from 'reactstrap';
import bdayIcon from '../../Assets/Images/bdayIcon.png';
import categoryIcon from '../../Assets/Images/categoryIcon.png';
import locationIcon from '../../Assets/Images/locationIcon.png';

function CalculateCost() {

    const [stepActive, setStepActive] = useState(false);
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);


    return (
        <div className='calculate_container'>
            <Navbar />
            <div className='middle_pane_calculate'>
                <Topbar />
                <div className='middle_pane_content'>
                    <div className='steps_pane'>
                        <div className='steps_pane_part'>
                            <div className='steps_pane_title'>Step 1</div>
                            <div className='followers_title'>
                                Followers
                            </div>
                            <div className='followers_count'>
                                Any
                            </div>
                            <div className='budget_influencers_title'>Budegt / Influencers</div>
                            <div className='budget_influencers_value'> -- </div>
                        </div>
                        <div className='steps_pane_part_inactive'>
                            <div className='steps_pane_title'>Step 2</div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Reels</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Static posts</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Videos</div>
                                </div>
                            </div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Swipeup Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Igtv</div>
                                </div>
                            </div>
                        </div>
                        <div className='steps_pane_part_inactive'>
                            <div className='steps_pane_title'>Step 3</div>
                            <div className='filter_pane'>
                                <img src={bdayIcon} /><div className='filter_value'> -- </div>
                            </div>
                            <div className='filter_pane'>
                                <img src={categoryIcon} /><div className='filter_value'> -- </div>
                            </div>
                            <div className='filter_pane'>
                                <img src={locationIcon} /><div className='filter_value'> -- </div>
                            </div>
                        </div>
                        <div className='steps_pane_part_inactive'>
                            <div className='steps_pane_title'>Step 4</div>
                            <div className='cost_title'>Estimated Cost</div>
                            <div className='cost_value'> ₹ --</div>
                        </div>
                    </div>
                    {
                        step1 === true ?
                            <>
                                <div className='content_pane'>
                                    <div className='steps_title'>Step 1</div>
                                    <div className='pane_title'>Influencer Stats</div>
                                    <div className='filter_content'>
                                        Adjust sliders for the followers count needed for
                                        your Influencer groups
                                    </div>

                                    <div className='content_bottom_pane'>
                                        <div className='select_title_field'>
                                            Select the budget or the number of influencers
                                            required for marketing
                                        </div>
                                        <div>
                                            <label>Budegt (INR)</label>
                                            ₹<Input className='input_box' />
                                        </div>
                                        <div>
                                            <label>No of influencers</label>
                                            <Input className='input_box' />
                                        </div>
                                    </div>
                                    <div>
                                        <Button>Next</Button>
                                    </div>
                                </div>
                                <div className='right_pane'>
                                    <div className='image1'></div>
                                    <div className='image2' style={{opacity: '0.2'}}>
                                    </div>
                                    <span className='indicator' style={{marginLeft: '2.5rem'}}>Specific</span>
                                    <span className='indicator' style={{marginLeft: '12rem'}}>Broad</span>
                                </div>
                            </>
                            :
                            null
                    }

                </div>
            </div>
        </div>
    )
}
export default CalculateCost;