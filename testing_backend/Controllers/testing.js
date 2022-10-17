const fetch = require('node-fetch');
const User = require('../models/user');
const axios = require('axios');
const Username = require('../Models/username');
const URLENCODED_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
    'Cookie': 'sessionid=55174935431:7Ykalju35sgFpv:11:AYfuxayu4UAofW7KVeeuEF-sf5NBNTwj5T5s8H7_1Q'
}
const TAG_API_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
}

exports.hashtag = (req, res, next) => {
    let max_id = '';
    let second_url = '';
    let id_array = [];
    let { tagname } = req.body;
    const url = `https://i.instagram.com/api/v1/tags/logged_out_web_info/?tag_name=${tagname}`;
    const fetchuntilEnd_cursor_empty = (second_url) => {
        fetch(second_url, {
            method: 'GET',
            headers: TAG_API_HEADER,
            mode: 'cors'
        }).then((response) => response.json())
            .then((data) => {
                let ids = data['data']['hashtag']['edge_hashtag_to_media']['edges'];
                ids.forEach(element => {
                    id_array.push({ ownerID: element.node.owner.id })
                })
                User.insertMany(id_array)
                    .then((result) => {
                        // res.json({
                        //     success: 'true',
                        //     result
                        // })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                if (data['data']['hashtag']['edge_hashtag_to_media']['page_info'].has_next_page === true) {
                    max_id = data['data']['hashtag']['edge_hashtag_to_media']['page_info'].end_cursor;
                    let url_change = `https://i.instagram.com/api/v1/tags/logged_out_web_info/?tag_name=${tagname}&max_id=${max_id}`;
                    fetchuntilEnd_cursor_empty(url_change);
                }
            })
    }
    fetch(url, {
        method: 'GET',
        headers: TAG_API_HEADER,
        mode: 'cors'
    }).then((response) => response.json())
        .then((data) => {
            let abc = data['data']['hashtag']['edge_hashtag_to_media']['edges'];
            let arr = [];
            abc.forEach(element => {
                arr.push({ ownerID: element.node.owner.id });
            });
            User.insertMany(arr)
                .then((result) => {
                    // res.json({
                    //     success: 'true',
                    //     result
                    // })
                    console.log(result)
                })
                .catch((err) => {
                    console.log(err)
                })
            if (data['data']['hashtag']['edge_hashtag_to_media']['page_info'].has_next_page === true) {
                max_id = data['data']['hashtag']['edge_hashtag_to_media']['page_info'].end_cursor;
                second_url = `https://i.instagram.com/api/v1/tags/logged_out_web_info/?tag_name=${tagname}&max_id=${max_id}`;
                fetchuntilEnd_cursor_empty(second_url);
            }
        });
}

exports.username = (req, res, next) => {
    let { username } = req.body;
    const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
    fetch(url, {
        method: 'GET',
        headers: URLENCODED_HEADER,
        mode: 'cors'
    }).then((res) => res.json())
        .then((data) => res.json(data));
}

exports.topsearch = async (req, res, next) => {
    let { query } = req.body;
    const url = `https://www.instagram.com/web/search/topsearch?query=${query}`;
    fetch(url, {
        method: 'GET',
        headers: URLENCODED_HEADER,
        // redirect: 'follow',
        // follow: 20,
    }).then((res) => res.json())
        .then((data) => res.json(data));
}
// exports.topsearch = (req, res) => {
//     const id = req.query.id;
//     const url = `https://www.instagram.com/web/search/topsearch?query=${id}`;
//     const response = axios.get(url, {
//         headers: URLENCODED_HEADER
//     })
//         .then((data) => {
//             console.log(data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

// }

exports.userID = (req, res, next) => {
    let { ownerID } = req.query;
    let filter = {};
    if (ownerID != null) {
        filter.ownerID = ownerID;
    }
    let arr = [];
    User.find(filter)
        .then((response) => {
            response.forEach((item) => {
                arr.push(item.ownerID)
            })
            arr.forEach((item) => {
                const url = `https://i.instagram.com/api/v1/users/${item}/info/`;
                fetch(url, {
                    method: 'GET',
                    headers: URLENCODED_HEADER,
                    mode: 'cors'
                }).then((response) => response.json())
                    .then((data) => {
                        console.log(data.user)
                        Username.insertMany([data.user])
                            .then((result) => {
                                res.status(200).json({
                                    success: 'true',
                                    data: result
                                })
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    });
            })
        })
        .catch((err) => {
            console.log(err)
        })
    // let { ownerId } = req.body;
}

exports.profile = (req, res, next) => {
    Username.find()
        .then((response) => {
            let each_object = response;
            let bigAccount = [];
            let arr = [];
            each_object.forEach((item) => {
                arr.push({ follower_count: item.follower_count, username: item.username });
            })
            {
                arr.forEach(item => {
                    item.follower_count > '10000' ?
                        bigAccount.push(item)
                        : null
                })
                bigAccount.forEach((item) => {
                    console.log(item.username)
                    // const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${item.username}`;
                    // fetch(url, {
                    //     method: 'GET',
                    //     headers: URLENCODED_HEADER,
                    // }).then((response) => response.json())
                    //     .then((data) => {
                    //         res.json(data)
                    //         console.log(data)
                    //     });
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}