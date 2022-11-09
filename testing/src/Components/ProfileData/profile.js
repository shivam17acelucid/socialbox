import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../ProfileData/profile.scss';
import Button from '@mui/material/Button';
import NFormatter from "../../Common/NumberFormatter/numFormatter";

const ProfileData = () => {
    const [influencersData, setInfluencersData] = useState([]);
    const [addToListClicked, setAddToListClicked] = useState(false);
    const [listData, setListData] = useState([]);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);

    let { profilename } = useParams();

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
        const url = `http://localhost:4000/getListData`
        fetch(url, {
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZiNzZkYmI3ZTJlOGIwNTExZDIxNWQiLCJ1c2VyIjp7Il9pZCI6IjYzNmI3NmRiYjdlMmU4YjA1MTFkMjE1ZCIsImVtYWlsIjoic2hpdmFtQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJE5hVU1jTjk3bHlqaDR1UW9sWnZJMU92UlpXZGFNUnViSWdGUFliL3RoYjN3OXJieFFuNGs2Iiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMTEtMDlUMDg6MTA6NTkuMDMxWiIsImxpc3QiOltdLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXUWlPaUkyTXpaaU56WmtZbUkzWlRKbE9HSXdOVEV4WkRJeE5XUWlMQ0oxYzJWeWN5STZleUpsYldGcGJDSTZJbk5vYVhaaGJVQm5iV0ZwYkM1amIyMGlMQ0p3WVhOemQyOXlaQ0k2SWpFeU16UTFOamM0SWl3aWNtOXNaU0k2SW5WelpYSWlMQ0p6ZEdGMGRYTWlPblJ5ZFdVc0ltTnlaV0YwWldSQmRDSTZJakl3TWpJdE1URXRNRGxVTURnNk1UQTZOVGt1TURNeFdpSXNJbDlwWkNJNklqWXpObUkzTm1SaVlqZGxNbVU0WWpBMU1URmtNakUxWkNJc0lteHBjM1FpT2x0ZGZTd2lhV0YwSWpveE5qWTNPVGczTVRZekxDSmxlSEFpT2pFMk5qZ3dOek0xTmpOOS5XRzZTWEtCaHV5bUYtN0pGbGt5QkZhUHFBZ0kxbzRUVmlsaUlMbHMxTDl3IiwidXBkYXRlZEF0IjoiMjAyMi0xMS0wOVQwODoxMDo1OS4wMzFaIiwiX192IjowfSwiaWF0IjoxNjY3OTg3MTc0LCJleHAiOjE2NjgxNTk5NzR9.EzTUQD_eAvvMNURWLr3gXy74cDIaOdQKbYKVilS3txE'
            }
        })
            .then((data) => {
                data.json()
                    .then((result) => {
                        setListData(result)
                    })
            })
    }

    const handleAddInfluencerToList = (data, value) => {
        const url = `http://localhost:4000/addInfluencersToList?list=${data.listName}&username=${value.username}`
        fetch((url), {
            method: 'POST',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZiNzZkYmI3ZTJlOGIwNTExZDIxNWQiLCJ1c2VyIjp7Il9pZCI6IjYzNmI3NmRiYjdlMmU4YjA1MTFkMjE1ZCIsImVtYWlsIjoic2hpdmFtQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJE5hVU1jTjk3bHlqaDR1UW9sWnZJMU92UlpXZGFNUnViSWdGUFliL3RoYjN3OXJieFFuNGs2Iiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMTEtMDlUMDg6MTA6NTkuMDMxWiIsImxpc3QiOltdLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXUWlPaUkyTXpaaU56WmtZbUkzWlRKbE9HSXdOVEV4WkRJeE5XUWlMQ0oxYzJWeWN5STZleUpsYldGcGJDSTZJbk5vYVhaaGJVQm5iV0ZwYkM1amIyMGlMQ0p3WVhOemQyOXlaQ0k2SWpFeU16UTFOamM0SWl3aWNtOXNaU0k2SW5WelpYSWlMQ0p6ZEdGMGRYTWlPblJ5ZFdVc0ltTnlaV0YwWldSQmRDSTZJakl3TWpJdE1URXRNRGxVTURnNk1UQTZOVGt1TURNeFdpSXNJbDlwWkNJNklqWXpObUkzTm1SaVlqZGxNbVU0WWpBMU1URmtNakUxWkNJc0lteHBjM1FpT2x0ZGZTd2lhV0YwSWpveE5qWTNPVGczTVRZekxDSmxlSEFpT2pFMk5qZ3dOek0xTmpOOS5XRzZTWEtCaHV5bUYtN0pGbGt5QkZhUHFBZ0kxbzRUVmlsaUlMbHMxTDl3IiwidXBkYXRlZEF0IjoiMjAyMi0xMS0wOVQwODoxMDo1OS4wMzFaIiwiX192IjowfSwiaWF0IjoxNjY3OTg3MTc0LCJleHAiOjE2NjgxNTk5NzR9.EzTUQD_eAvvMNURWLr3gXy74cDIaOdQKbYKVilS3txE'
            }
        })
            .then((data) => { data.json() })
            .then((res) => {
            })
    }

    useEffect(() => {
        fetchProfiles();
    }, []);

    return (
        <div>
            {
                influencersData.map((data) => {
                    return (
                        <div className="profile_container">
                            <div className="profile_header">
                                <div className="profile_pic">
                                    <img src={data.profile_pic_url_hd} />
                                </div>
                                <div className="profile_basic_info">
                                    <div className="profile_username">
                                        {data.username}
                                    </div>
                                    <div className="profile_name">
                                        {data.full_name}
                                    </div>
                                    <div className="profile_user_location">
                                        {data.city_name}
                                    </div>
                                </div>
                            </div>
                            <div className="profile_info_bar">
                                <div className="profile_info_bar_collection">
                                    <div>
                                        <Button onClick={handleAddList}>Add To List</Button>
                                        {
                                            addToListClicked === true ?
                                                <section className="addList_div">
                                                    <div className="addList_option">
                                                        <div>To New List</div>
                                                        <div>Recently Created Lists</div>
                                                        {listData.map((value) =>
                                                            <div className="list_options" onClick={() => { handleAddInfluencerToList(value, data) }}>
                                                                {value.listName}
                                                            </div>
                                                        )}
                                                    </div>
                                                </section> : ''
                                        }
                                    </div>
                                    <div>{NFormatter(data.edge_followed_by.count)} Followers</div>
                                    <div>{NFormatter(data.edge_felix_video_timeline.count + data.edge_owner_to_timeline_media.count)} Posts</div>
                                    <div>{data.edge_owner_to_timeline_media['edges'][0].er} Engagement Rate</div>
                                    <div>{NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_likes)} Average Likes</div>
                                    <div>{NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_comment)} Average Comment</div>
                                    <div>{NFormatter(data.edge_felix_video_timeline['edges'][0].averageReelView)} Average Views</div>
                                </div>
                            </div>
                            <div className="profile_demography">
                            </div>
                            <div className="profile_posts">
                                Posts
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProfileData; 