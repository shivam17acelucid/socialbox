import React, { useState, useEffect } from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import { useParams, useNavigate } from "react-router-dom";
import './lists.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import NFormatter from '../../Common/NumberFormatter/numFormatter';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Input } from 'reactstrap';


function UserLists() {

    const [listInfluencersData, setListInfluencersData] = useState([]);
    const [deletedData, setDeleteData] = useState([]);
    const [isDataDeleted, setIsDataDeleted] = useState(false);
    const [isDeliverablesEdited, setIsDeliverablesEdited] = useState(false);
    const [editingDeliverables, setEditingDeliverables] = useState(false);
    const [reel, setReels] = useState('');
    const [post, setPosts] = useState('');
    const [story, setStories] = useState('');
    const [igtv, setIgtv] = useState('');

    let { listname } = useParams();

    const userId = localStorage.getItem('id');
    const navigate = useNavigate();

    const redirectProfile = (data) => {
        navigate(`/profile/${data.username}`)
    }

    const handleEditDeliverables = () => {
        setEditingDeliverables((prev) => !prev)
    }


    const handleListClick = () => {
        const url = `http://localhost:4000/showInfluencersList/${userId}?list=${listname}`
        fetch((url))
            .then((data) => data.json())
            .then((response) => {
                setListInfluencersData(response)
            })
    }

    const handleDeleteList = (data) => {
        const url = `http://localhost:4000/deleteInfluencersFromList/${userId}`
        fetch((url), {
            method: 'PUT',
            body: JSON.stringify({ listname, username: data.username }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        )
            .then((res) => res.json())
            .then((data) => {
                setDeleteData(data)
                setIsDataDeleted((prev) => !prev)
            })
    }

    const handleUpdateDeliverables = () => {
        const url = `http://localhost:4000/editDeliverables/${userId}?listName=${listname}`
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ reel, post, story, igtv }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => {
                setIsDeliverablesEdited(true)
            })
    }

    useEffect(() => {
        handleListClick();
    }, []);

    useEffect(() => {
        handleListClick();
    }, [isDataDeleted]);

    useEffect(() => {
        handleListClick();
    }, [isDeliverablesEdited]);

    return (
        <div className='users_list_container'>
            <Navbar />
            <div className='users_list_pane'>
                {
                    listInfluencersData.map((item) =>
                        <>
                            <div className='user_list_header'>
                                <div className='list_count'>
                                    <div className='list_name'>
                                        {item.item.listName}
                                    </div>
                                    <div className='list_inf_count'>
                                        No of Influencers  {item.influencers_count}
                                    </div>
                                </div>
                                <div className='deliverables_count'>
                                    <div className='deliverables_title'>
                                        Deliverables
                                    </div>
                                    <div className='deliverables_values'>
                                        {
                                            <>
                                                <div className='deliverables_fields_value'><span>Reels</span>{item.item.deliverables[0].reel}</div>
                                                <div className='deliverables_fields_value'><span>Posts</span>{item.item.deliverables[1].post}</div>
                                                <div className='deliverables_fields_value'><span>Stories</span>{item.item.deliverables[2].story}</div>
                                                <div className='deliverables_fields_value'><span>Igtv</span>{item.item.deliverables[3].igtv}</div>
                                            </>
                                        }
                                    </div>
                                    <div style={{ marginLeft: '10px', cursor: 'pointer' }}>
                                        <MdEdit size={20} onClick={handleEditDeliverables} />
                                    </div>
                                    {
                                        editingDeliverables === true ?
                                            <div>
                                                <Input value={reel} onChange={(e) => { setReels(e.target.value) }} placeholder="Reels count" />
                                                <Input value={post} onChange={(e) => { setPosts(e.target.value) }} placeholder="Posts count" />
                                                <Input value={story} onChange={(e) => { setStories(e.target.value) }} placeholder="Stories count" />
                                                <Input value={igtv} onChange={(e) => { setIgtv(e.target.value) }} placeholder="Igtv count" />
                                                <Button onClick={handleUpdateDeliverables}>Update</Button>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                            {/* <hr></hr> */}
                            <div className='table_content'>
                                <TableContainer component={Paper}>
                                    <Table className="table_container" >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell align="center">Category</TableCell>
                                                <TableCell align="center">Followers</TableCell>
                                                <TableCell align="center">Engagement</TableCell>
                                                <TableCell align="center">Avg Likes</TableCell>
                                                <TableCell align="center">Avg Comments</TableCell>
                                                <TableCell align="center">Avg Reach</TableCell>
                                                <TableCell align="center">Cost</TableCell>
                                                <TableCell align="center"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {item.item.influencersData.map((data, index) =>
                                                < TableRow key={index} >
                                                    <TableCell component="th" scope="row" key={data.username} onClick={() => redirectProfile(data)} >
                                                        <div>{data.full_name}</div>
                                                    </TableCell>
                                                    <TableCell align="center">{data.category_enum !== null ? data.category_enum.length > 10 ? (data.category_enum.substring(0, 15) + '...') : data.category_enum : null}</TableCell>
                                                    <TableCell align="center">
                                                        {NFormatter(data.edge_followed_by.count)}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {NFormatter(data.edge_owner_to_timeline_media['edges'][0].er)}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_likes)}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_comment)}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {NFormatter(data.edge_felix_video_timeline['edges'][0].averageReelView)}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {
                                                            NFormatter(
                                                                (data.costFactorReel.minTotalCost || data.costFactorReel.minTotalCost ?
                                                                    (data.costFactorReel.minTotalCost * item.item.deliverables[0].reel)
                                                                    :
                                                                    (data.costFactorReel.influencerExactminTotalCost * item.item.deliverables[0].reel))
                                                                +
                                                                (data.costFactorPosts.minTotalCost || data.costFactorPosts.minTotalCost ?
                                                                    (data.costFactorPosts.minTotalCost * item.item.deliverables[1].post)
                                                                    :
                                                                    (data.costFactorPosts.influencerExactminTotalCost * item.item.deliverables[1].post))
                                                                +
                                                                (data.costFactorStories.minTotalCost || data.costFactorStories.minTotalCost ?
                                                                    (data.costFactorStories.minTotalCost * item.item.deliverables[2].story)
                                                                    :
                                                                    (data.costFactorStories.influencerExactminTotalCost * item.item.deliverables[2].story))
                                                                +
                                                                (data.costFactorIgtv.minTotalCost || data.costFactorIgtv.minTotalCost ?
                                                                    (data.costFactorIgtv.minTotalCost * item.item.deliverables[3].igtv)
                                                                    :
                                                                    (data.costFactorIgtv.influencerExactminTotalCost * item.item.deliverables[3].igtv))
                                                            )
                                                        }
                                                    </TableCell>
                                                    <TableCell><MdDelete onClick={() => { handleDeleteList(data) }} /></TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>

                                    </Table>
                                </TableContainer>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='right_pane'>
                <div className='delete_header'>Recently Deleted</div>
                {
                    listInfluencersData.map((item) =>
                        item.item.deletedInfluencers.map((data) =>
                            <div className='deleted_box'>
                                <div className='box_name'>
                                    {data.full_name}
                                </div>
                                <div className='view_box' onClick={() => redirectProfile(data)}>
                                    View Profile
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div >
    )

}
export default UserLists;