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

    const handleCompareInfluencers = () => {
        let result = ''
        addToCompareData.map((item) => {
            result += (`&influencers=${item.username}`)
            navigate(`/CompareInfluencers/${params.influencers}${result}`)
        })
        handleAddToCompare();
        setAddToCompareData([])
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

    const fetchAllData = () => {
        // let query = params.influencers.substring(1);
        // console.log(query)
        // console.log(query.split('&influencers').length)
        // for (let i = 0; i < query.split('&').length; i++) {
        //     console.log(query.substring(query.indexOf('='), query.indexOf('&')))
        // }
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

    const handleAddToCompare = () => {
        const toggle = addToCompareClicked ? false : true;
        setAddToCompareClicked(toggle);
        // setAddToCompareData([{ username: data.username }])
    }

    const handleRemoveInfluencer = (data) => {
        setAddToCompareData((current) => current.filter((item) =>
            item.username !== data.username
        ))
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
        fetchAllData();
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
                        <div className='add_btn' onClick={() => handleAddToCompare()}>+</div>
                        <div className='add_inf' onClick={() => handleAddToCompare()}>Add Influencer</div>
                        {
                            addToCompareClicked === true ?

                                // [data].map((item) =>
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