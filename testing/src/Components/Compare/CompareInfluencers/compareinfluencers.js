import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../../Common/Sidebar/sidebar'
import './cpinf.scss';

function CompareInfluencers() {

    const [influencer1Name, setInfluencer1Name] = useState('');
    const [influencer2Name, setInfluencer2Name] = useState('');
    const [influencer3Name, setInfluencer3Name] = useState('');
    const [comparedInfluencersData, setComparedInfluencersData] = useState([]);

    const handleCompareInfluencers = (influencer1Name, influencer2Name, influencer3Name) => {
        setComparedInfluencersData([]);
        const url = `http://localhost:4000/compareInfluencers?influencer1name=${influencer1Name}&influencer2name=${influencer2Name}&influencer3name=${influencer3Name}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setComparedInfluencersData(data);
            })
    }

    return (
        <div className='compare_influencers_container'>
            <Navbar />
            <div className='input_fields'>
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
                <Button onClick={() => { handleCompareInfluencers(influencer1Name, influencer2Name, influencer3Name) }}><span>Search</span></Button>
            </div>
            <div className='result_pane'>
                <div className='results'>
                    <div>Influencer Name</div>
                    <div>Followers</div>
                    <div>Engagement Rate</div>
                    <div>Average Like</div>
                    <div>Average Comment</div>
                    <div>Average Reach</div>
                </div>
                <div className='result_map_data'>
                    {
                        comparedInfluencersData.map((data) =>
                            <>
                                <div>{data.username}</div>
                                <div>{data.edge_followed_by.count}</div>
                                <div>{data.edge_owner_to_timeline_media['edges'][0].er}</div>
                                <div>{data.edge_owner_to_timeline_media['edges'][0].avg_likes}</div>
                                <div>{data.edge_owner_to_timeline_media['edges'][0].avg_comment}</div>
                                <div>{data.edge_felix_video_timeline['edges'][0].averageReelView}</div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default CompareInfluencers;