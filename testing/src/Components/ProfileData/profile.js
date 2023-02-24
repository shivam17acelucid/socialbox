import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import Loader from '../../Common/Loader/index'
import Tooltip from '@mui/material/Tooltip';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const ProfileData = () => {
    const [influencersData, setInfluencersData] = useState([]);
    const [addToListClicked, setAddToListClicked] = useState(false);
    const [listData, setListData] = useState([]);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    const [likeArr, setLikeArr] = useState([]);
    const [commentArr, setCommentArr] = useState([]);
    const [viewsArr, setViewsArr] = useState([]);
    const [likesGrowthRate, setLikesGrowthRate] = useState([]);

    let { profilename } = useParams();
    let navigate = useNavigate;

    const userId = localStorage.getItem('id')

    const fetchProfiles = () => {
        const url = `http://13.127.230.191:4000/getProfileOfInfluencer?inputField=${profilename}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
                        res[0].edge_owner_to_timeline_media.edges.forEach((item, i) => {
                            let likeArray = [];
                            let commentArray = [];
                            let ViewsArray = [];
                            if (i > 0) {
                                likeArray.push(item?.node?.edge_liked_by?.count)
                                commentArray.push(item?.node?.edge_media_to_comment?.count)
                                ViewsArray.push(item?.node?.video_view_count)
                            }
                            setLikeArr(likeArray)
                            setCommentArr(commentArray)
                            setViewsArr(ViewsArray)
                            // console.log(likeArr, likeArray);
                        })
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleAddList = () => {
        const data = addToListClicked ? false : true;
        setAddToListClicked(data);
        const url = `http://13.127.230.191:4000/getListData/${userId}`
        fetch(url)
            .then((data) => {
                data.json()
                    .then((result) => {
                        setListData(result)
                    })
            })
    }

    const handleAddInfluencerToList = (data, value) => {
        const url = `http://13.127.230.191:4000/addInfluencersToList/${userId}?list=${value.listName}&username=${data.username}`
        fetch((url), {
            method: 'POST',
        })
            .then((data) => { data.json() })
            .then((res) => {
                setAddToListClicked(!addToListClicked)
            })
    }

    const handleRedirectToInstagram = (data) => {
        window.open(`https://www.instagram.com/${data.username}/`);
        // window.location.href = `https://www.instagram.com/${data.username}/`;
    }

    const options = {
        title: {
            text: "Profile Growth Chart"
        },
        yAxis: {
            title: {
                text: "Likes"
            }
        },
        xAxis: {
            title: {
                text: "Last 12Post"
            },
            categories: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ]
        },
        series: [
            {
                name: 'Likes',
                data: likeArr,
            },
            {
                name: 'Comment',
                data: commentArr
            },
            {
                name: 'Views',
                data: viewsArr
            }
        ]
    };

    useEffect(() => {
        fetchProfiles();
    }, []);

    return (
        <div className="profile_container_box row no-gutters">
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2  col-2'>
                <SideBar />
            </div>
            <div className="col-lg-10 col-sm-10 col-md-10 col-xs-10 col-10">
                <TopBar />
                {
                    influencersData[0] ?
                        influencersData.map((data) => {
                            return (
                                <div className="profile_container row no-gutters">
                                    <div className="profile_header col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12">
                                        <div className="row no-gutters">
                                            <div className="profile_pic col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                                                <img src={`https://socialbox-bckt.s3.ap-south-1.amazonaws.com/Images/${data.username}/${data.username}_profile_image.png`} className='profile_image' />
                                                {/* <img src={Testing} className='profile_image' /> */}
                                            </div>
                                            <div className="profile_basic_info col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12">
                                                <div className="profile_name" onClick={() => { handleRedirectToInstagram(data) }}>
                                                    {data.full_name}
                                                </div>
                                                <div className="profile_username" onClick={() => { handleRedirectToInstagram(data) }}>
                                                    @{data.username}
                                                </div>
                                                {
                                                    data.city_name ?
                                                        <div className="profile_user_location">
                                                            {data.city_name}
                                                        </div>
                                                        :
                                                        data.final_city ?
                                                            <div className="profile_user_location">
                                                                {data.final_city}
                                                            </div>
                                                            :
                                                            null
                                                }
                                                {
                                                    data.category_enum ?
                                                        <div className="profile_category">
                                                            {data.category_enum}
                                                        </div> :
                                                        data.final_category ?
                                                            <div className="profile_category">
                                                                {data.final_category}
                                                            </div>
                                                            :
                                                            null
                                                }
                                                <div>
                                                    <Button onClick={handleAddList} className='add_list_btn'><MdAdd />Add To My List</Button>
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
                                                                    <div style={{ overflowY: 'auto', height: '20vh', padding: '0.75rem' }}>
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
                                        <div className="profile_info_bar row no-gutters">
                                            <div className="profile_info_bar_collection row no-gutters">
                                                <div className="detail_box col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                                                    <div className="profile_result_value">{NFormatter(data.edge_followed_by.count)}</div>
                                                    <span className="labels">Followers</span>
                                                </div>
                                                <div className="detail_box col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                                                    <div className="profile_result_value">{NFormatter(data.edge_felix_video_timeline.count + data.edge_owner_to_timeline_media.count)}</div>
                                                    <span className="labels">Posts</span>
                                                </div>
                                                <div className="detail_box col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                                                    <div className="profile_result_value">{data?.edge_owner_to_timeline_media['edges'][0]?.er}%</div>
                                                    <span className="labels">Engagement Rate</span>
                                                </div>
                                                <div className="detail_box col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                                                    <div className="profile_result_value">{NFormatter(data?.edge_owner_to_timeline_media['edges'][0]?.avg_likes)}</div>
                                                    <span className="labels">Average Likes</span>
                                                </div>
                                                <div className="detail_box col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                                                    <div className="profile_result_value">{NFormatter(data?.edge_owner_to_timeline_media['edges'][0]?.avg_comment)}</div>
                                                    <span className="labels">Average Comment</span>
                                                </div>
                                                <div className="detail_box col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                                                    <div className="profile_result_value">{NFormatter(data?.edge_felix_video_timeline['edges'][0]?.averageReelView)}</div>
                                                    <span className="labels">Average Views</span>
                                                </div>
                                            </div>
                                            <div className="profile_demography row no-gutters">
                                                <div className="demography_title">
                                                    Profile Stats
                                                </div>
                                                <div>
                                                    {
                                                        likeArr[0] ?
                                                            <HighchartsReact
                                                                highcharts={Highcharts}
                                                                options={options}
                                                            />
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_posts col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                                        <div className="recent_posts_title">Recent Posts</div>
                                        <div className="image1">
                                            <img src={`https://socialbox-bckt.s3.ap-south-1.amazonaws.com/Images/${data.username}/${data.username}_recent_image_1.png`} className="recent_post_preview" />
                                            <div className="like_comment_view_box">
                                                <div className="value_box">
                                                    <Tooltip title="Like">
                                                        <img src={LikeIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{NFormatter(data?.edge_owner_to_timeline_media?.edges[1]?.node.edge_liked_by.count)}</span>
                                                </div>
                                                <div className="value_box">
                                                    <Tooltip title="Comment">
                                                        <img src={CommentIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{data?.edge_owner_to_timeline_media?.edges[1]?.node.edge_media_to_comment.count ? NFormatter(data?.edge_owner_to_timeline_media?.edges[1]?.node.edge_media_to_comment.count) : '--'}</span>
                                                </div>
                                                <div className="value_box">
                                                    <Tooltip title='Views'>
                                                        <img src={ViewIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{data?.edge_owner_to_timeline_media?.edges[1]?.node.video_view_count ? NFormatter(data?.edge_owner_to_timeline_media?.edges[1]?.node.video_view_count) : '--'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image1">
                                            {/* <img src={Testing} className="recent_post_preview" /> */}
                                            <img src={`https://socialbox-bckt.s3.ap-south-1.amazonaws.com/Images/${data.username}/${data.username}_recent_image_2.png`} className="recent_post_preview" />
                                            <div className="like_comment_view_box">
                                                <div className="value_box">
                                                    <Tooltip title="Like">
                                                        <img src={LikeIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{NFormatter(data?.edge_owner_to_timeline_media?.edges[2]?.node?.edge_liked_by?.count)}</span>
                                                </div>
                                                <div className="value_box">
                                                    <Tooltip title="Comment">
                                                        <img src={CommentIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{data?.edge_owner_to_timeline_media?.edges[2]?.node?.edge_media_to_comment?.count ? NFormatter(data?.edge_owner_to_timeline_media?.edges[2]?.node?.edge_media_to_comment?.count) : '--'}</span>
                                                </div>
                                                <div className="value_box">
                                                    <Tooltip title='Views'>
                                                        <img src={ViewIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{data?.edge_owner_to_timeline_media?.edges[2]?.node?.video_view_count ? NFormatter(data?.edge_owner_to_timeline_media?.edges[2]?.node?.video_view_count) : '--'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image1">
                                            {/* <img src={Testing} className="recent_post_preview" /> */}
                                            <img src={`https://socialbox-bckt.s3.ap-south-1.amazonaws.com/Images/${data.username}/${data.username}_recent_image_3.png`} className="recent_post_preview" />
                                            <div className="like_comment_view_box">
                                                <div className="value_box">
                                                    <Tooltip title="Like">
                                                        <img src={LikeIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{NFormatter(data?.edge_owner_to_timeline_media?.edges[3]?.node?.edge_liked_by?.count)}</span>
                                                </div>
                                                <div className="value_box">
                                                    <Tooltip title="Comment">
                                                        <img src={CommentIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{data?.edge_owner_to_timeline_media?.edges[3]?.node?.edge_media_to_comment?.count ? NFormatter(data?.edge_owner_to_timeline_media?.edges[3]?.node?.edge_media_to_comment?.count) : '--'}</span>
                                                </div>
                                                <div className="value_box">
                                                    <Tooltip title='Views'>
                                                        <img src={ViewIcon} />
                                                    </Tooltip>
                                                    <span className="like_comment_value">{data?.edge_owner_to_timeline_media?.edges[3]?.node?.video_view_count ? NFormatter(data?.edge_owner_to_timeline_media?.edges[3]?.node?.video_view_count) : '--'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='inline_loader'>
                            <Loader />
                        </div>
                }
            </div>
        </div>
    )
}
export default ProfileData; 