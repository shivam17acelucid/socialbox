import React, { useEffect, useState } from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './listpage.scss';
import { Input } from 'reactstrap';
import moment from "moment";


function Lists() {

    const [inputField, setInputField] = useState('');
    const [basketData, setBasketData] = useState([]);
    const [listClicked, setListClicked] = useState(false);
    const [listInfluencersData, setListInfluencersData] = useState([]);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    const [listName, setListName] = useState('');
    const [listData, setListData] = useState([]);

    let navigate = useNavigate();
    const userId = localStorage.getItem('id');


    const searchInfluencers = () => {
        navigate(`/influencerslist/${inputField}`);
    }

    const fetchBasketsName = () => {
        const url = `http://localhost:4000/showCategorizedBasket`;
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setBasketData(response)
            })
    }

    const handleRedirectToBasket = (item) => {
        navigate(`/basketInfluencers/${item.categoryName}`)
    }

    const handleCreateList = (listName) => {
        const url = `http://localhost:4000/createList/${userId}`
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ listName }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => { res.json() })
            .then((data) => {
                setListInfluencerDetails(data)
            })
        setNewPlanClicked(false);
    }

    const handleAddPlan = () => {
        const data = newPlanClicked ? false : true;
        setNewPlanClicked(data);
    }

    const handleListClick = (item) => {
        setListClicked(true);
        const url = `http://localhost:4000/showInfluencersList/${userId}?list=${item.listName}`
        fetch((url))
            .then((data) => data.json())
            .then((response) => {
                setListInfluencersData([response])
            })
    }

    const getListData = () => {
        const url = `http://localhost:4000/getListData/${userId}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((result) => {
                        setListData(result)
                    })
            })
    }

    useEffect(() => {
        fetchBasketsName();
        getListData();
    }, []);

    useEffect(() => {
        getListData();
    }, [newPlanClicked]);

    return (
        <>
            <div className='list_container'>
                <Navbar />
                <div className='lists_content'>
                    <div className='middle_pane_lists'>
                        <div className='list_headers'>
                            <input type='text' value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder='Search for influencers, categoriest, topics...' className='input_search' />
                            <Button className='button_list' onClick={searchInfluencers}>Search</Button>
                        </div>
                        <div className='middle_pane_content'>
                            <div className='categorised_inf'>
                                <div className='categorised_heading'>Top Influencers by Category</div>
                                <div className='categorised_btn'>
                                    {basketData.map((item) =>
                                        <Button className='button_list'>{item.categoryName}</Button>
                                    )}
                                </div>
                            </div>
                            <div className='influencers_basket'>
                                {basketData.map((item) =>
                                    <div className='influencers_basket_box'>
                                        <div className='influencers_image'>
                                            x
                                        </div>
                                        <div className='influencers_category_header'>
                                            Top {item.basketInfluencersCount} {item.categoryName} Influencers Bundle
                                        </div>
                                        <div className='basket_p'>
                                            Boost your marketing campaigns with best travel influencers bundle covering top 20 influencers
                                        </div>
                                        <div className='influencers_footer_btn'>
                                            <Button onClick={() => handleRedirectToBasket(item)}><span>Buy Now</span></Button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
                <div className="list_bar">
                    {listClicked === true ?
                        listInfluencersData.map((item) =>
                            <div className="list_clicked_data" >
                                <div onClick={() => setListClicked(false)}>back</div>
                                <div className="list_name">{item.data.listName}</div>
                                <div className="list_clicked_headers">
                                    Total Influencers {item.influencers_count}
                                </div>
                                <div>
                                    {
                                        item.data.influencersData.map((response) =>
                                            <div className="list_clicked_influencers" >
                                                <img src={response.profile_pic_hd_url} />
                                                {response.full_name}
                                                DeleteButton
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                        :
                        <>
                            <div className="headers">
                                <span>
                                    Kindly select a plan from the list below to start adding influencers!
                                    <div>👇</div>
                                </span>
                                <div className="add_btn">
                                    <Button variant="outlined" onClick={handleAddPlan}>New List</Button>
                                    {
                                        newPlanClicked ?
                                            <>
                                                <Input type="text" placeholder="List Name" value={listName} onChange={(e) => { setListName(e.target.value) }} />
                                                <Button variant="outlined" onClick={() => { handleCreateList(listName) }}>Create List</Button>
                                            </> :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="list_content">
                                {
                                    listData.map((item) =>
                                        <div className="list_content_inner" onClick={() => { handleListClick(item) }}>
                                            <div className="list_head">
                                                {item.listName}
                                                {/* {'item.influencersCount'} */}
                                            </div>
                                            <div className="list_footer">
                                                <span>{moment(item.createdAT).format('MM/DD/YYYY')}</span>
                                            </div>
                                            <div className="list_footer_btn">
                                                <Button><span className="btn_text">View List</span></Button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )

}
export default Lists;