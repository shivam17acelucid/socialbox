import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NFormatter from "../../Common/NumberFormatter/numFormatter";
import './influencerlists.scss';
import Navbar from "../../Common/Sidebar/sidebar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { Input } from "reactstrap";
import { MdAdd } from 'react-icons/md';
import { AiFillCaretDown, AiOutlineDownload, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineArrowDropUp, MdDelete } from 'react-icons/md';
import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import moment from "moment";
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TopBar from '../../Common/TopBar/index';
import ListIcon from '../../Assets/Images/listicon.png';
import CostIcon from '../../Assets/Images/costicon.png';
import CompareIcon from '../../Assets/Images/compareicon.png';
import Slider from '@mui/material/Slider';
import { AiOutlineSearch } from 'react-icons/ai';


const InfluencersList = () => {

    const [influencersData, setInfluencersData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const [showVerifiedInfluencers, setShowVerifiedInfluencers] = useState(false);
    const [verifiedInfluencers, setVerifiedInfluencers] = useState([]);
    const [category, setCategory] = useState('');
    const [categoryBasedInfluencers, setCategoryBasedInfluencers] = useState([]);
    const [erBasedInfluencers, setErBasedInfluencers] = useState([]);
    const [followersRangeBasedInfluencers, setFollowersRangeBasedInfluencers] = useState([]);
    const [isfilterFollowerClicked, setIsFilterFollowerClicked] = useState(false);
    const [isfilterCategoryClicked, setIsFilterCategoryClicked] = useState(false);
    const [isfilterErClicked, setIsFilterErClicked] = useState(false);
    const [filterFollowerClicked, setFilterFollowerClicked] = useState(false);
    const [filterCategoryClicked, setFilterCategoryClicked] = useState(false);
    const [filterErClicked, setFilterErClicked] = useState(false);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    // const [listName, setListName] = useState('');
    // const [brandName, setBrandName] = useState('');
    const [listData, setListData] = useState([]);
    const [addToListTableClicked, setAddToListTableClicked] = useState(false);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);
    const [listClicked, setListClicked] = useState(false);
    const [listInfluencersData, setListInfluencersData] = useState([]);
    const [rowClickedData, setRowClickedData] = useState('');
    const [addToCompareClicked, setAddToCompareClicked] = useState(false);
    const [addToCompareData, setAddToCompareData] = useState('');
    const [influencer, setInfluencer] = useState([]);
    const [removeInfluencerClicked, setRemoveInfluencerClicked] = useState(false);
    const [autoSuggestedData, setAutoSuggestedData] = useState([]);
    const [csvData, setCsvData] = useState('');

    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState('');
    const [rangeFollowers, setRangeFollowers] = useState([1000, 100000])
    const [rangeEr, setRangeEr] = useState([0, 20]);
    const [silderRolled, setSliderRolled] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [redirectedResult, setRedirectedResult] = useState(false);
    const [suggestionsForInputActive, setSuggestionsForInputActive] = useState(false);
    const [suggestions1, setSuggestions1] = useState([]);

    let { inputField } = useParams();
    let navigate = useNavigate();

    const userId = localStorage.getItem('id');
    let autoSuggestedArray = [];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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

    const fetchProfiles = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=${inputField}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const showVerified = () => {
        const data = showVerifiedInfluencers ? false : true;
        setShowVerifiedInfluencers(data);
        let arr = [];
        influencersData.forEach((data) => {
            if (data.is_verified === true) {
                arr.push(data)
                setVerifiedInfluencers(arr)
            }
        })
    }

    const redirectProfile = (data) => {
        navigate(`/profile/${data.username}`)
    }

    const handleFollowerFilterClicked = () => {
        setIsFilterFollowerClicked(value => !value)
    };

    const handleCategoryFilterClicked = () => setIsFilterCategoryClicked(value => !value);

    const handleErFilterClicked = () => setIsFilterErClicked(value => !value);

    const scale = value => {
        const previousMarkIndex = Math.floor(value / 25);
        const previousMark = followersRange[previousMarkIndex];
        const remainder = value % 25;
        if (remainder === 0) {
            return previousMark.scaledValue;
        }
        const nextMark = followersRange[previousMarkIndex + 1];
        const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
        return remainder * increment + previousMark.scaledValue;
    };

    const followersRange = [
        {
            value: 0,
            scaledValue: 1000,
            label: "1k"
        },
        {
            value: 25,
            scaledValue: 5000,
            label: "5k"
        },
        {
            value: 50,
            scaledValue: 10000,
            label: "10k"
        },
        {
            value: 75,
            scaledValue: 25000,
            label: "25k"
        },
        {
            value: 100,
            scaledValue: 50000,
            label: "50k"
        },
        {
            value: 125,
            scaledValue: 100000,
            label: "100k"
        },
        {
            value: 150,
            scaledValue: 250000,
            label: "250k"
        },
        {
            value: 175,
            scaledValue: 500000,
            label: "500k"
        },
        {
            value: 200,
            scaledValue: 1000000,
            label: "1M"
        }
    ];

    const ErRange = [
        {
            value: 0,
            scaledValue: 0,
            label: "0"
        },
        {
            value: 5,
            scaledValue: 5,
            label: "5"
        },
        {
            value: 10,
            scaledValue: 10,
            label: "10"
        },
        {
            value: 15,
            scaledValue: 15,
            label: "15"
        },
        {
            value: 20,
            scaledValue: 20,
            label: "20"
        }
    ];

    function numFormatter(num) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }

    const filterCategory = () => {
        setFilterCategoryClicked(true)
        setIsFilterCategoryClicked(false);
        const url = `http://localhost:4000/getinfluencerdata?category=${category}`;
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

    const filterByFollowersRange = () => {
        setFilterFollowerClicked(true);
        setIsFilterFollowerClicked(false);
        const url = `http://localhost:4000/getfilteredData?minFollowers=${scale(rangeFollowers[0])}&maxFollowers=${[scale(rangeFollowers[1])]}`;
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

    const filterByErRange = () => {
        setFilterErClicked(true);
        setIsFilterErClicked(false);
        const url = `http://localhost:4000/getErFilteredInfluencersData?minEr=${rangeEr[0]}&maxEr=${rangeEr[1]}`;
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

    const handleDownloadData = () => {
        const url = `http://localhost:4000/downloadcsv`;
        fetch((url), {
            headers: {
                'Content-type': 'text/csv; charset=UTF-8',
            }
        })
            .then((res) => {
                res.text()
                    .then((data) => {
                        setCsvData(data)
                    })
            })
    }

    // useEffect(() => {
    //     fetchProfiles();
    //     getListData();
    // }, []);

    useEffect(() => {
        fetchAllData();
        fetchProfiles();
        getListData();
    }, [redirectedResult]);

    useEffect(() => {
        getListData();
    }, [newPlanClicked]);



    const handleAddPlan = () => {
        const data = newPlanClicked ? false : true;
        setNewPlanClicked(data);
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

    const handleAddToListTable = (e) => {
        setRowClickedData(e.username)
        const toggle = addToListTableClicked ? false : true;
        setAddToListTableClicked(toggle);
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

    const addInfluencerToList = (data, item) => {
        const url = `http://localhost:4000/addInfluencersToList/${userId}?list=${item.listName}&username=${data.username}`
        fetch((url), {
            method: 'POST',
        })
            .then((data) => { data.json() })
            .then((res) => {
                console.log(res)
            })
        setAddToListTableClicked(false)
    }

    const handleAddToCompare = (data) => {
        const toggle = addToCompareClicked ? false : true;
        setAddToCompareClicked(toggle);
        setAddToCompareData(data.username)
    }

    const handleRemoveInfluencer = (data) => {
        console.log(data)
        setRemoveInfluencerClicked(true);
        // addToCompareData.filter(e => e !== data.username);
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

    function TablePaginationActions(count) {
        const handleFirstPageButtonClick = (event) => {
            setPage(0);
        };

        const handleBackButtonClick = (event) => {
            setPage(page - 1);
        };

        const handleNextButtonClick = (event) => {
            setPage(page + 1);
        };

        const handleLastPageButtonClick = (event) => {
            setPage(Math.max(0, Math.ceil(count.count / rowsPerPage) - 1));
        };

        return (
            <div style={{ display: 'flex' }}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    <FirstPageIcon />
                </IconButton>
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="previous page"
                >
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    aria-label="next page"
                    disabled={page >= Math.ceil(count.count / rowsPerPage) - 1}
                >
                    <KeyboardArrowRight />
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count.count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    <LastPageIcon />
                </IconButton>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const query = e.target.value.toLowerCase();
        setInputValue(query);
        if (query.length > 1) {
            const filterSuggestions = autoSuggestedData.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(query) > -1
            );
            setSuggestions1(filterSuggestions);
            setSuggestionsForInputActive(true);
        } else {
            setSuggestionsForInputActive(false);
        }
    }

    const handleInfluencerClick = (e) => {
        navigate(`/profile/${e.target.innerText}`);
        setSuggestions1([]);
        setInputValue('');
        setSuggestionsForInputActive(false);
    };

    const handleRedirectToResults = () => {
        setAutoSuggestedData([])
        setRedirectedResult(!redirectedResult);
        navigate(`/influencerslist/${inputValue}`);
        setInputValue('');
        setSuggestions1([]);
        setSuggestionsForInputActive(false);
    }

    const SuggestionsInfluencer = () => {
        return (
            <>
                <div className="suggestions_influencer">
                    <div style={{
                        margin: '5px', padding: 0, fontFamily: 'Noto Sans',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.7)'
                    }}>Influencers</div>
                    {suggestions1.map((suggestion, index) => {
                        return (
                            <div
                                className={index === setSuggestionsForInputActive ? "active_influencer" : ""}
                                key={index}
                                onClick={handleInfluencerClick}
                            >
                                {suggestion}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <div className="search_container">
            <div className="subcontainer">
                <div className="sidebar">
                    <Navbar />
                </div>
                <div className="search_content_list_panel">
                    <TopBar />
                    <div className="middle_pane">
                        <div className="input_box_influencer">
                            <Input
                                type="text"
                                placeholder='Search for influencers, categories...'
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            {suggestionsForInputActive && <SuggestionsInfluencer />}
                            <AiOutlineSearch onClick={handleRedirectToResults} />
                        </div>
                        <div className="filter_bar">
                            <Button variant="outlined" onClick={handleFollowerFilterClicked}>Followers {isfilterFollowerClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={handleCategoryFilterClicked}>Category {isfilterCategoryClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={handleErFilterClicked}>Engagement Rate {isfilterErClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={showVerified}>{showVerifiedInfluencers === true ? 'Back' : 'Registered influencers'}</Button>
                            {
                                isfilterErClicked === true ?
                                    <section className="modal_section">
                                        <div className="modal_option">
                                            <div>Engagement %</div>
                                            <Slider
                                                value={rangeEr}
                                                onChange={(e, data) => {
                                                    setRangeEr(data)
                                                    setSliderRolled(true);
                                                }}
                                                marks={ErRange}
                                                min={0}
                                                max={20}
                                                step={1}
                                            />
                                            {
                                                silderRolled === true ?
                                                    <>
                                                        <div className="followers_count_1">Minimum ER: {rangeEr[0]}</div>
                                                        <div className="followers_count">Maximum ER: {rangeEr[1]}</div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className="followers_count_1">Minimum ER: {rangeEr[0]}</div>
                                                        <div className="followers_count">Maximum ER: {rangeEr[1]}</div>
                                                    </>
                                            }
                                            <div style={{
                                                display: 'flex', justifyContent: 'space-between'
                                            }}>
                                                <Button
                                                    color="primary"
                                                    onClick={filterByErRange}
                                                >
                                                    Filter
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    onClick={handleErFilterClicked}
                                                    style={{
                                                        background: '#D7D7D7', borderRadius: '3px', fontFamily: 'Noto Sans', fontStyle: 'normal',
                                                        fontWeight: 600,
                                                        fontSize: '12px',
                                                        lineHeight: '16px',
                                                        textAlign: 'center',
                                                        color: '#595959'
                                                    }}
                                                >
                                                    Clear
                                                </Button>
                                            </div>
                                        </div>
                                    </section>
                                    :
                                    isfilterCategoryClicked === true ?
                                        <section className="modal_section">
                                            <div className="modal_option">
                                                <div>Add Category</div>
                                                <Input
                                                    placeholder="Category"
                                                    className="w-50"
                                                    type="text"
                                                    value={category}
                                                    onChange={(e) => { setCategory(e.target.value) }}
                                                />
                                                <div style={{
                                                    display: 'flex', justifyContent: 'space-between'
                                                }}>
                                                    <Button
                                                        color="primary"
                                                        onClick={filterCategory}
                                                    >
                                                        Filter
                                                    </Button>
                                                    <Button
                                                        color="primary"
                                                        onClick={handleCategoryFilterClicked}
                                                        style={{
                                                            background: '#D7D7D7', borderRadius: '3px', fontFamily: 'Noto Sans', fontStyle: 'normal',
                                                            fontWeight: 600,
                                                            fontSize: '12px',
                                                            lineHeight: '16px',
                                                            textAlign: 'center',
                                                            color: '#595959'
                                                        }}
                                                    >
                                                        Clear
                                                    </Button>
                                                </div>
                                            </div>
                                        </section>
                                        :
                                        isfilterFollowerClicked === true ?
                                            <section className="modal_section">
                                                <div className="modal_option">
                                                    <div className="modal_title">Followers Count</div>
                                                    <Slider
                                                        value={rangeFollowers}
                                                        onChange={(e, data) => {
                                                            setRangeFollowers(data)
                                                            setSliderRolled(true);
                                                        }}
                                                        marks={followersRange}
                                                        min={0}
                                                        max={200}
                                                        step={1}
                                                        scale={scale}
                                                        valueLabelFormat={numFormatter}
                                                    />
                                                    {
                                                        silderRolled === true ?
                                                            <>
                                                                <div className="followers_count_1">Minimum Followers Count: {scale(rangeFollowers[0])}</div>
                                                                <div className="followers_count">Maximum Followers Count: {scale(rangeFollowers[1])}</div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className="followers_count_1">Minimum Followers Count: {rangeFollowers[0]}</div>
                                                                <div className="followers_count">Maximum Followers Count: {rangeFollowers[1]}</div>
                                                            </>
                                                    }
                                                    <div style={{
                                                        display: 'flex', justifyContent: 'space-between'
                                                    }}>
                                                        <Button
                                                            color="primary"
                                                            onClick={filterByFollowersRange}
                                                        >
                                                            Filter
                                                        </Button>
                                                        <Button
                                                            color="primary"
                                                            onClick={handleFollowerFilterClicked}
                                                            style={{
                                                                background: '#D7D7D7', borderRadius: '3px', fontFamily: 'Noto Sans', fontStyle: 'normal',
                                                                fontWeight: 600,
                                                                fontSize: '12px',
                                                                lineHeight: '16px',
                                                                textAlign: 'center',
                                                                color: '#595959'
                                                            }}
                                                        >
                                                            Clear
                                                        </Button>
                                                    </div>
                                                </div>
                                            </section>
                                            : null
                            }
                            <div className="download_icon">
                                <a
                                    href={`data:text/csv;charset=utf-8,${(csvData)}`}
                                    download="filename.csv"
                                    onClick={handleDownloadData}
                                >
                                    <AiOutlineDownload size={30} />
                                </a>
                            </div>
                            {/* <Button onClick={handleDownloadData}>Download</Button> */}
                        </div>
                        <div className="table_content">
                            <TableContainer component={Paper}>
                                <Table stickyHeader className="table_container" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Instagram Profiles</TableCell>
                                            <TableCell align="center">Followers</TableCell>
                                            <TableCell align="center">Engagement</TableCell>
                                            <TableCell align="center">Avg Like</TableCell>
                                            <TableCell align="center">Avg Comment</TableCell>
                                            <TableCell align="center">Avg Reach</TableCell>
                                            <TableCell align="center">City</TableCell>
                                            <TableCell align="center">Category</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            (rowsPerPage > 0
                                                ?
                                                filterFollowerClicked === true ?
                                                    followersRangeBasedInfluencers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    :
                                                    filterErClicked === true ?
                                                        erBasedInfluencers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                        :
                                                        filterCategoryClicked === true ?
                                                            categoryBasedInfluencers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                            :
                                                            showVerifiedInfluencers === true ?
                                                                verifiedInfluencers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                :
                                                                influencersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                : influencersData
                                            )
                                                .map((data, index) => (
                                                    <>
                                                        < TableRow key={index} >
                                                            <TableCell component="th" scope="row" key={data.username} onClick={() => redirectProfile(data)} >
                                                                <div>{data.full_name}</div>
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_followed_by.count)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_owner_to_timeline_media['edges'][0].er)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_likes)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_comment)}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {NFormatter(data.edge_felix_video_timeline['edges'][0].averageReelView)}
                                                            </TableCell>
                                                            <TableCell align="center">{data.city_name}</TableCell>
                                                            <TableCell align="center">{data.category_enum !== null ? data.category_enum.length > 10 ? (data.category_enum.substring(0, 15) + '...') : data.category_enum : null}</TableCell>
                                                            <TableCell key={index}>
                                                                <div className="btn_display">
                                                                    <img id={data.id} src={CostIcon} />
                                                                    <img id={data.id} onClick={() => { handleAddToListTable(data) }} src={ListIcon} />
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
                                                                    <img id={data.id} onClick={() => handleAddToCompare(data)} src={CompareIcon} />
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
                                                                                                {item.username} <span onClick={() => handleRemoveInfluencer(data)}><AiOutlineClose /></span>
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
                                                ))
                                        }
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                                rowsPerPageOptions={[7, 14, { label: 'All', value: -1 }]}
                                                colSpan={3}
                                                count={showVerifiedInfluencers === true ? verifiedInfluencers.length : filterErClicked === true ? erBasedInfluencers.length : filterCategoryClicked === true ? categoryBasedInfluencers.length : filterFollowerClicked === true ? followersRangeBasedInfluencers.length : influencersData.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                SelectProps={{
                                                    inputProps: {
                                                        'aria-label': 'Results per page',
                                                    },
                                                    native: true,
                                                }}
                                                onPageChange={handleChangePage}
                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                                ActionsComponent={TablePaginationActions}
                                            />
                                            {/* <BiFirstPage size={30} onClick={handleChangePageToFirst} className='pointer' />
                                            <BiLastPage size={30} className='pointer' /> */}
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InfluencersList