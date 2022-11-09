import React, { useState } from "react";
import { Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import './welcome.scss';

function Welcome() {
    const [inputField, setInputField] = useState('');

    let navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputField(e.target.value)
    }

    const searchInfluencers = () => {
        navigate(`/influencerslist/${inputField}`);
    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <h2>Find Influencers from the Largest Database</h2>
                </div>
                <div className="content">
                    <h5> Access over 3,16,895 Indian Influencers from 100 categories and a zillion topics
                    </h5>
                    <div className="input_container">
                        <input
                            type='text'
                            className="input_box"
                            placeholder="Type Names, Usernames, Category"
                            value={inputField}
                            onChange={handleInputChange}
                        />
                        <Button onClick={searchInfluencers} className="input_button">Search</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome;