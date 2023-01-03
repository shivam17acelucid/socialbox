import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../ProfileData/profile.scss';
import Button from '@mui/material/Button';
import NFormatter from "../../Common/NumberFormatter/numFormatter";
import TopBar from '../../Common/TopBar/index';
import SideBar from '../../Common/Sidebar/sidebar';
import Testing from '../../Assets/Images/testing.png'
import LikeIcon from '../../Assets/Images/likeIcon.png'
import CommentIcon from '../../Assets/Images/commentIcon.png'
import ViewIcon from '../../Assets/Images/viewIcon.png'
import { MdAdd } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineComment, AiOutlineEye, AiOutlineClose } from 'react-icons/ai';

const ProfileData = () => {
    const [influencersData, setInfluencersData] = useState([]);
    const [addToListClicked, setAddToListClicked] = useState(false);
    const [listData, setListData] = useState([]);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);
    const [newPlanClicked, setNewPlanClicked] = useState(false);

    let { profilename } = useParams();

    const userId = localStorage.getItem('id')

    const fetchProfiles = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=${profilename}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleAddList = () => {
        const data = addToListClicked ? false : true;
        setAddToListClicked(data);
        const url = `http://localhost:4000/getListData/${userId}`
        fetch(url)
            .then((data) => {
                data.json()
                    .then((result) => {
                        setListData(result)
                    })
            })
    }

    const handleAddInfluencerToList = (data, value) => {
        const url = `http://localhost:4000/addInfluencersToList/${userId}?list=${value.listName}&username=${data.username}`
        fetch((url), {
            method: 'POST',
        })
            .then((data) => { data.json() })
            .then((res) => {
                setAddToListClicked(!addToListClicked)
            })
    }

    useEffect(() => {
        fetchProfiles();
    }, []);

    return (
        <div className="profile_container_box">
            <SideBar />
            <div style={{ flex: 1 }}>
                <TopBar />
                {
                    influencersData.map((data) => {
                        return (
                            <div className="profile_container">
                                <div className="profile_header">
                                    <div style={{ display: 'flex' }}>
                                        <div className="profile_pic">
                                            {/* <img src={data.profile_pic_url_hd} />  */}
                                            <img src={Testing} />
                                        </div>
                                        <div className="profile_basic_info">
                                            <div className="profile_name">
                                                {data.full_name}
                                            </div>
                                            <div className="profile_username">
                                                @{data.username}
                                            </div>
                                            <div className="profile_user_location">
                                                {data.city_name}
                                            </div>
                                            {
                                                data.category_enum ?
                                                    <div className="profile_category">
                                                        {data.category_enum}
                                                    </div> : null
                                            }
                                            <div>
                                                <Button onClick={handleAddList}><MdAdd />Add To My List</Button>
                                                {
                                                    addToListClicked === true ?
                                                        <section className="addList_section" id={data.id}>
                                                            <div className="addList_option">
                                                                <div style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={handleAddList}><AiOutlineClose /></div>
                                                                <div onClick={() => setNewPlanClicked(true)} className='section_dropdown_header'>Add To List</div>
                                                                <div className="section_list_title">
                                                                    Select the list to which you want to add the
                                                                    influencer.
                                                                </div>
                                                                <div style={{ overflowY: 'scroll', height: '20vh', padding: '0.75rem' }}>
                                                                    {listData.map((item) =>
                                                                        <div className="list_options" onClick={() => { handleAddInfluencerToList(data, item) }}>
                                                                            {item.listName}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </section>
                                                        : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_info_bar">
                                        <div className="profile_info_bar_collection">
                                            <div className="detail_box">
                                                <div className="profile_result_value">{NFormatter(data.edge_followed_by.count)}</div>
                                                <span className="labels">Followers</span>
                                            </div>
                                            <div className="detail_box">
                                                <div className="profile_result_value">{NFormatter(data.edge_felix_video_timeline.count + data.edge_owner_to_timeline_media.count)}</div>
                                                <span className="labels">Posts</span>
                                            </div>
                                            <div className="detail_box">
                                                <div className="profile_result_value">{data.edge_owner_to_timeline_media['edges'][0].er} %</div>
                                                <span className="labels">Engagement Rate</span>
                                            </div>
                                            <div className="detail_box">
                                                <div className="profile_result_value">{NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_likes)}</div>
                                                <span className="labels">Average Likes</span>
                                            </div>
                                            <div className="detail_box">
                                                <div className="profile_result_value">{NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_comment)}</div>
                                                <span className="labels">Average Comment</span>
                                            </div>
                                            <div className="detail_box">
                                                <div className="profile_result_value">{NFormatter(data.edge_felix_video_timeline['edges'][0].averageReelView)}</div>
                                                <span className="labels">Average Views</span>
                                            </div>
                                        </div>
                                        <div className="profile_demography">
                                            <div className="demography_title">
                                                Followers Stats
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile_posts">
                                    <div className="recent_posts_title">Recent Posts</div>
                                    <div className="image1">
                                        <img src={Testing} className="recent_post_preview" />
                                        {/* <img src={data.edge_owner_to_timeline_media.edges[1].node.display_url} /> */}
                                        <div className="like_comment_view_box">
                                            <div className="value_box">
                                                <img src={LikeIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[1].node.edge_liked_by.count}</span>
                                            </div>
                                            <div className="value_box">
                                                <img src={CommentIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[1].node.edge_media_to_comment.count}</span>
                                            </div>
                                            <div className="value_box">
                                                <img src={ViewIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[1].node.video_view_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image1">
                                        <img src={Testing} className="recent_post_preview" />
                                        {/* <img src={data.edge_owner_to_timeline_media.edges[2].node.display_url} /> */}
                                        <div className="like_comment_view_box">
                                            <div className="value_box">
                                                <img src={LikeIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[2].node.edge_liked_by.count}</span>
                                            </div>
                                            <div className="value_box">
                                                <img src={CommentIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[2].node.edge_media_to_comment.count}</span>
                                            </div>
                                            <div className="value_box">
                                                <img src={ViewIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[2].node.video_view_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image1">
                                        <img src={Testing} className="recent_post_preview" />
                                        {/* <img src={data.edge_owner_to_timeline_media.edges[3].node.display_url} /> */}
                                        <div className="like_comment_view_box">
                                            <div className="value_box">
                                                <img src={LikeIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[3].node.edge_liked_by.count}</span>
                                            </div>
                                            <div className="value_box">
                                                <img src={CommentIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[3].node.edge_media_to_comment.count}</span>
                                            </div>
                                            <div className="value_box">
                                                <img src={ViewIcon} />
                                                <span className="like_comment_value">{data.edge_owner_to_timeline_media.edges[3].node.video_view_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProfileData; 