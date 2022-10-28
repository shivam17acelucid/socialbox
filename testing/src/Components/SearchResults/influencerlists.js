import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './influencerlists.scss';

const InfluencersList = () => {

    const [influencersData, setInfluencersData] = useState([]);

    let { inputField } = useParams();

    const fetchProfiles = () => {
        let data = inputField;
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=${data}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
                        console.log(res)
                    })
            })
    }

    useEffect(() => {
        fetchProfiles();
    }, []);

    return (
        <div className="container">
            <div className="subcontainer">
                <div className="topbar">
                    <span className="topbar_header">
                        Instagram Profiles
                    </span>
                    <span className="topbar_header">
                        Followers
                    </span>
                    <span className="topbar_header">
                        Engagement Rate
                    </span>
                    <span className="topbar_header">
                        Average Like Comment
                    </span>
                    <span className="topbar_header">
                        City
                    </span>
                    <span className="topbar_header">
                        Category
                    </span>
                    <span className="topbar_header">
                        IsVerified
                    </span>
                </div>
                <div className="searched_results">
                    {influencersData.map(item => {
                        // console.log(item.profile_pic_url_hd)
                        return (
                            <div className="content_container">
                                <div className="grid_container">
                                    <span className="grid_item">
                                        {/* <span><img src={item.profile_pic_url_hd} /></span> */}
                                        <span>{item.full_name}</span>
                                        <span>{item.username}</span>
                                    </span>
                                    <span className="grid_item">{item.edge_followed_by.count}</span>
                                    <span className="grid_item">InProgress</span>
                                    <span className="grid_item">InProgress</span>
                                    <span className="grid_item">InProgress</span>
                                    <span className="grid_item">{item.category_enum}</span>
                                    {item.is_verified ? <span className="grid_item">True</span> : <span className="grid_item">False</span>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default InfluencersList