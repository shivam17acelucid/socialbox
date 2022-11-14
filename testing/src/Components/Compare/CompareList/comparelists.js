import React, { useState } from 'react';
import Button from '@mui/material/Button';

function CompareLists() {

    const [list1Name, setList1Name] = useState('');
    const [list2Name, setList2Name] = useState('');
    const [list3Name, setList3Name] = useState('');
    const [comparedlistsData, setComparedlistsData] = useState([]);

    const handleComparelists = (list1Name, list2Name, list3Name) => {
        setComparedlistsData([]);
        const url = `http://localhost:4000/comparelists?list1name=${list1Name}&list2name=${list2Name}&list3name=${list3Name}`;
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
                    value={list1Name}
                    onChange={(e) => { setList1Name(e.target.value) }}
                />
                <input
                    type='text'
                    value={list2Name}
                    onChange={(e) => { setList2Name(e.target.value) }}
                />
                <input
                    type='text'
                    value={list3Name}
                    onChange={(e) => { setList3Name(e.target.value) }}
                />
                <Button onClick={() => { handleComparelists(list1Name, list2Name, list3Name) }}><span>Search</span></Button>
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