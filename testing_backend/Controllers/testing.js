const fetch = require('node-fetch');
const User = require('../models/user');
const Username = require('../Models/username');
const ProfileData = require('../Models/profile_data');
const InfluencersData = require('../Models/influencer_details');
const UserInfo = require('../Models/user_info');
const Testing = require('../Models/testing')
const axios = require('axios');

const URLENCODED_HEADER = {
    'Accept': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
    'Cookie': 'sessionid=55174935431:oUkeyOkjSTHOai:11:AYcCQRGAQW0_XSTcjaz7XHUgRoXj6weyCzi_8MCzew'
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

// exports.topsearch = async (req, res, next) => {
//     let { query } = req.body;
//     const url = `https://www.instagram.com/web/search/topsearch?query=${query}`;
//     axios.get(url, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
//             'Cookie': 'sessionid=55174935431:oUkeyOkjSTHOai:11:AYcCQRGAQW0_XSTcjaz7XHUgRoXj6weyCzi_8MCzew',
//             // 'Cookie': 'sessionid=4254722113:8jQkarLtt6Z1wj:27:AYdZDexKTjHFIqPlMKx-vfND1fPhT1vP3FfU8Fii1g',   //working
//             // 'Cookie': 'sessionid=1606001920:gScv2hwUIuRb82:21:AYevLdDnNu06Sv5fsj-r-Pm5NYjUL8ZNfHSGrPv3UQ',
//         },
//     }).then((res) => {
//         // res.json()
//         console.log(response)
//     })
//     // .then((data) => res.json(data));

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
                    item.follower_count > '2700000' ?
                        bigAccount.push(item)
                        : null
                })
                bigAccount.forEach((item) => {
                    console.log(item.username)
                    const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${item.username}`;
                    axios.get(url, {
                        method: 'GET',
                        headers: URLENCODED_HEADER,
                        mode: 'cors',
                    })
                        .then((response) => {
                            res.status(200).json({
                                success: true,
                                data: response.data
                            });
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
    let { category, location } = req.query;
    let filter = {};
    if (category != null) {
        filter.category_enum = new RegExp(category, 'i');
    }
    if (location != null) {
        filter.city_name = new RegExp(location, 'i');
    }
    InfluencersData.find(filter)
        .then((data) => {
            console.log(filter)
            res.json(data)
        })
}

exports.influencer_search = (req, res, next) => {
    var filter = {}
    let { inputField } = req.query;
    if (inputField != null) {
        filter = { $or: [{ full_name: { $regex: inputField, $options: 'i' } }, { username: { $regex: inputField, $options: 'i' } }, { category_enum: { $regex: inputField, $options: 'i' } }] }
    }
    let flag = [];

    InfluencersData.find(filter)
        .then((data) => {
            flag.push(data)
            if (flag[0].length > 0) {
                res.json(data)
            }
            else {
                InfluencersData.find()
                    .then((data) => {
                        res.json(data)
                    })
            }
        })
}

// exports.testinnng = (req, res) => {
//     const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=thesocialbox`;
//     axios.get(url, {
//         method: 'GET',
//         headers: URLENCODED_HEADER,
//         mode: 'cors',
//     })
//         .then((response) => {
//             res.status(200).json({
//                 success: true,
//                 data: response.data
//             });
//             Testing.insertMany([response.data['data']['user']])
//                 .then((result) => {
//                     // res.json({
//                     //     success: 'true',
//                     //     result: response.data['data']['user']
//                     // })
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         })
// }

exports.filteredInfluencersData = (req, res) => {
    let { minFollowers, maxFollowers } = req.query;
    let filter = [];
    let array = [];
    if (minFollowers != 0 && maxFollowers != 0) {
    }
    InfluencersData.find()
        .then((data) => {
            array.push(data)
            array.forEach((data) => {
                data.forEach((response) => {
                    if (response.edge_followed_by.count > minFollowers && response.edge_followed_by.count < maxFollowers) {
                        filter.push(response)
                    }
                })
                res.json(filter)
            })
        })
}
exports.filteredByErInfluencersData = (req, res) => {
    let { minEr, maxEr } = req.query;
    let filter = [];
    let array = [];
    if (minEr != 0 && maxEr != 0) {
    }
    InfluencersData.find()
        .then((data) => {
            array.push(data)
            array.forEach((data) => {
                data.forEach((response) => {
                    if (response.edge_owner_to_timeline_media.edges[0].er > minEr && response.edge_owner_to_timeline_media.edges[0].er < maxEr) {
                        filter.push(response)
                    }
                })
                res.json(filter)
            })
        })
}

