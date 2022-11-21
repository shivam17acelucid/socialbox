import React, { useState, useEffect } from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import { useParams } from "react-router-dom";
import './lists.scss';


function UserLists() {

    const [listInfluencersData, setListInfluencersData] = useState([]);

    let { listname } = useParams();

    const userId = localStorage.getItem('id');


    const handleListClick = () => {
        const url = `http://localhost:4000/showInfluencersList/${userId}?list=${listname}`
        fetch((url))
            .then((data) => data.json())
            .then((response) => {
                setListInfluencersData([response])
            })
    }

    useEffect(() => {
        handleListClick();
    }, []);

    return (
        <div className='users_list_container'>
            <Navbar />
            <div className='users_list_pane'>
                <div className='user_list_header'>
                    {
                        listInfluencersData.map((data) =>
                            <>
                                <div>
                                    {data.data.listName}
                                    <div>
                                        {data.influencers_count}
                                    </div>
                                </div>
                                <div>
                                    {data.item.deliverables}
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )

}
export default UserLists;