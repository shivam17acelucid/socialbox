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
import { AiFillCaretDown, AiOutlineDownload } from 'react-icons/ai';
import { MdOutlineArrowDropUp, MdDelete } from 'react-icons/md';
import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import moment from "moment";
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


const InfluencersList = () => {

    const [influencersData, setInfluencersData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const [showVerifiedInfluencers, setShowVerifiedInfluencers] = useState(false);
    const [verifiedInfluencers, setVerifiedInfluencers] = useState([]);
    const [er, setEr] = useState('');
    const [category, setCategory] = useState('');
    const [minErRange, setMinErrange] = useState();
    const [maxErRange, setMaxErRange] = useState();
    const [categoryBasedInfluencers, setCategoryBasedInfluencers] = useState([]);
    const [erBasedInfluencers, setErBasedInfluencers] = useState([]);
    const [followersRangeBasedInfluencers, setFollowersRangeBasedInfluencers] = useState([]);
    const [isfilterFollowerClicked, setIsFilterFollowerClicked] = useState(false);
    const [isfilterCategoryClicked, setIsFilterCategoryClicked] = useState(false);
    const [isfilterErClicked, setIsFilterErClicked] = useState(false);
    const [filterFollowerClicked, setFilterFollowerClicked] = useState(false);
    const [filterCategoryClicked, setFilterCategoryClicked] = useState(false);
    const [filterErClicked, setFilterErClicked] = useState(false);
    const [minRange, setMinrange] = useState();
    const [maxRange, setMaxRange] = useState();
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

    const fetchProfiles = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=${inputField}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
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
        const url = `http://localhost:4000/getfilteredData?minFollowers=${minRange}&maxFollowers=${maxRange}`;
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
        const url = `http://localhost:4000/getErFilteredInfluencersData?minEr=${minErRange}&maxEr=${maxErRange}`;
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

    useEffect(() => {
        fetchProfiles();
        getListData();
    }, []);

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
        if (query.length > 2) {
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
                            className={index === suggestionIndex ? "active" : ""}
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
        const theme = useTheme();
        // const { count, page, rowsPerPage, onPageChange } = props;

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
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="previous page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }

    return (
        <div className="search_container">
            <div className="subcontainer">
                <div className="sidebar">
                    <Navbar />
                </div>
                <div className="search_content_list_panel">
                    <div className="middle_pane">
                        <div className="filter_bar">
                            <Button variant="outlined" onClick={handleFollowerFilterClicked}>Followers {isfilterFollowerClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={handleCategoryFilterClicked}>Category {isfilterCategoryClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={handleErFilterClicked}>Engagement Rate {isfilterErClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                            <Button variant="outlined" onClick={showVerified}>{showVerifiedInfluencers === true ? 'Back' : 'Registered influencers'}</Button>
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
                                            <TableCell align="center"></TableCell>
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
                                                                    <Button id={data.id}>Cost</Button>
                                                                    <Button id={data.id} onClick={() => { handleAddToListTable(data) }}>Add To List</Button>
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
                                                                    <Button id={data.id} onClick={() => handleAddToCompare(data)} >Compare</Button>
                                                                    {
                                                                        addToCompareClicked === true ?

                                                                            [data].map((item) =>
                                                                                item.username === addToCompareData ?
                                                                                    <div className="compare_section">
                                                                                        <div className="compare_headers">
                                                                                            Compare Influencers
                                                                                        </div>
                                                                                        <input
                                                                                            type="text"
                                                                                            value={value}
                                                                                            onChange={handleChange}
                                                                                        />
                                                                                        {suggestionsActive && <Suggestions />}
                                                                                        <div className="influencers_box">
                                                                                            <div>
                                                                                                {item.username} <span onClick={() => handleRemoveInfluencer(data)}><MdDelete /></span>
                                                                                            </div>
                                                                                            {
                                                                                                influencer.length > 0 ?
                                                                                                    console.log(influencer)
                                                                                                    // influencer.map((data) =>
                                                                                                    //     console.log(data)
                                                                                                    // )
                                                                                                    : null
                                                                                            }
                                                                                            <div onClick={() => setAddToCompareData('')}>
                                                                                                Remove All
                                                                                            </div>
                                                                                            <div>
                                                                                                Compare Now
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
                                                rowsPerPageOptions={[8, 16, { label: 'All', value: -1 }]}
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