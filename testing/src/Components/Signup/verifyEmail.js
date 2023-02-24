import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

function VerifyEmail() {

    const params = useParams();
    const navigate = useNavigate();

    const verify = () => {
        console.log(params);
        const url = `http://13.127.230.191:4000/verifyEmail?token=${params.token}`;
        fetch((url), {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                const { errors } = data;
                if (errors) {
                    console.log(errors)
                }
                else {
                    navigate(`/`);
                }
            })
    }

    useEffect(()=>{
        verify();
    },[])

    return (
        <>
        </>
    )
}
export default VerifyEmail;