import React, { useEffect, useState } from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './listpage.scss';
import { Input, Label } from 'reactstrap';
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineSearch } from 'react-icons/ai';
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import TopBar from '../../Common/TopBar';


function Lists() {

    const [inputField, setInputField] = useState('');
    const [basketData, setBasketData] = useState([]);
    const [listInfluencersData, setListInfluencersData] = useState([]);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    const [listName, setListName] = useState('');
    const [listData, setListData] = useState([]);
    const [reel, setReel] = useState(0);
    const [post, setPost] = useState(0);
    const [story, setStory] = useState(0);
    const [igtv, setIgtv] = useState(0);
    const [description, setDescription] = useState('');
    const [listDeleted, setListDeleted] = useState(false);


    const [autoSuggestedData, setAutoSuggestedData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState('');

    let navigate = useNavigate();
    const userId = localStorage.getItem('id');
    const autoSuggestedArray = [];


    const searchInfluencers = () => {
        navigate(`/influencerslist/${value}`);
    }

    const fetchAllData = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=`;
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

    const fetchBasketsName = () => {
        const url = `http://localhost:4000/showCategorizedBasket`;
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setBasketData(response)
            })
    }

    const handleRedirectToBasket = (item) => {
        navigate(`/basketInfluencers/${item.categoryName}`)
    }

    const handleCreateList = (listName, description, reel, post, story, igtv) => {
        const url = `http://localhost:4000/createList/${userId}`
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ listName, description, reel, post, story, igtv }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => { res.json() })
            .then((data) => {
                setListInfluencerDetails(data)
                setNewPlanClicked(false);
            })
    }

    const handleAddPlan = () => {
        const data = newPlanClicked ? false : true;
        setNewPlanClicked(data);
    }

    const handleRedirectToList = (item) => {
        navigate(`/userLists/${item.listName}`)
    }

    const handleDeleteList = (item) => {
        const url = `http://localhost:4000/deleteList/${userId}?listName=${item.listName}`;
        fetch((url), {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => {
                setListDeleted(true);
            })
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

    useEffect(() => {
        fetchBasketsName();
        getListData();
        fetchAllData();
    }, []);

    useEffect(() => {
        getListData();
    }, [newPlanClicked]);

    useEffect(() => {
        getListData();
    }, [listDeleted]);

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
        navigate(`/profile/${e.target.innerText}`);
        setSuggestions([]);
        setValue('');
        setSuggestionsActive(false);
    };

    const Suggestions = () => {
        return (
            <>
                <div className="suggestions">
                    <div style={{
                        margin: '5px', padding: 0, fontFamily: 'Noto Sans',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.7)'
                    }}>Influencers</div>
                    {suggestions.map((suggestion, index) => {
                        return (
                            <div
                                className={index === suggestionIndex ? "active" : ""}
                                key={index}
                                onClick={handleClick}
                            >
                                {suggestion}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <>
            <div className='list_container'>
                <Navbar />
                <div className='lists_content'>
                    <TopBar />
                    <div style={{ display: 'flex' }}>
                        <div className='middle_pane_lists'>
                            <div className='list_headers'>
                                <input
                                    type="text"
                                    value={value}
                                    onChange={handleChange}
                                    placeholder='Search for influencers, categories...'
                                    className='input_search'
                                />
                                {suggestionsActive && <Suggestions />}
                                {/* <input type='text' value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder='Search for influencers, categoriest, topics...' className='input_search' /> */}
                                <Button className='button_list' onClick={searchInfluencers}><AiOutlineSearch /></Button>
                            </div>
                            <div className='middle_pane_content'>
                                <div className='categorised_inf'>
                                    <div className='categorised_heading'>Top Trending Influencers Baskets</div>
                                    <div className='categorised_btn'>
                                        {basketData.map((item) =>
                                            <Button className='button_list'>{item.categoryName}</Button>
                                        )}
                                    </div>
                                </div>
                                <div className='influencers_basket'>
                                    {basketData.map((item) =>
                                        <div className='influencers_basket_box'>
                                            <div className='influencers_image'>
                                                x
                                            </div>
                                            <div className='influencers_category_header'>
                                                Top {item.basketInfluencersCount} {item.categoryName} Influencers Bundle
                                            </div>
                                            <div className='basket_p'>
                                                Boost your marketing campaigns with best travel influencers bundle covering top 20 influencers
                                            </div>
                                            <div className='influencers_footer_btn'>
                                                <Button onClick={() => handleRedirectToBasket(item)}><span style={{ margin: 0 }}>View</span></Button>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>
                        <div className="list_bar">
                            <>
                                <div className="headers_title">
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span className="headers">
                                            My Lists
                                        </span>
                                        <span className='add_list_btn' onClick={handleAddPlan}> + Add new</span>
                                    </div>
                                    {
                                        newPlanClicked ?
                                            <div className='addList_section'>
                                                <Label>Create New List</Label>
                                                <Input type="text" placeholder="List Name" value={listName} onChange={(e) => { setListName(e.target.value) }} className="input_listname" />
                                                <Input type='text' placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} className="input_description" />
                                                <Label style={{ marginTop: '12px' }}>Deliverables</Label>
                                                <>
                                                    <div className='deliverables_pane'>
                                                        <label>Reels</label>
                                                        <div>
                                                            {
                                                                reel === 0 ?
                                                                    <span><RiSubtractFill /></span>
                                                                    :
                                                                    <span onClick={() => { setReel(reel - 1) }}><RiSubtractFill /></span>
                                                            }
                                                            <span className='deliverable_value'>{reel}</span>
                                                            <span onClick={() => { setReel(reel + 1) }}><RiAddFill /></span>

                                                        </div>
                                                        <label>Static Post</label>
                                                        <div>
                                                            {
                                                                post === 0 ?
                                                                    <span><RiSubtractFill /></span>
                                                                    :
                                                                    <span onClick={() => { setPost(post - 1) }}><RiSubtractFill /></span>
                                                            }
                                                            <span className='deliverable_value'>{post}</span>
                                                            <span onClick={() => { setPost(post + 1) }}><RiAddFill /></span>
                                                        </div>
                                                    </div>
                                                    <div className='deliverables_pane'>
                                                        <label>Stories</label>
                                                        <div>
                                                            {
                                                                story === 0 ?
                                                                    <span><RiSubtractFill /></span>
                                                                    :
                                                                    <span onClick={() => { setStory(story - 1) }}><RiSubtractFill /></span>
                                                            }
                                                            <span className='deliverable_value'>{story}</span>
                                                            <span onClick={() => { setStory(story + 1) }}><RiAddFill /></span>
                                                        </div>
                                                        <label>Igtv videos</label>
                                                        <div>
                                                            {
                                                                igtv === 0 ?
                                                                    <span><RiSubtractFill /></span>
                                                                    :
                                                                    <span onClick={() => { setIgtv(igtv - 1) }}><RiSubtractFill /></span>
                                                            }
                                                            <span className='deliverable_value'>{igtv}</span>
                                                            <span onClick={() => { setIgtv(igtv + 1) }}><RiAddFill /></span>
                                                        </div>
                                                    </div>
                                                </>
                                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                    <Button variant="outlined" onClick={() => { handleCreateList(listName, description, reel, post, story, igtv) }}>Add</Button>
                                                    <Button onClick={handleAddPlan}>Cancel</Button>
                                                </div>
                                            </div> :
                                            null
                                    }
                                    {/* </div> */}
                                </div>
                                <div className="list_content">
                                    {
                                        listData.map((item) =>
                                            <div className="list_content_inner">
                                                <div className="list_head">
                                                    <span className='list_name'>{item.listName}</span>
                                                    {item.influencersCount}
                                                    <MdDelete onClick={() => { handleDeleteList(item) }} />
                                                </div>
                                                <div className='list_desc'>
                                                    {item.description}
                                                </div>
                                                <div className='list_footer'>
                                                    <div className='list_view'>
                                                        <Button onClick={() => { handleRedirectToList(item) }}>View</Button>
                                                    </div>
                                                    <div className='inf_count'>
                                                        {item.influencersData.length} Influencers
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Lists;