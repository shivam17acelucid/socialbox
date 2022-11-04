import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NFormatter from "../../Common/NumberFormatter/numFormatter";
import './influencerlists.scss';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { Modal, ModalBody, ModalHeader, FormGroup, Input } from "reactstrap";

const InfluencersList = () => {

    const [influencersData, setInfluencersData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [showVerifiedInfluencers, setShowVerifiedInfluencers] = useState(false);
    const [verifiedInfluencers, setVerifiedInfluencers] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [categoryBasedInfluencers, setCategoryBasedInfluencers] = useState([]);
    const [categoryFilterApplied, setCategoryFilterApplied] = useState(false)


    let { inputField } = useParams();
    let navigate = useNavigate();

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

    const filterCategory = () => {
        setCategoryFilterApplied(true)
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

    const openFollowersModal = () => {
    }

    const openCategoryModal = () => {
        const data = isOpen ? false : true;
        setOpen(data)
    }

    const openLocationModal = () => {

    }

    return (
        <div className="search_container">
            <div className="subcontainer">
                <div className="filter_bar">
                    <Button variant="outlined" onClick={openFollowersModal}>Followers</Button>
                    <Button variant="outlined" onClick={openCategoryModal}>Category</Button>
                    <Modal
                        isOpen={isOpen}
                    >
                        <ModalHeader>
                            Select Followers Range
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <FormGroup className="mb-4">
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
                                </FormGroup>
                            </form>
                        </ModalBody>
                    </Modal>
                    <Button variant="outlined" onClick={openLocationModal}>location</Button>
                    <Button variant="outlined" onClick={showVerified}>Registered influencers</Button>
                </div>
                <div className="table_content">
                    <TableContainer component={Paper}>
                        <Table stickyHeader className="table_container" >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Instagram Profiles</StyledTableCell>
                                    <StyledTableCell align="center">Followers</StyledTableCell>
                                    <StyledTableCell align="center">Engagement Rate</StyledTableCell>
                                    <StyledTableCell align="center">Average Like</StyledTableCell>
                                    <StyledTableCell align="center">Average Comment</StyledTableCell>
                                    <StyledTableCell align="center">Average Reach</StyledTableCell>
                                    <StyledTableCell align="center">City</StyledTableCell>
                                    <StyledTableCell align="center">Category</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    (rowsPerPage > 0
                                        ?
                                        categoryFilterApplied === true ?
                                            categoryBasedInfluencers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            :
                                            showVerifiedInfluencers === true ?
                                                verifiedInfluencers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                :
                                                influencersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : influencersData
                                    )
                                        .map((data) => (
                                            < StyledTableRow key={data.username} >
                                                <StyledTableCell component="th" scope="row" onClick={() => redirectProfile(data)}>
                                                    {/* <img crossOrigin="anonymous" src={data.profile_pic_url_hd} alt='' /> */}
                                                    {data.username}
                                                    <div>({data.full_name})</div>
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {NFormatter(data.edge_followed_by.count)}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {NFormatter(data.edge_owner_to_timeline_media['edges'][0].er)}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_likes)}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {NFormatter(data.edge_owner_to_timeline_media['edges'][0].avg_comment)}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {NFormatter(data.edge_felix_video_timeline['edges'][0].averageReelView)}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">{data.city_name}</StyledTableCell>
                                                <StyledTableCell align="center">{data.category_enum}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                }
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[6, 12, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={showVerifiedInfluencers === true ? verifiedInfluencers.length : categoryFilterApplied === true ? categoryBasedInfluencers.length : influencersData.length}
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
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div >
    )
}

export default InfluencersList