const fetch = require('node-fetch');
const User = require('../models/user');
const Username = require('../Models/username');
const ProfileData = require('../Models/profile_data');
const axios = require('axios');
const { downloadcsv } = require('./downloadcsv');
const URLENCODED_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
    // 'Cookie': 'sessionid='
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

exports.topsearch = async (req, res, next) => {
    let { query } = req.body;
    const url = `https://www.instagram.com/web/search/topsearch?query=${query}`;
    axios.get(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
            'Cookie': 'sessionid=55174935431:oUkeyOkjSTHOai:11:AYcCQRGAQW0_XSTcjaz7XHUgRoXj6weyCzi_8MCzew',
            // 'Cookie': 'sessionid=4254722113:8jQkarLtt6Z1wj:27:AYdZDexKTjHFIqPlMKx-vfND1fPhT1vP3FfU8Fii1g',   //working
            // 'Cookie': 'sessionid=1606001920:gScv2hwUIuRb82:21:AYevLdDnNu06Sv5fsj-r-Pm5NYjUL8ZNfHSGrPv3UQ',
        },
    }).then((res) => {
        // res.json()
        console.log(response)
    })
    // .then((data) => res.json(data));

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
                    item.follower_count > '10000' ?
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
                            console.log(response.data)
                            // res.status(200).json({
                            //     success: true,
                            //     data: response.data
                            // });
                            console.log([response.data['data']['user']])
                            ProfileData.insertMany([response.data['data']['user']])
                                .then((result) => {
                                    // res.json({
                                    //     success: 'true',
                                    //     result: response.data['data']['user']
                                    // })
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

// exports.influencer_list = (req, res, next) => {
//     let { username, follower_count, category_enum, full_name } = req.body;
//     // let query = {};
//     let filter = {};
//     if (username != null) {
//         filter.username = username;
//         // { username: { $regex: username, $options: 'i' } }
//     }
//     if (full_name != null) {
//         filter.full_name = full_name;
//     }
//     if (follower_count != null) {
//         filter.follower_count = follower_count;
//     }
//     if (category_enum != null) {
//         filter.category_enum = category_enum;
//     }
//     ProfileData.find(filter)
//         .then((data) => {
//             // console.log(data)
//             res.json({
//                 success: 'true',
//                 data
//             })
//         })
// }

exports.influencer_list = (req, res, next) => {
    let { username, followers, category, name } = req.query;
    let filter = {};
    if (username != null) {
        filter.username = new RegExp(username, 'i');
    }
    if (name != null) {
        filter.full_name = new RegExp(name, 'i');
    }
    if (followers != null) {
        filter = { edge_followed_by: { count: parseInt(followers) } }
    }
    if (category != null) {
        filter.category_enum = new RegExp(category, 'i');
    }
    ProfileData.find(filter)
        .then((data) => {
            console.log(filter)
            res.json({
                success: 'true',
                data
            })
        })
}
