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
import { Input } from 'reactstrap';
import Topbar from "../../Common/TopBar/index";
import deleteiconfilled from '../../Assets/Images/deleteiconfilled.png';
import deleteicon from '../../Assets/Images/deleteicon.png';
import checkbundles from '../../Assets/Images/checkbundle.png'
import checklists from '../../Assets/Images/checklists.png'
import checklistselected from '../../Assets/Images/checklistselected.png';
import checkbundleselected from '../../Assets/Images/checkbundleselected.png';
import MyLists from '../MyLists';
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';
import { Label } from 'reactstrap';


function UserLists() {

    const [listInfluencersData, setListInfluencersData] = useState([]);
    const [deletedData, setDeleteData] = useState([]);
    const [isDataDeleted, setIsDataDeleted] = useState(false);
    const [isDeliverablesEdited, setIsDeliverablesEdited] = useState(false);
    const [editingDeliverables, setEditingDeliverables] = useState(false);
    const [reel, setReel] = useState(0);
    const [post, setPost] = useState(0);
    const [story, setStory] = useState(0);
    const [igtv, setIgtv] = useState(0);
    const [description, setDescription] = useState('');
    const [listName, setListName] = useState('');
    const [deleteIconSelected, setDeleteIconSelected] = useState(true);
    const [listsIconSelected, setListsIconSelected] = useState(false);
    const [bundlesIconSelected, setBundlesIconSelected] = useState(false);
    const [basketData, setBasketData] = useState([]);
    const [changeBasket, setChangeBasket] = useState(false);

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

    const handleUpdateDeliverables = (reel, post, story, igtv, listName) => {
        let newListName = listName;
        const url = `http://localhost:4000/editDeliverables/${userId}?listName=${listname}`
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ reel, post, story, igtv, description, newListName }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => {
                setIsDeliverablesEdited(true)
                handleEditDeliverables();
                navigate(`/userLists/${newListName}`)
                setListName('');
                setDescription('');
                setReel(reel);
                setPost(post);
                setStory(story);
                setIgtv(igtv);
            })
    }

    const handleRedirectToBasket = (item) => {
        setChangeBasket((prev) => !prev);
        navigate(`/basketInfluencers/${item.categoryName}`);
    }
    const fetchBasketsName = () => {
        const url = `http://localhost:4000/showCategorizedBasket`;
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setBasketData(response)
            })
    }

    useEffect(() => {
        handleListClick();
        fetchBasketsName();
    }, []);

    useEffect(() => {
        handleListClick();
    }, [isDataDeleted]);

    useEffect(() => {
        listname = listName;
        handleListClick();
    }, [isDeliverablesEdited]);

    return (
        <div className='users_list_container'>
            <Navbar />
            <div className='users_list_pane'>
                <Topbar />
                <div style={{ display: 'flex' }}>
                    {
                        listInfluencersData.map((item) =>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div className='user_list_header'>
                                    <div className='list_count'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className='list_name'>
                                                {item.item.listName}
                                            </div>
                                            <div>
                                                <Button onClick={handleEditDeliverables}>Edit</Button>
                                            </div>
                                        </div>
                                        <div className='list_desc'>
                                            {item.item.description}
                                        </div>
                                    </div>
                                    <div className='deliverables_count'>
                                        {
                                            <>
                                                <div className='deliverables_fields_value'>{item.item.deliverables[0].reel}<span>Reels</span></div>
                                                <div className='deliverables_fields_value'>{item.item.deliverables[1].post}<span>Posts</span></div>
                                                <div className='deliverables_fields_value'>{item.item.deliverables[2].story}<span>Stories</span></div>
                                                <div className='deliverables_fields_value'>{item.item.deliverables[3].igtv}<span>Igtv</span></div>
                                            </>
                                        }
                                        {
                                            editingDeliverables === true ?
                                                <div className='addList_section'>
                                                    <Label> Edit List</Label>
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
                                                        <Button onClick={() => { handleUpdateDeliverables(reel, post, story, igtv, listName) }} className="update_btn">Update</Button>
                                                        <Button onClick={handleEditDeliverables}>Cancel</Button>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </div>
                                </div>
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
                            </div>
                        )
                    }
                    <div className='right_pane'>
                        <div className='icons_pane'>
                            {
                                deleteIconSelected === true
                                    ?
                                    <img src={deleteiconfilled} onClick={() => {
                                        setDeleteIconSelected(false)
                                    }} />
                                    :
                                    <img src={deleteicon} onClick={() => {
                                        setDeleteIconSelected(true)
                                        setBundlesIconSelected(false)
                                        setListsIconSelected(false)
                                    }} />
                            }
                            {
                                listsIconSelected === false ?
                                    <img src={checklists} onClick={() => {
                                        setListsIconSelected(true)
                                        setBundlesIconSelected(false)
                                        setDeleteIconSelected(false)
                                    }} />
                                    :
                                    <img src={checklistselected} onClick={() => {
                                        setListsIconSelected(false)
                                    }} />
                            }
                            {
                                bundlesIconSelected === false ?
                                    <img src={checkbundles} onClick={() => {
                                        setBundlesIconSelected(true)
                                        setListsIconSelected(false)
                                        setDeleteIconSelected(false)
                                    }} />
                                    :
                                    <img src={checkbundleselected} onClick={() => {
                                        setBundlesIconSelected(false)
                                    }} />
                            }

                        </div>
                        {
                            deleteIconSelected === true ?
                                <>
                                    <div className='delete_header'>Recently Deleted</div>
                                    <div className='delete_content'>
                                        Deleted influencers will be retained for 30 days in the bin. After 30 days they will be permanently deleted.
                                    </div>
                                    {listInfluencersData.map((item) =>
                                        item.item.deletedInfluencers.map((data) =>
                                            <div className='deleted_box'>
                                                <div className='box_name'>
                                                    {data.full_name}
                                                </div>
                                                <div className='view_box' onClick={() => redirectProfile(data)}>
                                                    View
                                                </div>
                                            </div>
                                        )
                                    )}
                                </>
                                :
                                listsIconSelected === true ?
                                    <MyLists />
                                    :
                                    bundlesIconSelected === true ?
                                        <div style={{ padding: '1rem' }}>
                                            <div className='sidebar_header'>
                                                Top Bundles
                                            </div>
                                            {basketData.map((item) =>
                                                <div className='bundle_box'>
                                                    <div className='influencers_image'>
                                                        x
                                                    </div>
                                                    <div className='bundle_title'>Top {item.basketInfluencersCount} {item.categoryName} Influencers</div>
                                                    <div className='bundle_btn' onClick={() => { handleRedirectToBasket(item) }}>View</div>
                                                </div>)}
                                        </div>
                                        :
                                        null
                        }
                    </div>
                </div>
            </div>
        </div >
    )

}
export default UserLists;