exports.getInfluencersDetails = (req, res) => {
    ProfileData.find()
        .then((result) => {
            let avg_likes = 0;
            let avg_comment = 0;
            let engagementRate = 0;
            let noOfPosts = [];
            let array = [];
            let city_name = '';
            result.forEach((data) => {
                let edges = data.edge_felix_video_timeline.edges;
                let averageReelView = 0;
                edges.forEach((res) => {
                    averageReelView += Math.trunc(res.node.video_view_count / 12);
                })
                avg_likes = 0;
                avg_comment = 0;
                noOfPosts = data.edge_owner_to_timeline_media.edges;
                noOfPosts.forEach((item) => {
                    avg_likes += Math.trunc(item.node.edge_liked_by.count / 12);
                    avg_comment += Math.trunc(item.node.edge_media_to_comment.count / 12);
                    engagementRate = (data.edge_followed_by.count / (avg_likes + avg_comment)) / 100;
                    engagementRate = Math.round(engagementRate * 100) / 100
                });
                noOfPosts.unshift({ avg_likes: avg_likes, er: engagementRate, avg_comment: avg_comment })
                edges.unshift({ averageReelView: averageReelView })
                array.push(data)
            })
            array.forEach((item) => {
                Username.find({ follower_count: { $gte: 5000 } })
                    .then((result) => {
                        result.forEach((data) => {
                            if (data.username.includes(item.username)) {
                                city_name = data.city_name;
                            }
                        })
                        item.city_name = city_name;
                        InfluencersData.insertMany([item])
                            .then((result) => {
                                res.json({
                                    result
                                })
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
            })
        })
}

exports.createList = (req, res, next) => {
    let { listName, reel, staticPost, video, story, swipeStory, igtv } = req.body;
    let errors = [];
    let error1 = [];
    let response = [];
    if (!listName) {
        errors.push('Please fill list name');
        return res.status(422).json({ errors: errors });
    }

    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }

    UserInfo.findByIdAndUpdate(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(401).json({
                    error: "You need to be logged in to access this route",
                });
            }

            data.list.forEach((item) => {
                if (item.listName === listName) {
                    error1.push(item.listName)

                }
            });

            if (error1.length > 0) {
                return res.json("List name Already Present")
            }
            else {
                data.list.push({ listName: listName, deliverables: [{ reel: reel }, { staticPost: staticPost }, { video: video }, { story: story }, { swipeStory: swipeStory }, { igtv: igtv }] })
                data.save();
                res.json(data)
            }
        });
}

exports.getListData = (req, res) => {
    UserInfo.findById(req.params.id).then((data) => {
        if (!data)
            return res.status(401).json({
                error: "You need to be logged in to access this route",
            });
        else {
            res.json(data.list)
        }
    });
}

exports.addInfluencersToList = (req, res) => {
    let errors = [];
    UserInfo.findById(req.params.id)
        .then((data) => {
            data.list.forEach((item) => {
                if (item.listName === req.query.list) {
                    InfluencersData.find({ username: req.query.username })
                        .then((result) => {
                            item.influencersData.forEach((response) => {
                                if (response.username === req.query.username) {
                                    errors.push(response.username)
                                }
                            })
                            if (errors.length > 0) {
                                return res.json("Data Already Present")
                            }
                            else {
                                let listInfluencersData = item.influencersData.push(result[0])
                                res.json(item.influencersData)
                                data.save();
                            }
                        })
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.showInfluencersInList = (req, res) => {
    let response = [];
    UserInfo.findById(req.params.id)
        .then((data) => {
            data.list.forEach((item) => {
                if (item.listName === req.query.list) {
                    response.push({ influencers_count: item.influencersData.length, item })
                }
            })

            return res.status(200).json(response)
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.deleteInfluencersFromList = (req, res) => {
    let filter = [];
    let { listname, username } = req.body;
    UserInfo.findById(req.params.id)
        .then((data) => {
            data.list.forEach((item) => {
                if (item.listName === listname) {
                    filter.push(item)
                }
            });
            filter[0].influencersData.forEach((result) => {
                if (result.username === username) {
                    // filter[0].deletedInfluencers.push(result)
                    for (var i = filter[0].influencersData.length - 1; i >= 0; --i) {
                        if (filter[0].influencersData[i].username == username) {
                            filter[0].influencersData.splice(i, 1);
                        }
                    }
                    // filter[0].influencersData.splice(filter[0].influencersData.findIndex((username) => username), 1)
                }
            })
            data.save();
            res.json(filter[0].influencersData)
        })
        .catch((err) => {
            console.log(err)
        })
}