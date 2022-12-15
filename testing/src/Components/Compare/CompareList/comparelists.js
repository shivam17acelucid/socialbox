import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../../Common/Sidebar/sidebar';
import { Link, useParams, useNavigate } from 'react-router-dom'
import TopBar from '../../../Common/TopBar';
import './index.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import { HiOutlineUser } from 'react-icons/hi';
import { FcLike, FcComments, FcBinoculars, FcRating } from 'react-icons/fc';
import NFormatter from '../../../Common/NumberFormatter/numFormatter';

function CompareLists() {

    const [comparedlistsData, setComparedlistsData] = useState([]);
    const [addToCompareClicked, setAddToCompareClicked] = useState(false);
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [autoSuggestedData, setAutoSuggestedData] = useState([]);
    const [addToCompareData, setAddToCompareData] = useState([]);

    const userId = localStorage.getItem('id');
    let autoSuggestedArray = [];
    const params = useParams();
    const navigate = useNavigate();

    const handleComparelists = () => {
        let result = '';
        let string = '';
        addToCompareData.map((item) => {
            result += (`&lists=${item.listName}`)
            string = result.substring(1);
        })
        const url = `http://localhost:4000/compareUsersLists/${userId}?${string}`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setComparedlistsData(data)
                    })
            })
    }

    const getListData = () => {
        const url = `http://localhost:4000/getListData/${userId}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((result) => {
                        result.forEach((item) => {
                            autoSuggestedArray.push(item.listName)
                            setAutoSuggestedData(autoSuggestedArray)
                        })
                    })
            })
    }

    const handleAddToCompare = () => {
        const toggle = addToCompareClicked ? false : true;
        setAddToCompareClicked(toggle);
    }

    const handleRemoveList = (data) => {
        setAddToCompareData((current) => current.filter((item) =>
            item.listName !== data.listName
        ))
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
        setSuggestions([]);
        setValue('');
        setSuggestionsActive(false);
        {
            const abc = addToCompareData.find((item) => item.listName === e.target.innerText)
            if (!abc) {
                setAddToCompareData([...addToCompareData, { listName: e.target.innerText }])
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

    useEffect(() => {
        getListData();
    }, [])

    return (
        <div className='compare_lists_container'>
            <Navbar />
            <div style={{ flex: 1, width: '100vh' }}>
                <TopBar />
                <div className='tabs'>
                    <div className='inf_pane'><Link to='/CompareInfluencers'>Influencers</Link></div>
                    <div className='list_pane'><Link to='/CompareLists'>Lists</Link></div>
                </div>
                <div className='result_pane'>
                    {
                        comparedlistsData.map((item) =>
                            <div className='results'>
                                <div className='listname'>{item.listName}</div>
                                <div className='inf_count'>{item.totalInfluencers} Influencers</div>
                                <div className='list_view'>View list </div>
                                <div className='category'>
                                    {item.totalCategory.map((data) =>
                                        data !== null ?
                                            <div className='category_box'>
                                                {data}
                                            </div>
                                            : null


                                    )
                                    }
                                </div>
                                <div className='cost'><FaRupeeSign />Cost</div>
                                <div className='detail_label'>Estimated Cost</div>
                                <div className='followers_count'><HiOutlineUser />{NFormatter(item.totalFollowers)}</div>
                                <div className='detail_label'>Total Followers</div>
                                <div className='avg_like'><FcLike />{NFormatter(item.totalAvgLike)}</div>
                                <div className='detail_label'>Average Likes</div>
                                <div className='avg_comment'><FcComments />{NFormatter(item.totalAvgComment)}</div>
                                <div className='detail_label'>Average Comment</div>
                                <div className='avg_reach'><FcBinoculars />{NFormatter(item.totalReach)}</div>
                                <div className='detail_label'>Average Reach</div>
                                <div className='avg_reach'><FcRating />Er</div>
                                <div className='detail_label_last'>Average ER</div>
                                <div className='remove_btn'>Remove</div>
                            </div>
                        )
                    }
                    <div className='add_influencers'>
                        <div className='add_btn' onClick={() => handleAddToCompare()}>+</div>
                        <div className='add_inf' onClick={() => handleAddToCompare()}>Add Lists</div>
                        {
                            addToCompareClicked === true ?
                                <div className="compare_section">
                                    <div className="close_btn"><AiOutlineClose onClick={() => handleAddToCompare()} /></div>
                                    <div className="compare_headers">
                                        Add to Compare
                                    </div>
                                    <div className="compare_title">
                                        Select the List(s) from results to
                                        add to the selection you want to compare. You may
                                        compare upto four Lists.
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
                                                                    {data.listName}<span><AiOutlineClose onClick={() => { handleRemoveList(data) }} /></span>
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
                                            <Button onClick={handleComparelists}>
                                                Compare Now
                                            </Button>
                                            <Button className="clear_btn">
                                                Compare Later
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompareLists;