import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../../Common/Sidebar/sidebar'
import './cpinf.scss';
import Topbar from '../../../Common/TopBar/index';
import Testing from '../.././../Assets/Images/testing.png';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { HiOutlineUser } from 'react-icons/hi';
import { FcLike, FcComments, FcBinoculars, FcRating } from 'react-icons/fc';
import NFormatter from '../../../Common/NumberFormatter/numFormatter';
import { AiOutlineClose } from 'react-icons/ai';

function CompareInfluencers() {

    const [influencer1Name, setInfluencer1Name] = useState('');
    const [influencer2Name, setInfluencer2Name] = useState('');
    const [influencer3Name, setInfluencer3Name] = useState('');
    const [influencersArray, setInfluencersArray] = useState([]);
    const [comparedInfluencersData, setComparedInfluencersData] = useState([]);
    const [paramsChanged, setParamsChanged] = useState(false);
    const [addToListTableClicked, setAddToListTableClicked] = useState(false);
    const [listData, setListData] = useState([]);
    const [resultClickedData, setResultClickedData] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    const userId = localStorage.getItem('id');

    // const handleCompareInfluencers = (influencer1Name, influencer2Name, influencer3Name) => {
    //     setComparedInfluencersData([]);
    //     const url = `http://localhost:4000/compareInfluencers?influencer1name=${influencer1Name}&influencer2name=${influencer2Name}&influencer3name=${influencer3Name}`;
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setComparedInfluencersData(data);
    //         })
    // }

    const handleCompareInfluencers = (influencersArray) => {
        // setComparedInfluencersData([]);
        // const url = `http://localhost:4000/compareInfluencers`;
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setComparedInfluencersData(data);
        //     })
        // const url = `http://localhost:4000/compareInfluencers?${result}`;
        // fetch(url)
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {
        //                 console.log(data)
        //             })
        //     })
    }

    const handleAddInfluencer = () => {

    }

    const handleAddToListTable = (e) => {
        setResultClickedData(e.username)
        const toggle = addToListTableClicked ? false : true;
        setAddToListTableClicked(toggle);
    }

    const getListData = () => {
        const url = `http://localhost:4000/getListData/${userId}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((result) => {
                        setListData(result)
                    })
            })
    }

    const addInfluencerToList = (element, elm) => {
        const url = `http://localhost:4000/addInfluencersToList/${userId}?list=${elm.listName}&username=${element.username}`
        fetch((url), {
            method: 'POST',
        })
            .then((data) => { data.json() })
            .then((res) => {
                console.log(res)
            })
        setAddToListTableClicked(false)
    }

    const redirectToProfile = (item) => {
        navigate(`/profile/${item.username}`)
    }

    const handleCompareInfluencersByParams = () => {
        if (JSON.stringify(params) !== '{}') {
            let query = params.influencers.substring(1);
            const url = `http://localhost:4000/compareInfluencers?${query}`;
            fetch(url)
                .then((res) => {
                    res.json()
                        .then((data) => {
                            setComparedInfluencersData(data)
                        })
                })
        }
        else {
            console.log("hey")
            setComparedInfluencersData([])
        }

    }

    useEffect(() => {
        handleCompareInfluencersByParams();
        getListData();
    }, [params])

    return (
        <div className='compare_influencers_container'>
            <Navbar />
            <div style={{ flex: 1, width: '100vh' }}>
                <Topbar />
                {/* <div className='input_fields'>
                    <input
                        type='text'
                        value={influencer1Name}
                        onChange={(e) => { setInfluencer1Name(e.target.value) }}
                    />
                    <input
                        type='text'
                        value={influencer2Name}
                        onChange={(e) => { setInfluencer2Name(e.target.value) }}
                    />
                    <input
                        type='text'
                        value={influencer3Name}
                        onChange={(e) => { setInfluencer3Name(e.target.value) }}
                    />
                    <Button onClick={() => { handleCompareInfluencers(influencer1Name, influencer2Name, influencer3Name, influencersArray) }}><span>Search</span></Button>
                </div> */}
                <div className='result_pane'>
                    {
                        comparedInfluencersData.map((item) =>
                            <div className='results'>
                                <div className='profile_container'>
                                    <img src={Testing} className='image' />
                                </div>
                                <div className='profile_name' onClick={() => { redirectToProfile(item) }}>{item.full_name}</div>
                                <div className='profile_username'>@{item.username}</div>
                                <div className='profile_location'>{item.city_name}</div>
                                {
                                    item.category_enum ?

                                        <div style={{ padding: '12px' }}>
                                            <div className='profile_category'>{item.category_enum}</div>
                                        </div>
                                        : null
                                }
                                <div className='profile_followers'><HiOutlineUser />{NFormatter(item.edge_followed_by.count)}</div>
                                <div className='like_comment_box'>
                                    <div className='profile_like'><FcLike /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_likes)}</span></div>
                                    <div className='profile_comment'><FcComments /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_comment)}</span></div>
                                </div>
                                <div className='like_comment_box'>
                                    <div className='profile_like'><FcBinoculars /><span>{NFormatter(item.edge_felix_video_timeline.edges[0].averageReelView)}</span></div>
                                    <div className='profile_comment'><FcRating /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[0].er)}</span></div>
                                </div>
                                <div className='list_remove_pane'>
                                    <div onClick={() => { handleAddToListTable(item) }}>+Add to my List</div>
                                    {addToListTableClicked === true ?
                                        item.username == resultClickedData ?
                                            [item].map((elm) =>
                                                <section className="addList_section" id={item.id}>
                                                    <div className="addList_option">
                                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={handleAddToListTable}><AiOutlineClose /></div>
                                                        <div className="section_list_title">
                                                            Select the list to which you want to add the
                                                            influencer.
                                                        </div>
                                                        <div style={{ overflowY: 'scroll', height: '20vh', padding: '12px' }}>
                                                            {listData.map((element) =>
                                                                <div className="list_options" onClick={() => { addInfluencerToList(elm, element) }}>
                                                                    {element.listName}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </section>
                                            )

                                            : null
                                        : null}
                                    <div>Remove</div>
                                </div>
                                <div className='recent_posts'>
                                    <div className='recent_posts_title'>Recent Posts</div>
                                    <div className='recent_post_box'>
                                        <img src={Testing} />
                                        <div style={{ paddingLeft: '8px' }}>
                                            <div className='profile_like'><FcLike />{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_likes)}</div>
                                            <div className='profile_comment'><FcComments />{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_comment)}</div>
                                            <div className='profile_like'><FcBinoculars />{NFormatter(item.edge_felix_video_timeline.edges[0].averageReelView)}</div>
                                        </div>
                                    </div>
                                    <div className='recent_post_box'>
                                        <img src={Testing} />
                                        <div style={{ paddingLeft: '8px' }}>
                                            <div className='profile_like'><FcLike />{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_likes)}</div>
                                            <div className='profile_comment'><FcComments />{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_comment)}</div>
                                            <div className='profile_like'><FcBinoculars />{NFormatter(item.edge_felix_video_timeline.edges[0].averageReelView)}</div>
                                        </div>
                                    </div>
                                    <div className='recent_post_box'>
                                        <img src={Testing} />
                                        <div style={{ paddingLeft: '8px' }}>
                                            <div className='profile_like'><FcLike />{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_likes)}</div>
                                            <div className='profile_comment'><FcComments />{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_comment)}</div>
                                            <div className='profile_like'><FcBinoculars />{NFormatter(item.edge_felix_video_timeline.edges[0].averageReelView)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className='add_influencers'>
                        <div className='add_btn' onClick={handleAddInfluencer}>+</div>
                        <div className='add_inf' onClick={handleAddInfluencer}>Add Influencer</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default CompareInfluencers;