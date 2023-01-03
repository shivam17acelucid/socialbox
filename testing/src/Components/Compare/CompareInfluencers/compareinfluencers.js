import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../../Common/Sidebar/sidebar'
import './cpinf.scss';
import Topbar from '../../../Common/TopBar/index';
import Testing from '../.././../Assets/Images/testing.png';
import { useParams, useNavigate, Link } from "react-router-dom";
import { HiOutlineUser } from 'react-icons/hi';
import { FcRating } from 'react-icons/fc';
import NFormatter from '../../../Common/NumberFormatter/numFormatter';
import LikeIcon from '../../../Assets/Images/likeIcon.png'
import CommentIcon from '../../../Assets/Images/commentIcon.png'
import ER from '../../../Assets/Images/er.png'
import ViewIcon from '../../../Assets/Images/viewIcon.png'
import { AiOutlineClose } from 'react-icons/ai';

function CompareInfluencers() {

    const [comparedInfluencersData, setComparedInfluencersData] = useState([]);
    const [paramsChanged, setParamsChanged] = useState(false);
    const [addToListTableClicked, setAddToListTableClicked] = useState(false);
    const [listData, setListData] = useState([]);
    const [resultClickedData, setResultClickedData] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState('');
    const [autoSuggestedData, setAutoSuggestedData] = useState([]);
    const [influencer, setInfluencer] = useState([]);
    const [addToCompareClicked, setAddToCompareClicked] = useState(false);
    const [addToCompareData, setAddToCompareData] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const userId = localStorage.getItem('id');
    let autoSuggestedArray = [];

    // const handleCompareInfluencers = (influencer1Name, influencer2Name, influencer3Name) => {
    //     setComparedInfluencersData([]);
    //     const url = `http://localhost:4000/compareInfluencers?influencer1name=${influencer1Name}&influencer2name=${influencer2Name}&influencer3name=${influencer3Name}`;
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setComparedInfluencersData(data);
    //         })
    // }


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

    const fetchAllData = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        res.map((item) => {
                            autoSuggestedArray.push(item.username)
                            setAutoSuggestedData(autoSuggestedArray)
                        })
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
            const filterSuggestions = autoSuggestedData.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(query) > -1
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e) => {
        setInfluencer(e.target.innerText)
        setSuggestions([]);
        setValue('');
        setSuggestionsActive(false);
        {
            const abc = addToCompareData.find((item) => item.username === e.target.innerText)
            if (!abc) {
                setAddToCompareData([...addToCompareData, { username: e.target.innerText }])
            }
        }
        console.log(addToCompareData)
    };

    const Suggestions = () => {
        return (
            <div className="suggestions">
                {suggestions.map((suggestion, index) => {
                    return (
                        <div
                            className={index === suggestionIndex ? "active_inf" : "non_active"}
                            key={index}
                            onClick={handleClick}
                        >
                            {suggestion}
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleRemoveComparedInfluencer = (item) => {
        let newStr = '';
        let updateStr = params.influencers.substring(params.influencers.indexOf('?') + 1);
        if (updateStr.split('=').length - 1 > 2) {
            let abc = updateStr.split('&');
            for (let i in abc) {
                if (!abc[i].includes(item.username)) {
                    newStr += abc[i] + '&';
                }
            }
            let finalstring = newStr.substring(0, newStr.length - 1)
            navigate(`/CompareInfluencers/${finalstring}`)
        }


    }

    const handleAddToCompare = () => {
        const toggle = addToCompareClicked ? false : true;
        setAddToCompareClicked(toggle);
    }

    const handleRemoveInfluencer = (data) => {
        setAddToCompareData((current) => current.filter((item) =>
            item.username !== data.username
        ))
    }

    const handleCompareInfluencers = () => {
        let result = ''
        addToCompareData.map((item) => {
            result += (`&influencers=${item.username}`)
            {
                JSON.stringify(params) !== '{}' ?
                    navigate(`/CompareInfluencers/${params.influencers}${result}`)
                    :
                    navigate(`/CompareInfluencers/${result.substring(1)}`)
            }
        })
        handleAddToCompare();
        setAddToCompareData([])
    }


    const handleCompareInfluencersByParams = () => {
        if (JSON.stringify(params) !== '{}') {
            const url = `http://localhost:4000/compareInfluencers?${params.influencers}`;
            fetch(url)
                .then((res) => {
                    res.json()
                        .then((data) => {
                            setComparedInfluencersData(data)
                        })
                })
        }
        else {
            setComparedInfluencersData([])
        }

    }

    useEffect(() => {
        handleCompareInfluencersByParams();
        getListData();
        fetchAllData();
    }, [params])

    return (
        <div className='compare_influencers_container'>
            <Navbar />
            <div style={{ flex: 1, width: '100vh' }}>
                <Topbar />
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

                                        <div style={{ padding: '0.75rem' }}>
                                            <div className='profile_category'>{item.category_enum}</div>
                                        </div>
                                        : null
                                }
                                <div className='profile_followers'><HiOutlineUser />{NFormatter(item.edge_followed_by.count)}</div>
                                <div className='like_comment_box'>
                                    <div className='profile_like'><img src={LikeIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_likes)}</span></div>
                                    <div className='profile_comment'><img src={CommentIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[0].avg_comment)}</span></div>
                                </div>
                                <div className='like_comment_box'>
                                    <div className='profile_like'><img src={ViewIcon} /><span>{NFormatter(item.edge_felix_video_timeline.edges[0].averageReelView)}</span></div>
                                    <div className='profile_comment'><img src={ER} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[0].er)}</span></div>
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
                                                        <div style={{ overflowY: 'scroll', height: '20vh', padding: '0.75rem' }}>
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
                                    <div onClick={() => { handleRemoveComparedInfluencer(item) }}>Remove</div>
                                </div>
                                <div className='recent_posts'>
                                    <div className='recent_posts_title'>Recent Posts</div>
                                    <div className='recent_post_box'>
                                        <img src={Testing} />
                                        <div style={{ paddingLeft: '0.5rem' }}>
                                            <div className='profile_like'><img src={LikeIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[1]?.node.edge_liked_by.count)}</span></div>
                                            <div className='profile_comment'><img src={CommentIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[1]?.node.edge_media_to_comment.count)}</span></div>
                                            <div className='profile_like'><img src={ViewIcon} /><span>{NFormatter(item.edge_felix_video_timeline.edges[1]?.node.video_view_count)}</span></div>
                                        </div>
                                    </div>
                                    <div className='recent_post_box'>
                                        <img src={Testing} />
                                        <div style={{ paddingLeft: '0.5rem' }}>
                                            <div className='profile_like'><img src={LikeIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[2]?.node.edge_liked_by.count)}</span></div>
                                            <div className='profile_comment'><img src={CommentIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[2]?.node.edge_media_to_comment.count)}</span></div>
                                            <div className='profile_like'><img src={ViewIcon} /><span>{NFormatter(item.edge_felix_video_timeline.edges[2]?.node.video_view_count)}</span></div>
                                        </div>
                                    </div>
                                    <div className='recent_post_box'>
                                        <img src={Testing} />
                                        <div style={{ paddingLeft: '0.5rem' }}>
                                            <div className='profile_like'><img src={LikeIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[3]?.node.edge_liked_by.count)}</span></div>
                                            <div className='profile_comment'><img src={CommentIcon} /><span>{NFormatter(item.edge_owner_to_timeline_media.edges[3]?.node.edge_media_to_comment.count)}</span></div>
                                            <div className='profile_like'><img src={ViewIcon} /><span>{NFormatter(item.edge_felix_video_timeline.edges[3]?.node.video_view_count)}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className='add_influencers'>
                        <div className='add_btn' onClick={() => handleAddToCompare()}>+</div>
                        <div className='add_inf' onClick={() => handleAddToCompare()}>Add Influencer</div>
                        {
                            addToCompareClicked === true ?

                                // [data].map((item) =>
                                <div className='overlay'>
                                    <div className="compare_section">
                                        <div className="close_btn"><AiOutlineClose onClick={() => handleAddToCompare()} /></div>
                                        <div className="compare_headers">
                                            Add to Compare
                                        </div>
                                        <div className="compare_title">
                                            Select the influencer(s) from results to
                                            add to the selection you want to compare. You may
                                            compare upto four influencers.
                                        </div>
                                        <input
                                            type="text"
                                            value={value}
                                            onChange={handleChange}
                                            className="compare_input"
                                        />
                                        {suggestionsActive && <Suggestions />}
                                        <div className="influencers_box">
                                            <div style={{ overflowY: 'scroll', height: '20vh' }}>
                                                {
                                                    addToCompareData.length > 0 ?
                                                        <>
                                                            {
                                                                addToCompareData.map((data) =>
                                                                    <div className="added_influencer">
                                                                        {data.username}<span><AiOutlineClose onClick={() => { handleRemoveInfluencer(data) }} /></span>
                                                                    </div>
                                                                )
                                                            }
                                                        </>
                                                        : null
                                                }
                                            </div>
                                            <div onClick={() => setAddToCompareData([])} className="clear_all">
                                                Clear all
                                            </div>
                                            <div className="btn_pane">
                                                <Button onClick={handleCompareInfluencers}>
                                                    Compare Now
                                                </Button>
                                                <Button className="clear_btn">
                                                    Compare Later
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                // )
                                : null
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default CompareInfluencers;