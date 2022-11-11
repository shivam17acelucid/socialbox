import React, { useState } from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './listpage.scss';


function Lists() {

    const [inputField, setInputField] = useState('');
    let navigate = useNavigate();

    const searchInfluencers = () => {
        navigate(`/influencerslist/${inputField}`);
    }

    return (
        <>
            <div className='list_container'>
                <Navbar />
                <div className='lists_content'>
                    <div className='middle_pane_lists'>
                        <div className='list_headers'>
                            <input type='text' value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder='Search for influencers, categoriest, topics...' className='input_search' />
                            <Button className='button_list' onClick={searchInfluencers}>Search</Button>
                        </div>
                        <div className='middle_pane_content'>
                            <div className='categorised_inf'>
                                <div className='categorised_heading'>Top Influencers by Category</div>
                                <div className='categorised_btn'>
                                    <Button className='button_list'>Travel</Button>
                                    <Button className='button_list'>Photography</Button>
                                    <Button className='button_list'>Cinema</Button>
                                    <Button className='button_list'>Finance</Button>
                                    <Button className='button_list'>Cricket</Button>
                                    <Button className='button_list'>Lifestyle</Button>
                                    <Button className='button_list'>Music</Button>
                                    <Button className='button_list'>Gaming</Button>
                                    <Button className='button_list'>Art</Button>
                                    <Button className='button_list'>Motivation</Button>
                                </div>
                            </div>
                            <div className='influencers_basket'>
                                <div className='influencers_image'>
                                    xyz
                                </div>
                                <div className='influencers_category_header'>
                                    Top 20 Influencers Bundle
                                </div>
                                <div className='basket_p'>
                                    Boost your marketing campaigns with best travel influencers bundle covering top 20 influencers
                                </div>
                                <div className='influencers_footer_btn'>
                                    <Button><span>Buy Now</span></Button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='recent_searches'>
                        <div className='list_toggler'>
                            shop
                            Hey User^
                        </div>
                        <div className='recent_searches_content'>
                            <div className='recent_header'>
                                Recent Searches
                            </div>
                            <div className='recent_search_box'>
                                <div className='recent_box_flex'>
                                    <div className='inf_img'>
                                        xyz
                                    </div>
                                    <div className='influencers_name'>
                                        UserName
                                    </div>
                                </div>
                                <div className='category'>
                                    sport xyz model
                                </div>
                                <div className='profile_btn'>
                                    <Button><span>View Profile</span></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Lists;