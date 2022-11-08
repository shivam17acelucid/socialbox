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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzYyMTA2YjA0MzAwMjI1NTRmODliYWEiLCJ1c2VyIjp7Il9pZCI6IjYzNjIxMDZiMDQzMDAyMjU1NGY4OWJhYSIsImVtYWlsIjoic2hpdmFtQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFpOLjlVQnUuS2J2bUlNRC56d056c2VlVDd1UDhmNlE5MFBjMEk1T2RhajBqcG9jNlpyNzdXIiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMTEtMDJUMDY6Mzc6NTcuMjc4WiIsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5U1dRaU9pSTJNell5TVRBMllqQTBNekF3TWpJMU5UUm1PRGxpWVdFaUxDSjFjMlZ5Y3lJNmV5SmxiV0ZwYkNJNkluTm9hWFpoYlVCbmJXRnBiQzVqYjIwaUxDSndZWE56ZDI5eVpDSTZJakV5TXpRMU5qYzRJaXdpY205c1pTSTZJblZ6WlhJaUxDSnpkR0YwZFhNaU9uUnlkV1VzSW1OeVpXRjBaV1JCZENJNklqSXdNakl0TVRFdE1ESlVNRFk2TXpjNk5UY3VNamM0V2lJc0lsOXBaQ0k2SWpZek5qSXhNRFppTURRek1EQXlNalUxTkdZNE9XSmhZU0o5TENKcFlYUWlPakUyTmpjek56RXhNVFVzSW1WNGNDSTZNVFkyTnpRMU56VXhOWDAueXhVTTRVaF9uQmdKalRHSlV2VWo3STBLYU4xTi1GNVJieEdDVG9aOUxVTSIsInVwZGF0ZWRBdCI6IjIwMjItMTEtMDJUMDY6Mzc6NTcuMjc4WiIsIl9fdiI6MH0sImlhdCI6MTY2Nzc5OTc3MCwiZXhwIjoxNjY3OTcyNTcwfQ.xLzyqHdePA-dp3ildXtamCqu8DTyjhNZRsWqDX6Ds7k'
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
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzYyMTA2YjA0MzAwMjI1NTRmODliYWEiLCJ1c2VyIjp7Il9pZCI6IjYzNjIxMDZiMDQzMDAyMjU1NGY4OWJhYSIsImVtYWlsIjoic2hpdmFtQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFpOLjlVQnUuS2J2bUlNRC56d056c2VlVDd1UDhmNlE5MFBjMEk1T2RhajBqcG9jNlpyNzdXIiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMTEtMDJUMDY6Mzc6NTcuMjc4WiIsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5U1dRaU9pSTJNell5TVRBMllqQTBNekF3TWpJMU5UUm1PRGxpWVdFaUxDSjFjMlZ5Y3lJNmV5SmxiV0ZwYkNJNkluTm9hWFpoYlVCbmJXRnBiQzVqYjIwaUxDSndZWE56ZDI5eVpDSTZJakV5TXpRMU5qYzRJaXdpY205c1pTSTZJblZ6WlhJaUxDSnpkR0YwZFhNaU9uUnlkV1VzSW1OeVpXRjBaV1JCZENJNklqSXdNakl0TVRFdE1ESlVNRFk2TXpjNk5UY3VNamM0V2lJc0lsOXBaQ0k2SWpZek5qSXhNRFppTURRek1EQXlNalUxTkdZNE9XSmhZU0o5TENKcFlYUWlPakUyTmpjek56RXhNVFVzSW1WNGNDSTZNVFkyTnpRMU56VXhOWDAueXhVTTRVaF9uQmdKalRHSlV2VWo3STBLYU4xTi1GNVJieEdDVG9aOUxVTSIsInVwZGF0ZWRBdCI6IjIwMjItMTEtMDJUMDY6Mzc6NTcuMjc4WiIsIl9fdiI6MH0sImlhdCI6MTY2Nzc5OTc3MCwiZXhwIjoxNjY3OTcyNTcwfQ.xLzyqHdePA-dp3ildXtamCqu8DTyjhNZRsWqDX6Ds7k'
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