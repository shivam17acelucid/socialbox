import React, { useState } from 'react';
import Button from '@mui/material/Button';

function CompareLists() {

    const [basket1, setBasket1] = useState('');
    const [basket2, setBasket2] = useState('');
    const [basket3, setBasket3] = useState('');
    const [comparedlistsData, setComparedlistsData] = useState([]);

    const handleComparelists = (basket1, basket2, basket3) => {
        setComparedlistsData([]);
        const url = `http://localhost:4000/compareCategorizedBaskets?basket1=${basket1}&basket2=${basket2}&basket3=${basket3}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setComparedlistsData(data);
            })
    }

    return (
        <>
            <div className='input_fields'>
                <input
                    type='text'
                    value={basket1}
                    onChange={(e) => { setBasket1(e.target.value) }}
                />
                <input
                    type='text'
                    value={basket2}
                    onChange={(e) => { setBasket2(e.target.value) }}
                />
                <input
                    type='text'
                    value={basket3}
                    onChange={(e) => { setBasket3(e.target.value) }}
                />
                <Button onClick={() => { handleComparelists(basket1, basket2, basket3) }}><span>Search</span></Button>
            </div>
            <div className='result_pane'>
                <div className='results'>
                    <div>Number of Influencers</div>
                    <div>Total Followers</div>
                    <div>Total Reach</div>
                    <div>Average ER</div>
                    <div>Average Like</div>
                    <div>Total Comments</div>
                    <div>Total Costs</div>
                </div>
                <div className='result_map_data'>
                    {/* {
                        comparedlistsData.map((data) =>
                            <>
                                <div>{data.username}</div>
                                <div>{data.edge_followed_by.count}</div>
                                <div>{data.edge_owner_to_timeline_media['edges'][0].er}</div>
                                <div>{data.edge_owner_to_timeline_media['edges'][0].avg_likes}</div>
                                <div>{data.edge_owner_to_timeline_media['edges'][0].avg_comment}</div>
                                <div>{data.edge_felix_video_timeline['edges'][0].averageReelView}</div>
                            </>
                        )
                    } */}
                </div>
            </div>
        </>
    )
}
export default CompareLists;