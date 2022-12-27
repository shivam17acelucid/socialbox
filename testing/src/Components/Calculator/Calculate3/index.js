import React from "react";
import TopBar from "../../../Common/TopBar";
import Navbar from "../../../Common/Sidebar/sidebar";
import './index.scss';
import NFormatter from "../../../Common/NumberFormatter/numFormatter";
import { useParams } from "react-router-dom";
import bdayIcon from '../../../Assets/Images/bdayIcon.png';
import categoryIcon from '../../../Assets/Images/categoryIcon.png';
import locationIcon from '../../../Assets/Images/locationIcon.png';
import { Input } from 'reactstrap';
import Button from '@mui/material/Button';


function CalculateFilters() {

    const params = useParams();
    return (
        <div className="calculate3_container">
            <Navbar />
            <div className='middle_pane_calculate'>
                <TopBar />
                <div className='middle_pane_content'>
                    <div className='steps_pane'>
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 5px #357AFF' }}>
                            <div className='steps_pane_title'>Step 1</div>
                            <div className='followers_title'>
                                Followers
                            </div>
                            <div className='followers_count'>
                                {NFormatter(params.followerRange.substring(params.followerRange.indexOf('=') + 1).replace('&', ' - '))}
                            </div>
                            <div className='budget_influencers_title'>Budget / Influencers</div>
                            <div className='budget_influencers_value'>
                                {
                                    params.budget.includes('budget') ?
                                        '₹' + params.budget.substring(params.budget.indexOf('=') + 1)
                                        :
                                        params.budget.substring(params.budget.indexOf('=') + 1) + ' Influencers'
                                }
                            </div>
                        </div>
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 5px #D04B4B' }}>
                            <div className='steps_pane_title'>Step 2</div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('l=') + 2)[0]}</div>
                                    <div className='deliverables_title'>Reels</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('t=') + 2)[0]}</div>
                                    <div className='deliverables_title'>Static posts</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('os=') + 3)[0]}</div>
                                    <div className='deliverables_title'>Videos</div>
                                </div>
                            </div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('stories=') + 8)[0]}</div>
                                    <div className='deliverables_title'>Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('swipeupStories=') + 15)[0]}</div>
                                    <div className='deliverables_title'>Swipeup Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('v=') + 2)[0]}</div>
                                    <div className='deliverables_title'>Igtv</div>
                                </div>
                            </div>
                        </div>
                        <div className='steps_pane_part' style={{ borderLeft: 'solid 5px #32A737' }}>
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
                    <div className="content_pane">
                        <div className='step_count'>Step3</div>
                        <div className='step_title'>
                            Target Demographies
                        </div>
                        <div className="content_title">
                            Set the age and gender of your target audience
                        </div>
                        <div className="pane_1">
                            <div className="filter_1">
                                <label>Age group(s)</label>
                                <Input className="filter_field" />
                            </div>
                            <div className="filter_1">
                                <label>Gender</label>
                                <Input className="filter_field" />
                            </div>
                        </div>
                        <div className="pane_2_title">
                            Set the age and gender of your target audience
                        </div>
                        <div className="pane_2">
                            <div className="filter_2">
                                <label>Categories / Keywords</label>
                                <Input className="filter_field" />
                            </div>
                        </div>
                        <div className="pane_3_title">
                            Select the geographical region and/or major cities
                            to target
                        </div>
                        <div className="pane_3">
                            <div className="pane_3_filter">
                                <Input type="checkbox" className="checkbox_input" />
                                <label>Region</label>
                                <Input className="filter_field" />
                            </div>
                            <div className="pane_3_filter">
                                <Input type="checkbox" className="checkbox_input" />
                                <label>Cities</label>
                                <Input className="filter_field" />
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>
                            <Button>Next</Button>
                        </div>
                    </div>
                    <div className="right_pane">
                        <div className="image_1"></div>
                        <div className="image_2"></div>
                        <span className='indicator' style={{ marginLeft: '2.5rem' }}>Specific</span>
                        <span className='indicator' style={{ marginLeft: '12rem' }}>Broad</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalculateFilters;