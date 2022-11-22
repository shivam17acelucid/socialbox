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
import { MdDelete } from 'react-icons/md';


function UserLists() {

    const [listInfluencersData, setListInfluencersData] = useState([]);
    const [deletedData, setDeleteData] = useState([]);
    const [isDataDeleted, setIsDataDeleted] = useState(false);

    let { listname } = useParams();

    const userId = localStorage.getItem('id');
    const navigate = useNavigate();

    const redirectProfile = (data) => {
        navigate(`/profile/${data.username}`)
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

    useEffect(() => {
        handleListClick();
    }, []);

    useEffect(() => {
        handleListClick();
    }, [isDataDeleted]);

    return (
        <div className='users_list_container'>
            <Navbar />
            <div className='users_list_pane'>
                {
                    listInfluencersData.map((data) =>
                        <>
                            <div className='user_list_header'>
                                <div className='list_count'>
                                    <div className='list_name'>
                                        {data.item.listName}
                                    </div>
                                    <div className='list_inf_count'>
                                        No of Influencers  {data.influencers_count}
                                    </div>
                                </div>
                                <div className='deliverables_count'>
                                    <div className='deliverables_title'>
                                        Deliverables
                                    </div>
                                    <div className='deliverables_values'>
                                        {
                                            <>
                                                <div className='deliverables_fields_value'><span>Reels</span>{data.item.deliverables[0].reel}</div>
                                                <div className='deliverables_fields_value'><span>Posts</span>{data.item.deliverables[1].staticPost}</div>
                                                <div className='deliverables_fields_value'><span>Videos</span>{data.item.deliverables[2].video}</div>
                                                <div className='deliverables_fields_value'><span>Stories</span>{data.item.deliverables[3].story}</div>
                                                <div className='deliverables_fields_value'><span>Swipe Stories</span>{data.item.deliverables[4].swipeStory}</div>
                                                <div className='deliverables_fields_value'><span>Igtv Videos</span>{data.item.deliverables[5].igtv}</div>
                                            </>
                                        }
                                    </div>
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
                                            {data.item.influencersData.map((data, index) =>
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
                                                    <TableCell align="center">{data.city_name}</TableCell>
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