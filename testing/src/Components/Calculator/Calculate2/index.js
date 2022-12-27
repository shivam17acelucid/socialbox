import React, { useState } from 'react';
import Navbar from '../../../Common/Sidebar/sidebar';
import Topbar from '../../../Common/TopBar/index';
import './index.scss';
import bdayIcon from '../../../Assets/Images/bdayIcon.png';
import categoryIcon from '../../../Assets/Images/categoryIcon.png';
import locationIcon from '../../../Assets/Images/locationIcon.png';
import { useParams, useNavigate } from 'react-router-dom';
import NFormatter from '../../../Common/NumberFormatter/numFormatter';
import Button from '@mui/material/Button';

function CalculateDeliverables() {

    const [reels, setReels] = useState(0);
    const [posts, setPosts] = useState(0);
    const [videos, setVideos] = useState(0);
    const [stories, setStories] = useState(0);
    const [swipeupStories, setSwipeupStories] = useState(0);
    const [igtv, setIgtv] = useState(0);
    const params = useParams();
    return (
        <div className='calculate_2_container'>
            <Navbar />
            <div className='middle_pane_calculate'>
                <Topbar />
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
                        <div className='steps_pane_part' style={{ borderLeft: 'solid 5px #D04B4B' }}>
                            <div className='steps_pane_title'>Step 2</div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{reels}</div>
                                    <div className='deliverables_title'>Reels</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{posts}</div>
                                    <div className='deliverables_title'>Static posts</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{videos}</div>
                                    <div className='deliverables_title'>Videos</div>
                                </div>
                            </div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{stories}</div>
                                    <div className='deliverables_title'>Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{swipeupStories}</div>
                                    <div className='deliverables_title'>Swipeup Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> {igtv}</div>
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
                    <div className='content_pane'>
                        <div className='step_count'>
                            Step 2
                        </div>
                        <div className='step_title'>
                            Deliverables
                        </div>
                        <div className='step_desc'>
                            Set the type and count of deliverables required
                            from each influencer
                        </div>
                        <div className='deliverables_box'>
                            <div>Reels</div>
                            <div className='deliverables_value'>
                                {
                                    reels === 0 ?
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }}>-</div>
                                        :
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setReels(reels - 1) }}>-</div>
                                }
                                <div style={{ width: '80px', textAlign: 'center' }}>{reels}</div>
                                <div style={{ borderLeft: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setReels(reels + 1) }}>+</div>
                            </div>
                        </div>
                        <div className='deliverables_box'>
                            <div>Static Posts</div>
                            <div className='deliverables_value'>
                                {
                                    posts === 0 ?
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }}>-</div>
                                        :
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setPosts(posts - 1) }}>-</div>

                                }
                                <div style={{ width: '80px', textAlign: 'center' }}>{posts}</div>
                                <div style={{ borderLeft: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setPosts(posts + 1) }}>+</div>
                            </div>
                        </div>
                        <div className='deliverables_box'>
                            <div>Videos</div>
                            <div className='deliverables_value'>
                                {
                                    videos === 0 ?
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }}>-</div>
                                        :
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => setVideos(videos - 1)}>-</div>
                                }
                                <div style={{ width: '80px', textAlign: 'center' }}>{videos}</div>
                                <div style={{ borderLeft: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => setVideos(videos + 1)}>+</div>
                            </div>
                        </div>
                        <div className='deliverables_box'>
                            <div>Stories</div>
                            <div className='deliverables_value'>
                                {
                                    stories === 0 ?
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }}>-</div>
                                        :
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setStories(stories - 1) }}>-</div>
                                }
                                <div style={{ width: '80px', textAlign: 'center' }}>{stories}</div>
                                <div style={{ borderLeft: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setStories(stories + 1) }}>+</div>
                            </div>
                        </div>
                        <div className='deliverables_box'>
                            <div>Swipeup Stories</div>
                            <div className='deliverables_value'>
                                {
                                    swipeupStories === 0 ?
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }}>-</div>
                                        :
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => setSwipeupStories(swipeupStories - 1)}>-</div>

                                }
                                <div style={{ width: '80px', textAlign: 'center' }}>{swipeupStories}</div>
                                <div style={{ borderLeft: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => setSwipeupStories(swipeupStories + 1)}>+</div>
                            </div>
                        </div>
                        <div className='deliverables_box'>
                            <div>Igtv</div>
                            <div className='deliverables_value'>
                                {
                                    igtv === 0 ?
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }}>-</div>
                                        :
                                        <div style={{ borderRight: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setIgtv(igtv - 1) }}>-</div>
                                }
                                <div style={{ width: '80px', textAlign: 'center' }}>{igtv}</div>
                                <div style={{ borderLeft: '1px solid RGB(0, 0, 0, 0.5)', width: '42px', textAlign: 'center' }} onClick={() => { setIgtv(igtv + 1) }}>+</div>
                            </div>
                        </div>
                        <div>
                            <Button>Next</Button>
                        </div>
                    </div>
                    <div className='right_pane'>
                        <div className='image1'></div>
                        <div className='image2' style={{ opacity: '0.2' }}>
                        </div>
                        <span className='indicator' style={{ marginLeft: '2.5rem' }}>Specific</span>
                        <span className='indicator' style={{ marginLeft: '12rem' }}>Broad</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalculateDeliverables;