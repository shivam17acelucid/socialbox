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
            .then((res) => res.json())
            .then((result) => {
                setInfluencersData(result)
            })
    }

    const redirectProfile = (data) => {
        navigate(`/profile/${data.username}`)
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
                                                        <TableCell align="center">{data.category_enum}</TableCell>
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