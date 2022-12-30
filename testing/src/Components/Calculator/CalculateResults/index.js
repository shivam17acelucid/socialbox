import React, { useState, useEffect } from "react";
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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [basicCost, setBasicCost] = useState(null);
    const [followersRange, setFollowersRange] = useState('');
    const [estimatedBudget, setEstimatedBudget] = useState(0);
    const [estimatedLikesComment, setEstimatedLikesComment] = useState(0);
    const [estimatedReach, setEstimatedReach] = useState(0);
    const [apiCalled, setApiCalled] = useState(false);
    const params = useParams();

    const handleSubmitQuery = () => {
        let estimatedCost = 0;
        {
            params.budget.includes('budget') ?
                estimatedCost = params.budget.substring(params.budget.indexOf('=') + 1)
                :
                estimatedCost = 0
        }
        const url = 'http://localhost:4000/submitQuery';
        fetch((url), {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ firstName, lastName, email, phone, message, estimatedCost })
        })
            .then((data) => {
                if (data) {
                    console.log("done");
                    setEmail('');
                    setMessage('');
                    setPhone('');
                    setFirstName('');
                    setLastName('')
                }
            })
    }

    const fetchBasicRates = () => {
        if (params.budget.includes('budget')) {
            let budget = params.budget.substring(params.budget.indexOf('=') + 1)
            let url = `http://localhost:4000/calculateBudget?followersRange=${followersRange}&budget=${budget}`;
            fetch(url)
                .then((res) => {
                    res.json()
                        .then((data) => {
                            setBasicCost(data)
                            setApiCalled(true)
                        })
                })
        }
        else if (params.budget.includes('creators')) {
            let creators = params.budget.substring(params.budget.indexOf('=') + 1);
            let url = `http://localhost:4000/calculateBudget?followersRange=${followersRange}&creatorsCount=${creators}`;
            fetch(url)
                .then((res) => {
                    res.json()
                        .then((data) => {
                            setBasicCost(data)
                            setApiCalled(true)
                        })
                })
        }

    }

    const calculateCost = () => {
        let estimatedbud;
        let estimatedlikescmt;
        let estimatedViews;
        if (apiCalled === true) {
            estimatedbud = (
                (params.deliverables.substring(params.deliverables.indexOf('l=') + 2)[0] * basicCost.reelBudget)
                +
                ((params.deliverables.substring(params.deliverables.indexOf('t=') + 2)[0]) * basicCost.postBudget)
                +
                (params.deliverables.substring(params.deliverables.indexOf('os=') + 3)[0] * basicCost.videoBudget)
                +
                (params.deliverables.substring(params.deliverables.indexOf('stories=') + 8)[0] * basicCost.storyBudget)
                +
                (params.deliverables.substring(params.deliverables.indexOf('swipeupStories=') + 15)[0] * basicCost.swipeUpBudget)
                +
                (params.deliverables.substring(params.deliverables.indexOf('v=') + 2)[0] * basicCost.igtvBudget)
            )
            setEstimatedBudget(estimatedbud)

            estimatedlikescmt = (
                (params.deliverables.substring(params.deliverables.indexOf('l=') + 2)[0] * basicCost.LikesCommentOfReel)
                +
                ((params.deliverables.substring(params.deliverables.indexOf('t=') + 2)[0]) * basicCost.LikesCommentOfPost)
                +
                (params.deliverables.substring(params.deliverables.indexOf('os=') + 3)[0] * basicCost.LikesCommentOfVideo)
                +
                (params.deliverables.substring(params.deliverables.indexOf('stories=') + 8)[0] * basicCost.LikesCommentOfStory)
                +
                (params.deliverables.substring(params.deliverables.indexOf('swipeupStories=') + 15)[0] * basicCost.LikesCommentOfSwipeup)
                +
                (params.deliverables.substring(params.deliverables.indexOf('v=') + 2)[0] * basicCost.LikesCommentOfIgtv)
            )
            setEstimatedLikesComment(estimatedlikescmt)

            estimatedViews = (
                (params.deliverables.substring(params.deliverables.indexOf('l=') + 2)[0] * basicCost.reachOfReel)
                +
                ((params.deliverables.substring(params.deliverables.indexOf('t=') + 2)[0]) * basicCost.reachOfPost)
                +
                (params.deliverables.substring(params.deliverables.indexOf('os=') + 3)[0] * basicCost.reachOfVideo)
                +
                (params.deliverables.substring(params.deliverables.indexOf('stories=') + 8)[0] * basicCost.reachOfStory)
                +
                (params.deliverables.substring(params.deliverables.indexOf('swipeupStories=') + 15)[0] * basicCost.reachOfSwipeup)
                +
                (params.deliverables.substring(params.deliverables.indexOf('v=') + 2)[0] * basicCost.reachOfIgtv)
            )
            setEstimatedReach(estimatedViews);
        }
    }

    useEffect(() => {
        let follower = params.followerRange.substring(params.followerRange.indexOf('=') + 1).split('&')[1];
        if (follower > 1000 && follower < 10000) {
            setFollowersRange('Nano')
        }
        else if (follower > 10000 && follower < 50000) {
            setFollowersRange('Micro')
        }
        else if (follower > 50000 && follower < 100000) {
            setFollowersRange('Mid-Tier')
        }
        else if (follower > 100000 && follower < 1000000) {
            setFollowersRange('Macro')
        }
        else if (follower > 1000000) {
            setFollowersRange('Mega')
        }
        if (followersRange) {
            fetchBasicRates();
        }
    }, [followersRange])

    useEffect(() => {
        calculateCost();
    }, [apiCalled])

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
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 5px #32A737', paddingLeft: '2rem', paddingRight: '1rem', paddingTop: '1rem', paddingBottom: '4px' }}>
                            <div className='steps_pane_title'>Step 3</div>
                            <div className='filter_pane'>
                                <img src={bdayIcon} />
                                <div className='filter_value' style={{ fontSize: '12px' }}>
                                    {
                                        params.demography.includes('age') ?
                                            (
                                                params.demography.substring(params.demography.indexOf('age')).split('=')[1].split('&')[0] === 'none' ?
                                                    '--'
                                                    :
                                                    params.demography.substring(params.demography.indexOf('gender')).split('=')[1].split('&')[0] === 'undefined' ?
                                                        params.demography.substring(params.demography.indexOf('age')).split('=')[1].split('&').length - 1 + 'age group'
                                                        :
                                                        params.demography.substring(params.demography.indexOf('age')).split('=')[1].split('&').length - 1 + 'age group ,' + params.demography.substring(params.demography.indexOf('gender')).split('=')[1].split('&')[0]
                                            )
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className='filter_pane'>
                                <img src={categoryIcon} />
                                <div className='filter_value'>
                                    {
                                        params.demography.includes('category') ?
                                            (
                                                params.demography.substring(params.demography.indexOf('category')).split('=')[1].split('&')[0] === 'none' ?
                                                    '--'
                                                    :
                                                    params.demography.substring(params.demography.indexOf('category')).split('=')[1].split('&').length - 1 + ' categories'
                                            )
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className='filter_pane'>
                                <img src={locationIcon} /><div className='filter_value'> -- </div>
                            </div>
                        </div>
                        <div className='steps_pane_part' style={{ borderLeft: 'solid 5px #7662DC' }}>
                            <div className='steps_pane_title'>Step 4</div>
                            <div className='cost_title'>Estimated Cost</div>
                            <div className='cost_value'>
                                {

                                    params.budget.includes('budget') ?
                                        '₹' + params.budget.substring(params.budget.indexOf('=') + 1)
                                        :
                                        '₹' + estimatedBudget
                                }
                            </div>
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
                                <div className="field_value">
                                    {
                                        params.budget.includes('budget') ?
                                            '₹' + params.budget.substring(params.budget.indexOf('=') + 1)
                                            :
                                            '₹' + NFormatter(estimatedBudget)
                                    }
                                </div>
                            </div>
                            <div className="field_pane">
                                <div className="field_label">No of Creators</div>
                                <div className="field_value">
                                    {
                                        params.budget.includes('budget') ?
                                            '-'
                                            :
                                            params.budget.substring(params.budget.indexOf('=') + 1)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="estimated_field_pane_2">
                            <div className="field_pane_2" style={{ marginLeft: 0 }}>
                                <div className="field_label">Est Likes & Comment</div>
                                <div className="field_value">{NFormatter(estimatedLikesComment)}</div>
                            </div>
                            <div className="field_pane_2">
                                <div className="field_label">Est Views</div>
                                <div className="field_value">{NFormatter(estimatedReach)}</div>
                            </div>
                        </div>
                        <div className="result_pane_2_title">
                            For a tailor-made solution as per your needs, call (+91) 98765 43210, or submit your details for a call later.
                        </div>
                        <div className="enquiry_form">
                            <div className="name_pane">
                                <Input className="enquiry_field" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <Input className="enquiry_field" style={{ marginLeft: '4px' }} placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                            </div>
                            <div className="email_pane">
                                <Input className="enquiry_field_2" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mobile_pane">
                                <Input className="enquiry_field_2" placeholder="Phone no" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                            </div>
                            <div className="message_pane">
                                <Input className="enquiry_field_3" placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                            </div>
                        </div>
                        <div className="bottom_title">
                            You can change the parameters to update your estimate
                        </div>
                        <div>
                            <Button onClick={handleSubmitQuery}>Submit</Button>
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