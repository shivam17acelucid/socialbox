const fetch = require('node-fetch');
const User = require('../models/user');
const Username = require('../Models/username');
const ProfileData = require('../Models/profile_data');
const axios = require('axios')
const URLENCODED_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
    // 'Cookie': 'sessionid=55174935431:x8JvcGYu82tJ6d:28:AYfI627ANegNpG_tFchbkKqtxROQAlXVXdeR9Xi4Sg',
    'Cookie': 'sessionid=4254722113:8jQkarLtt6Z1wj:27:AYdZDexKTjHFIqPlMKx-vfND1fPhT1vP3FfU8Fii1g',
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
                        res.json({
                            success: 'true',
                            result
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                if (data['data']['hashtag']['edge_hashtag_to_media']['page_info'].has_next_page === true) {
                    max_id = data['data']['hashtag']['edge_hashtag_to_media']['page_info'].end_cursor;
                    let url_change = `https://i.instagram.com/api/v1/tags/logged_out_web_info/?tag_name=${tagname}&max_id=${max_id}`;
                    fetchuntilEnd_cursor_empty(url_change);
                }

                ids = id_array = [];
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
            abc = arr = [];
        });
}

exports.username = (req, res, next) => {
    let { username } = req.body;
    const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
    axios.get(url, {
        method: 'GET',
        headers: URLENCODED_HEADER,
        mode: 'cors'
    }).then((response) => {
        res.status(200).json({
            success: true,
            data: response.data
        });
        console.log(response.data)
    })
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
                    // headers: TAG_API_HEADER,
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
}

exports.profile = (req, res, next) => {
    Username.find()
        .then((response) => {
            let bigAccount = [];
            let arr = [];
            response.forEach((item) => {
                arr.push({ follower_count: item.follower_count, username: item.username });
            })
            {
                arr.forEach(item => {
                    item.follower_count > '2000000' ?
                        bigAccount.push(item)
                        : null
                })
                console.log(bigAccount)
                bigAccount.forEach((item) => {
                const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${item.username}`;
                axios.get(url, {
                    method: 'GET',
                    headers: URLENCODED_HEADER,
                    mode: 'cors',
                })
                    .then((response) => {
                        // res.status(200).json({
                        //     success: true,
                        //     data: response.data
                        // });
                        console.log([response.data['data']['user']])
                         ProfileData.insertMany([response.data['data']['user']])
                                .then((result) => {
                                    res.json({
                                        success: 'true',
                                        result
                                    })
                                })
                                .catch((err) => {
                                    console.log(err)
                                })
                    })
                })
            }

        })
        .catch((err) => {
            console.log(err)
        })
}