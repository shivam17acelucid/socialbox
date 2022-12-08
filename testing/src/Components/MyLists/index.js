import React, { useState, useEffect } from "react";
import './index.scss';
import Button from '@mui/material/Button';
import { Input, Label } from 'reactstrap';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdOutlineArrowDropUp, MdDelete } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';

function MyLists() {


    const [listName, setListName] = useState('');
    const [listData, setListData] = useState([]);
    const [openDeliverablesClicked, setOpenDeliverablesClicked] = useState(false);
    const [reel, setReel] = useState(0);
    const [post, setPost] = useState(0);
    const [story, setStory] = useState(0);
    const [igtv, setIgtv] = useState(0);
    const [description, setDescription] = useState('');
    const [listDeleted, setListDeleted] = useState(false);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);

    const userId = localStorage.getItem('id');
    const navigate = useNavigate();

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
        getListData();
    }, []);

    useEffect(() => {
        getListData();
    }, [newPlanClicked, listDeleted]);

    return (
        <>
            <div className="headers_title">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="headers">
                        My Lists
                    </span>
                    <span className='add_list_btn' onClick={handleAddPlan}> + Add new</span>
                </div>
                {/* <div className="add_btn"> */}
                {/* <div onClick={handleAddPlan} className='addList_btn'> <MdOutlineAddBox />New List</div> */}
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
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default MyLists;