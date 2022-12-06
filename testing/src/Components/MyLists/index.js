import React, { useState, useEffect } from "react";
import './index.scss';
import Button from '@mui/material/Button';
import { Input, Label } from 'reactstrap';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdOutlineArrowDropUp, MdDelete } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

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
                            <div className='close_btn' onClick={() => { setNewPlanClicked(false) }}>X</div>
                            <Label>Name of List</Label>
                            <Input type="text" placeholder="List Name" value={listName} onChange={(e) => { setListName(e.target.value) }} />
                            <Input type='text' placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                            <Label>Deliverables</Label>
                            {
                                openDeliverablesClicked === true ?
                                    <>
                                        <label>Reels</label>
                                        <Input type='text' value={reel} onChange={(e) => { setReel(e.target.value) }} placeholder="Reels" />
                                        <label>Static Post</label>
                                        <Input type='text' value={post} onChange={(e) => { setPost(e.target.value) }} placeholder="Static Post" />
                                        <label>Stories</label>
                                        <Input type='text' value={story} onChange={(e) => { setStory(e.target.value) }} placeholder="Stories" />
                                        <label>Igtv videos</label>
                                        <Input type='text' value={igtv} onChange={(e) => { setIgtv(e.target.value) }} placeholder="Igtv videos" />
                                    </>
                                    :
                                    <Input placeholder="Enter Deliverables" type='hidden' />
                            }
                            <span onClick={() => { setOpenDeliverablesClicked((prev) => !prev) }}>
                                {
                                    openDeliverablesClicked === true ?
                                        <MdOutlineArrowDropUp />
                                        :
                                        <AiFillCaretDown />
                                }
                            </span>
                            <Button variant="outlined" onClick={() => { handleCreateList(listName, description, reel, post, story, igtv) }}>Create</Button>
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