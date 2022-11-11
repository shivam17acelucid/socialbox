import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './cpinf.scss';

function CompareInfluencers() {

    const [influencer1Name, setInfluencer1Name] = useState('');
    const [influencer2Name, setInfluencer2Name] = useState('');
    const [influencer3Name, setInfluencer3Name] = useState('');

    const handleCompareInfluencers = (influencer1Name, influencer2Name, influencer3Name) => {
        const url = `http://localhost:4000/compareInfluencers?influencer1name=${influencer1Name}&influencer2name=${influencer2Name}&influencer3name=${influencer3Name}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => { console.log(data) })
    }

    return (
        <>
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
            <div className='results'>
                <div>Influencer Name</div>
                <div>Followers</div>
                <div>Engagement Rate</div>
                <div>Average Like</div>
                <div>Average Comment</div>
                <div>Average Reach</div>
            </div>
        </>
    )
}
export default CompareInfluencers;