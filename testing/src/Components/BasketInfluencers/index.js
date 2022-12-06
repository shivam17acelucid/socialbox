import React, { useState, useEffect } from 'react'
import './index.scss';
import Navbar from '../../Common/Sidebar/sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import NFormatter from '../../Common/NumberFormatter/numFormatter';
import { useNavigate, useParams } from "react-router-dom";
import { MdAdd } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import { Input } from 'reactstrap';
import TopBar from '../../Common/TopBar/index';
import checkbundles from '../../Assets/Images/checkbundle.png'
import checklists from '../../Assets/Images/checklists.png'
import checklistselected from '../../Assets/Images/checklistselected.png';
import checkbundleselected from '../../Assets/Images/checkbundleselected.png';


function BasketInfluencers() {

    const [inputField, setInputField] = useState('');
    const [influencersData, setInfluencersData] = useState([]);
    const [addToListTableClicked, setAddToListTableClicked] = useState(false);
    const [listData, setListData] = useState([]);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    const [rowClickedData, setRowClickedData] = useState('');
    const [isfilterFollowerClicked, setIsFilterFollowerClicked] = useState(false);
    const [isfilterCategoryClicked, setIsFilterCategoryClicked] = useState(false);
    const [isfilterErClicked, setIsFilterErClicked] = useState(false);
    const [filterFollowerClicked, setFilterFollowerClicked] = useState(false);
    const [filterCategoryClicked, setFilterCategoryClicked] = useState(false);
    const [filterErClicked, setFilterErClicked] = useState(false);
    const [minRange, setMinrange] = useState();
    const [maxRange, setMaxRange] = useState();
    const [category, setCategory] = useState('');
    const [minErRange, setMinErrange] = useState();
    const [maxErRange, setMaxErRange] = useState();
    const [followersRangeBasedInfluencers, setFollowersRangeBasedInfluencers] = useState([]);
    const [categoryBasedInfluencers, setCategoryBasedInfluencers] = useState([]);
    const [erBasedInfluencers, setErBasedInfluencers] = useState([]);
    const [basketData, setBasketData] = useState([]);
    const [changeBasket, setChangeBasket] = useState(false);
    const [listIconSelected, setListIconSelected] = useState(false);
    const [bundleIconSelected, setBundleIconSelected] = useState(true);

    let navigate = useNavigate();
    let { categoryName } = useParams();
    const userId = localStorage.getItem('id');

    const fetchInfluencers = () => {
        const url = `http://localhost:4000/showBasketInfluencers?categoryName=${categoryName}`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setInfluencersData(result)
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

    const redirectProfile = (data) => {
        navigate(`/profile/${data.username}`)
    }

    const handleAddToListTable = (data) => {
        setRowClickedData(data.username)
        const toggle = addToListTableClicked ? false : true;
        setAddToListTableClicked(toggle);
    }

    const handleFollowerFilterClicked = () => {
        setIsFilterFollowerClicked(value => !value)
    };

    const handleCategoryFilterClicked = () => setIsFilterCategoryClicked(value => !value);

    const handleErFilterClicked = () => setIsFilterErClicked(value => !value);

    const addInfluencerToList = (data, item) => {
        const url = `http://localhost:4000/addInfluencersToList/${userId}?list=${item.listName}&username=${data.username}`
        fetch((url), {
            method: 'POST',
        })
            .then((data) => { data.json() })
            .then((res) => {
                console.log(res)
            })
    }

    const filterByFollowersRange = () => {
        setFilterFollowerClicked(true);
        setIsFilterFollowerClicked(false);
        const url = `http://localhost:4000/followersfilteredBasketData?minFollowers=${minRange}&maxFollowers=${maxRange}&listName=${categoryName}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setFollowersRangeBasedInfluencers(res)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const filterCategory = () => {
        setFilterCategoryClicked(true)
        setIsFilterCategoryClicked(false);
        const url = `http://localhost:4000/filtered_basket_list?listName=${categoryName}&category=${category}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setCategoryBasedInfluencers(res)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const filterByErRange = () => {
        setFilterErClicked(true);
        setIsFilterErClicked(false);
        const url = `http://localhost:4000/erfilteredBasketData?minEr=${minErRange}&maxEr=${maxErRange}&listName=${categoryName}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setErBasedInfluencers(res)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
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
        setChangeBasket((prev) => !prev);
        navigate(`/basketInfluencers/${item.categoryName}`);
    }

    useEffect(() => {
        fetchInfluencers();
        getListData();
        fetchBasketsName();
    }, [changeBasket]);

    useEffect(() => {
        fetchInfluencers();
        getListData();
        fetchBasketsName();
    }, []);


    return (
        <div className='basket_influencers_container'>
            <Navbar />
            <div className='basket_influencers_container_content'>
                <TopBar />
                <div style={{ display: 'flex' }}>
                    <div className='middle_pane_lists'>
                        <div className='list_category_header'>
                            Top {categoryName} Influencers
                        </div>
                        <div className="filter_bar">
                            <Button variant="outlined" onClick={handleFollowerFilterClicked}>Followers {isfilterFollowerClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={handleCategoryFilterClicked}>Category {isfilterCategoryClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={handleErFilterClicked}>Engagement Rate {isfilterErClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            {
                                isfilterErClicked === true ?
                                    <section className="modal_section">
                                        <div className="modal_option">
                                            <div className='close_btn' onClick={() => setIsFilterErClicked(false)}>X</div>
                                            <div>Select Engagement Rate Range</div>
                                            <Input
                                                placeholder="MinRange"
                                                className="w-50"
                                                type="text"
                                                value={minErRange}
                                                onChange={(e) => { setMinErrange(e.target.value) }}
                                            />
                                            <Input
                                                placeholder="MaxRange"
                                                className="w-50"
                                                type="text"
                                                value={maxErRange}
                                                onChange={(e) => { setMaxErRange(e.target.value) }}
                                            />
                                            <Button
                                                color="primary"
                                                onClick={filterByErRange}
                                            >
                                                Filter
                                            </Button>
                                        </div>
                                    </section>
                                    :
                                    isfilterCategoryClicked === true ?
                                        <section className="modal_section">
                                            <div className="modal_option">
                                                <div className='close_btn' onClick={() => setIsFilterCategoryClicked(false)}>X</div>
                                                <div>Add Category</div>
                                                <Input
                                                    placeholder="Category"
                                                    className="w-50"
                                                    type="text"
                                                    value={category}
                                                    onChange={(e) => { setCategory(e.target.value) }}
                                                />
                                                <Button
                                                    color="primary"
                                                    onClick={filterCategory}
                                                >
                                                    Filter
                                                </Button>
                                            </div>
                                        </section>
                                        :
                                        isfilterFollowerClicked === true ?
                                            <section className="modal_section">
                                                <div className="modal_option">
                                                    <div className='close_btn' onClick={() => setIsFilterFollowerClicked(false)}>X</div>
                                                    <div>Select Followers</div>
                                                    <Input
                                                        placeholder="MinRange"
                                                        className="w-50"
                                                        type="text"
                                                        value={minRange}
                                                        onChange={(e) => { setMinrange(e.target.value) }}
                                                    />
                                                    <Input
                                                        placeholder="MaxRange"
                                                        className="w-50"
                                                        type="text"
                                                        value={maxRange}
                                                        onChange={(e) => { setMaxRange(e.target.value) }}
                                                    />
                                                    <Button
                                                        color="primary"
                                                        onClick={filterByFollowersRange}
                                                    >
                                                        Filter
                                                    </Button>
                                                </div>
                                            </section>
                                            : null
                            }
                        </div>
                        <div className='list_category_data'>
                            <TableContainer component={Paper}>
                                <Table stickyHeader className="table_container" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="center">Category</TableCell>
                                            <TableCell align="center">Avg Likes</TableCell>
                                            <TableCell align="center">Followers</TableCell>
                                            <TableCell align="center">Average Reach</TableCell>
                                            <TableCell align="center">Average Comment</TableCell>
                                            <TableCell align="center">Engagement Rate</TableCell>
                                            <TableCell align="center">City</TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            (filterErClicked === true ?
                                                erBasedInfluencers :
                                                filterCategoryClicked === true ?
                                                    categoryBasedInfluencers :
                                                    filterFollowerClicked === true ?
                                                        followersRangeBasedInfluencers :
                                                        influencersData)
                                                .map((data, index) =>
                                                    <>
                                                        < TableRow>
                                                            <TableCell component="th" scope="row" key={data.username} onClick={() => redirectProfile(data)} >
                                                                {data.full_name}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {data.category_enum !== null ? data.category_enum.length > 12 ? (data.category_enum.substring(0, 15) + '...') : data.category_enum : null}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_likes)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_followed_by.count)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_felix_video_timeline['edges'][0].averageReelView)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_comment)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_owner_to_timeline_media['edges'][0].er)}
                                                            </TableCell>
                                                            <TableCell align="center">{data.city_name}</TableCell>
                                                            <TableCell key={index} >
                                                                <>
                                                                    <Button><span>Cost</span></Button>
                                                                    <Button id={data.id} onClick={() => { handleAddToListTable(data) }}><span><MdAdd /> To List</span></Button>
                                                                    {addToListTableClicked === true ?
                                                                        [data].map((item) =>
                                                                            item.username == rowClickedData ?
                                                                                <section className="addList_section" id={data.id}>
                                                                                    <div className="addList_option">
                                                                                        <div onClick={() => setNewPlanClicked(true)} className='section_dropdown_header'>To New List <span><MdAdd /></span></div>
                                                                                        <div>Recently Created Lists</div>
                                                                                        {listData.map((item) =>
                                                                                            <div className="list_options" onClick={() => { addInfluencerToList(data, item) }}>
                                                                                                {item.listName}
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                </section>
                                                                                : null
                                                                        )

                                                                        : null}
                                                                    <Button><span>Compare</span></Button>
                                                                </>
                                                            </TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    <div className='side_influencers_bundle'>
                        <div className='side_list_css'>
                            <div className='select_pane'>
                                {bundleIconSelected === true ?
                                    <img src={checkbundleselected} onClick={() => {
                                        setBundleIconSelected(false)
                                        setListIconSelected(true)
                                    }} style={{ cursor: 'pointer' }} />
                                    :
                                    <img src={checkbundles} onClick={() => {
                                        setBundleIconSelected(true)
                                        setListIconSelected(false)
                                    }} style={{ cursor: 'pointer' }} />}
                                {listIconSelected === false ?
                                    <img src={checklists} onClick={() => {
                                        setListIconSelected(true)
                                        setBundleIconSelected(false)
                                    }} style={{ cursor: 'pointer' }} />
                                    :
                                    <img src={checklistselected} onClick={() => {
                                        setListIconSelected(false)
                                        setBundleIconSelected(true)
                                    }} style={{ cursor: 'pointer' }} />}
                            </div>
                            {
                                listIconSelected === true ? null
                                    :
                                    <>
                                        <div className='sidebar_header'>
                                            Top Bundles
                                        </div>
                                        {basketData.map((item) =>
                                            <div className='bundle_box'>
                                                <div className='influencers_image'>
                                                    x
                                                </div>
                                                <div className='bundle_title'>Top {item.basketInfluencersCount} {item.categoryName} Influencers</div>
                                                <div className='bundle_btn' onClick={() => { handleRedirectToBasket(item) }}>View</div>
                                            </div>)}
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default BasketInfluencers