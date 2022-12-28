import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../../../Common/Sidebar/sidebar";
import TopBar from "../../../Common/TopBar";
import NFormatter from "../../../Common/NumberFormatter/numFormatter";
import bdayIcon from '../../../Assets/Images/bdayIcon.png';
import categoryIcon from '../../../Assets/Images/categoryIcon.png';
import locationIcon from '../../../Assets/Images/locationIcon.png';
import { Input } from 'reactstrap';
import Button from '@mui/material/Button';
import './index.scss';

function CalculateTotal() {

    const params = useParams();

    return (
        <div className="calculate_4_container">
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
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 5px #32A737' }}>
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
                        <div className='steps_pane_part' style={{ borderLeft: 'solid 5px #7662DC' }}>
                            <div className='steps_pane_title'>Step 4</div>
                            <div className='cost_title'>Estimated Cost</div>
                            <div className='cost_value'> ₹ --</div>
                        </div>
                    </div>
                    <div className="content_pane">
                        <div className='step_count'>STEP 4</div>
                        <div className='step_title'>
                            Estimate
                        </div>
                        <div className="content_title">
                            The estimated cost for influencer marketing as per selected parameters is
                        </div>
                        <div className="estimated_field_pane">
                            <div className="field_pane" style={{ marginLeft: 0 }}>
                                <div className="field_label">Est Cost</div>
                                <div className="field_value">₹2000000</div>
                            </div>
                            <div className="field_pane">
                                <div className="field_label">No of Creators</div>
                                <div className="field_value">10-12</div>
                            </div>
                        </div>
                        <div className="estimated_field_pane_2">
                            <div className="field_pane_2" style={{ marginLeft: 0 }}>
                                <div className="field_label">Est Likes</div>
                                <div className="field_value">50000</div>
                            </div>
                            <div className="field_pane_2">
                                <div className="field_label">Est Comments</div>
                                <div className="field_value">20000</div>
                            </div>
                            <div className="field_pane_2">
                                <div className="field_label">Est Views</div>
                                <div className="field_value">55000</div>
                            </div>
                            <div className="field_pane_2">
                                <div className="field_label">Eng Rate</div>
                                <div className="field_value">8%</div>
                            </div>
                        </div>
                        <div className="result_pane_2_title">
                            For a tailor-made solution as per your needs, call (+91) 98765 43210, or submit your details for a call later.
                        </div>
                        <div className="enquiry_form">
                            <div className="name_pane">
                                <Input className="enquiry_field" />
                                <Input className="enquiry_field" style={{ marginLeft: '4px' }} />
                            </div>
                            <div className="email_pane">
                                <Input className="enquiry_field_2" />
                            </div>
                            <div className="mobile_pane">
                                <Input className="enquiry_field_2" />
                            </div>
                            <div className="message_pane">
                                <Input className="enquiry_field_3" />
                            </div>
                        </div>
                        <div className="bottom_title">
                            You can change the parameters to update your estimate
                        </div>
                        <div>
                            <Button>Submit</Button>
                        </div>
                    </div>
                    <div className="right_pane">
                        <div className="image_1"></div>
                        <div className="image_2"></div>
                        <span className='indicator' style={{ marginLeft: '7.5rem' }}>Specific</span>
                        <span className='indicator' style={{ marginLeft: '12rem' }}>Broad</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalculateTotal;