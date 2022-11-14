import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './calculateinf.scss';

function CalculateInfluencers() {

    const [influencerName, setInfluencerName] = useState('');

    const handleCostInfluencer = () => {

    }

    return (
        <>
            <div className='input_fields'>
                <input
                    type='text'
                    value={influencerName}
                    onChange={(e) => { setInfluencerName(e.target.value) }}
                />
                <Button onClick={() => { handleCostInfluencer(influencerName) }}><span>Search</span></Button>
            </div>
            <div className='result_pane'>
                <div className='results'>
                    <div>Influencer Name</div>
                    <div>Followers</div>
                    <div>Engagement Rate</div>
                    <div>Average Like</div>
                    <div>Average Comment</div>
                    <div>Average Reach</div>
                    <div>Deliverables</div>
                    <div>Cost</div>
                </div>
                <div className='result_map_data'>
                </div>
            </div>
        </>
    )
}
export default CalculateInfluencers;