import React, { useState } from 'react';

function UserLists() {

    const [listInfluencersData, setListInfluencersData] = useState([]);

    const userId = localStorage.getItem('id');
    const handleListClick = (item) => {
        const url = `http://localhost:4000/showInfluencersList/${userId}?list=${item.listName}`
        fetch((url))
            .then((data) => data.json())
            .then((response) => {
                setListInfluencersData([response])
            })
    }

    return (
        <>
        </>
    )

}
export default UserLists;