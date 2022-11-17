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
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import NFormatter from '../../Common/NumberFormatter/numFormatter';
import { useNavigate, useParams } from "react-router-dom";
import { MdAdd } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import { Input } from 'reactstrap';


function BasketInfluencers() {

    const [inputField, setInputField] = useState('');
    const [influencersData, setInfluencersData] = useState([]);
    const [addToListTableClicked, setAddToListTableClicked] = useState(false);
    const [listData, setListData] = useState([]);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    const [rowClickedData, setRowClickedData] = useState('');
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

    let navigate = useNavigate();
    let { categoryName } = useParams();
    const userId = localStorage.getItem('id');

    const searchInfluencers = () => {
        navigate(`/influencerslist/${inputField}`);
    }

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
        setFilterFollowerClicked(value => !value)
    };

    const handleCategoryFilterClicked = () => setFilterCategoryClicked(value => !value);

    const handleErFilterClicked = () => setFilterErClicked(value => !value);

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

    const filterCategory = () => {
        setFilterCategoryClicked(true)
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

    const filterByErRange = () => {
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

    useEffect(() => {
        fetchInfluencers();
        getListData();
    }, []);


    return (
        <div className='basket_influencers_container'>
            <Navbar />
            <div className='basket_influencers_container_content'>
                <div className='middle_pane_lists'>
                    <div className='list_headers'>
                        <input type='text' value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder={categoryName} className='input_search' />
                        <Button className='button_list' onClick={searchInfluencers}>Search</Button>
                    </div>
                    <div className='list_category_header'>
                        Top {categoryName} Influencers
                    </div>
                    <div className="filter_bar">
                        <Button variant="outlined" onClick={handleFollowerFilterClicked}>Followers {filterFollowerClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                        <Button variant="outlined" onClick={handleCategoryFilterClicked}>Category {filterCategoryClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                        <Button variant="outlined" onClick={handleErFilterClicked}>Engagement Rate {filterErClicked === true ? <MdOutlineArrowDropUp /> : <AiFillCaretDown />}</Button>
                        {
                            filterErClicked === true ?
                                <section className="modal_section">
                                    <div className="modal_option">
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
                                filterCategoryClicked === true ?
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
                                            <Button
                                                color="primary"
                                                onClick={filterCategory}
                                            >
                                                Filter
                                            </Button>
                                        </div>
                                    </section>
                                    :
                                    filterFollowerClicked === true ?
                                        <section className="modal_section">
                                            <div className="modal_option">
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
                                    {influencersData.map((item, index) =>
                                        <>
                                            {
                                                item.basket.map((data) =>
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
                                                )
                                            }
                                        </>
                                    )
                                    }
                                </TableBody>
                                {/* <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                        // rowsPerPageOptions={[8, 16, { label: 'All', value: -1 }]}
                                        // colSpan={3}
                                        // count={showVerifiedInfluencers === true ? verifiedInfluencers.length : locationFilterApplied === true ? locationBasedInfluencers.length : categoryFilterApplied === true ? categoryBasedInfluencers.length : followersFilterApplied === true ? followersRangeBasedInfluencers.length : influencersData.length}
                                        // rowsPerPage={rowsPerPage}
                                        // page={page}
                                        // SelectProps={{
                                        //     inputProps: {
                                        //         'aria-label': 'Results per page',
                                        //     },
                                        //     native: true,
                                        // }}
                                        // onPageChange={handleChangePage}
                                        // onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </TableRow>
                                </TableFooter> */}
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default BasketInfluencers