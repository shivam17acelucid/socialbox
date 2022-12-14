import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../../Common/Sidebar/sidebar'
import './cpinf.scss';
import Topbar from '../../../Common/TopBar/index';
import Testing from '../.././../Assets/Images/testing.png';
import { useParams, useNavigate } from "react-router-dom";

function CompareInfluencers() {

    const [influencer1Name, setInfluencer1Name] = useState('');
    const [influencer2Name, setInfluencer2Name] = useState('');
    const [influencer3Name, setInfluencer3Name] = useState('');
    const [influencersArray, setInfluencersArray] = useState([]);
    const [comparedInfluencersData, setComparedInfluencersData] = useState([]);
    const params = useParams();

    // const handleCompareInfluencers = (influencer1Name, influencer2Name, influencer3Name) => {
    //     setComparedInfluencersData([]);
    //     const url = `http://localhost:4000/compareInfluencers?influencer1name=${influencer1Name}&influencer2name=${influencer2Name}&influencer3name=${influencer3Name}`;
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setComparedInfluencersData(data);
    //         })
    // }

    const handleCompareInfluencers = (influencersArray) => {
        // setComparedInfluencersData([]);
        // const url = `http://localhost:4000/compareInfluencers`;
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setComparedInfluencersData(data);
        //     })
        // const url = `http://localhost:4000/compareInfluencers?${result}`;
        // fetch(url)
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {
        //                 console.log(data)
        //             })
        //     })
    }

    const handleCompareInfluencersByParams = () => {
        let query = params.influencers.substring(1);
        const url = `http://localhost:4000/compareInfluencers?${query}`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setComparedInfluencersData(data)
                    })
            })

    }

    useEffect(() => {
        handleCompareInfluencersByParams();
    }, [])

    return (
        <div className='compare_influencers_container'>
            <Navbar />
            <div style={{ flex: 1 }}>
                <Topbar />
                {/* <div className='input_fields'>
                    <input
                        type='text'
                        value={influencer1Name}
                        onChange={(e) => { setInfluencer1Name(e.target.value) }}
                    />
                    <input
                        type='text'
                        value={influencer2Name}
                        onChange={(e) => { setInfluencer2Name(e.target.value) }}
                    />
                    <input
                        type='text'
                        value={influencer3Name}
                        onChange={(e) => { setInfluencer3Name(e.target.value) }}
                    />
                    <Button onClick={() => { handleCompareInfluencers(influencer1Name, influencer2Name, influencer3Name, influencersArray) }}><span>Search</span></Button>
                </div> */}
                <div className='result_pane'>
                    {
                        comparedInfluencersData.map((item) =>
                            <div className='results'>
                                <div className='profile_container'>
                                    <img src={Testing} className='image' />
                                </div>
                                <div>Influencer Name</div>
                                <div>Followers</div>
                                <div>Engagement Rate</div>
                                <div>Average Like</div>
                                <div>Average Comment</div>
                                <div>Average Reach</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default CompareInfluencers;