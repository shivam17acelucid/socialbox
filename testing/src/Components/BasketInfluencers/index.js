import React, { useState, useEffect } from 'react'
import './index.scss';
import Navbar from '../../Common/Sidebar/sidebar';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";

function BasketInfluencers() {

    const [inputField, setInputField] = useState('');
    const [influencersData, setInfluencersData] = useState([]);
    let navigate = useNavigate();
    let { categoryName } = useParams();

    const searchInfluencers = () => {
        navigate(`/influencerslist/${inputField}`);
    }

    const fetchInfluencers = () => {
        const url = `http://localhost:4000/showBasketInfluencers?categoryName=${categoryName}`;
        fetch(url)
            .then((data) => { data.json() })
            .then((result) => {
                setInfluencersData(result)
            })
    }

    useEffect(() => {
        fetchInfluencers();
    }, []);

    return (
        <div className='basket_influencers_container'>
            <Navbar />
            <div className='basket_influencers_container_content'>
                <div className='middle_pane_lists'>
                    <div className='list_headers'>
                        <input type='text' value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder='Search for influencers, categoriest, topics...' className='input_search' />
                        <Button className='button_list' onClick={searchInfluencers}>Search</Button>
                    </div>
                    <div className='list_category_header'>
                        Top {categoryName} Influencers
                    </div>
                </div>
            </div>
        </div>
    )

}
export default BasketInfluencers