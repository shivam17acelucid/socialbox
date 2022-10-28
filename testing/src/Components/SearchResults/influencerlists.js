import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './influencerlists.scss';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const InfluencersList = () => {

    const [influencersData, setInfluencersData] = useState([]);

    let { inputField } = useParams();

    const fetchProfiles = () => {
        let data = inputField;
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=${data}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        setInfluencersData(res)
                        console.log(res)
                    })
            })
    }

    useEffect(() => {
        fetchProfiles();
    }, []);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (
        <div className="search_container">
            <div className="subcontainer">
                <TableContainer component={Paper}>
                    <Table stickyHeader className="table_container" >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Instagram Profiles</StyledTableCell>
                                <StyledTableCell align="center">Followers</StyledTableCell>
                                <StyledTableCell align="center">Engagemen tRate</StyledTableCell>
                                <StyledTableCell align="center">Average Like & Comment</StyledTableCell>
                                <StyledTableCell align="center">City</StyledTableCell>
                                <StyledTableCell align="center">Category</StyledTableCell>
                                {/* <StyledTableCell align="center">Is Verified</StyledTableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {influencersData.map((data) => (
                                <StyledTableRow key={data.username}>
                                    <StyledTableCell component="th" scope="row">
                                        {data.username}
                                        <div>({data.full_name})</div>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{data.edge_followed_by.count}</StyledTableCell>
                                    <StyledTableCell align="center">Progress</StyledTableCell>
                                    <StyledTableCell align="center">Progress</StyledTableCell>
                                    <StyledTableCell align="center">Progress</StyledTableCell>
                                    <StyledTableCell align="center">{data.category_enum}</StyledTableCell>
                                    {/* <StyledTableCell align="center">{data.is_verified}</StyledTableCell> */}
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* <div className="subcontainer">
                {/* <div className="topbar">
                    <span className="topbar_header">
                        Instagram Profiles
                    </span>
                    <span className="topbar_header">
                        Followers
                    </span>
                    <span className="topbar_header">
                        Engagement Rate
                    </span>
                    <span className="topbar_header">
                        Average Like Comment
                    </span>
                    <span className="topbar_header">
                        City
                    </span>
                    <span className="topbar_header">
                        Category
                    </span>
                    <span className="topbar_header">
                        IsVerified
                    </span>
                </div> */}
            {/* <div className="searched_results"> */}
            {
                // influencersData.map(item => {
                // console.log(item.profile_pic_url_hd)
                // return (
                //     <div className="content_container">
                //         <div className="grid_container">
                //             <span className="grid_item">
                //                 {/* <span><img src={item.profile_pic_url_hd} /></span> */}
                //                 <span>{item.full_name}</span>
                //                 <span>{item.username}</span>
                //             </span>
                //             <span className="grid_item">{item.edge_followed_by.count}</span>
                //             <span className="grid_item">InProgress</span>
                //             <span className="grid_item">InProgress</span>
                //             <span className="grid_item">InProgress</span>
                //             <span className="grid_item">{item.category_enum}</span>
                //             {item.is_verified ? <span className="grid_item">True</span> : <span className="grid_item">False</span>}
                //         </div>
                //     </div>
                // )
                // })
            }
            {/* </div> */}
            {/* </div>  */}
        </div>
    )
}

export default InfluencersList