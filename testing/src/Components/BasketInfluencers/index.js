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
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import { Input } from 'reactstrap';
import TopBar from '../../Common/TopBar/index';
import checkbundles from '../../Assets/Images/checkbundle.png'
import checklists from '../../Assets/Images/checklists.png'
import checklistselected from '../../Assets/Images/checklistselected.png';
import checkbundleselected from '../../Assets/Images/checkbundleselected.png';
import ListIcon from '../../Assets/Images/listicon.png';
import CostIcon from '../../Assets/Images/costicon.png';
import CompareIcon from '../../Assets/Images/compareicon.png';
import MyLists from '../MyLists';


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
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState('');
    const [autoSuggestedData, setAutoSuggestedData] = useState([]);
    const [influencer, setInfluencer] = useState([]);
    const [addToCompareClicked, setAddToCompareClicked] = useState(false);
    const [addToCompareData, setAddToCompareData] = useState('');
    const [removeInfluencerClicked, setRemoveInfluencerClicked] = useState(false);

    let navigate = useNavigate();
    let { categoryName } = useParams();
    const userId = localStorage.getItem('id');
    let autoSuggestedArray = [];

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
                setAddToListTableClicked(!addToListTableClicked)
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

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
            const filterSuggestions = autoSuggestedData.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(query) > -1
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e) => {
        setInfluencer(e.target.innerText)
        setSuggestions([]);
        setValue('');
        setSuggestionsActive(false);
    };

    const Suggestions = () => {
        return (
            <div className="suggestions">
                {suggestions.map((suggestion, index) => {
                    return (
                        <div
                            className={index === suggestionIndex ? "active_inf" : "non_active"}
                            key={index}
                            onClick={handleClick}
                        >
                            {suggestion}
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleAddToCompare = (data) => {
        const toggle = addToCompareClicked ? false : true;
        setAddToCompareClicked(toggle);
        setAddToCompareData(data.username)
    }

    const handleRemoveInfluencer = (data) => {
        setRemoveInfluencerClicked(true);
    }

    const fetchAllData = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        res.map((item) => {
                            autoSuggestedArray.push(item.username)
                            setAutoSuggestedData(autoSuggestedArray)
                        })
                    })
            })
            .catch((err) => {
                console.log(err)
            })
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
        fetchAllData();
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
                        <div className='list_desc'>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        {/* <div className="filter_bar">
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
                        </div> */}
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
                                            <TableCell align="center">ER</TableCell>
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
                                                                <div style={{ display: 'flex', cursor: 'pointer' }}>
                                                                    <img src={CostIcon} style={{ marginLeft: '10px', marginRight: '10px' }} />
                                                                    <img src={ListIcon} id={data.id} onClick={() => { handleAddToListTable(data) }} style={{ marginLeft: '10px', marginRight: '10px' }} />
                                                                    {addToListTableClicked === true ?
                                                                        [data].map((item) =>
                                                                            item.username == rowClickedData ?
                                                                                <section className="addList_section" id={data.id}>
                                                                                    <div className="addList_option">
                                                                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={handleAddToListTable}><AiOutlineClose /></div>
                                                                                        <div onClick={() => setNewPlanClicked(true)} className='section_dropdown_header'>Add To List</div>
                                                                                        <div className="section_list_title">
                                                                                            Select the list to which you want to add the
                                                                                            influencer.
                                                                                        </div>
                                                                                        <div style={{ overflowY: 'scroll', height: '20vh', padding: '12px' }}>
                                                                                            {listData.map((item) =>
                                                                                                <div className="list_options" onClick={() => { addInfluencerToList(data, item) }}>
                                                                                                    {item.listName}
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                </section>
                                                                                : null
                                                                        )

                                                                        : null}
                                                                    <img src={CompareIcon} style={{ marginLeft: '10px', marginRight: '10px' }} onClick={() => handleAddToCompare(data)} />
                                                                    {
                                                                        addToCompareClicked === true ?

                                                                            [data].map((item) =>
                                                                                item.username === addToCompareData ?
                                                                                    <div className="compare_section">
                                                                                        <div className="close_btn"><AiOutlineClose onClick={() => handleAddToCompare()} /></div>
                                                                                        <div className="compare_headers">
                                                                                            Add to Compare
                                                                                        </div>
                                                                                        <div className="compare_title">
                                                                                            Select the influencer(s) from your lists to
                                                                                            add to the selection you want to compare. You may
                                                                                            compare upto four influencers.
                                                                                        </div>
                                                                                        <input
                                                                                            type="text"
                                                                                            value={value}
                                                                                            onChange={handleChange}
                                                                                            className="compare_input    "
                                                                                        />
                                                                                        {suggestionsActive && <Suggestions />}
                                                                                        <div className="influencers_box">
                                                                                            <div className="added_influencer">
                                                                                                {item.username} <span onClick={() => handleRemoveInfluencer(data)}><AiOutlineClose onClick={()=>{console.log("hello")}} /></span>
                                                                                            </div>
                                                                                            {
                                                                                                influencer.length > 0 ?
                                                                                                    console.log(influencer)
                                                                                                    // influencer.map((data) =>
                                                                                                    //     console.log(data)
                                                                                                    // )
                                                                                                    : null
                                                                                            }
                                                                                            <div onClick={() => setAddToCompareData('')} className="clear_all">
                                                                                                Clear all
                                                                                            </div>
                                                                                            <div className="btn_pane">
                                                                                                <Button>
                                                                                                    Compare Now
                                                                                                </Button>
                                                                                                <Button className="clear_btn">
                                                                                                    Compare Later
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    : null
                                                                            )
                                                                            : null
                                                                    }
                                                                </div>
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
                                listIconSelected === true ?
                                    <MyLists />
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