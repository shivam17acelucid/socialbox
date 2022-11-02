import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileData = () => {
    const [influencersData, setInfluencersData] = useState([]);

    let { profilename } = useParams();

    const fetchProfiles = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=${profilename}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
                        console.log(res)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchProfiles();
    }, []);

    return (
        <>
        </>
    )
}
export default ProfileData; 