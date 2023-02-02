const multer = require("multer");
const path = require("path");
const csv = require("csvtojson");
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const axios = require('axios');
const ProfileData = require('../../Models/profile_data');
const InfluencersData = require('../../Models/influencer_details');
const proxyArray = require('../../utils/proxiesArray');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../testing_backend/static/public");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const URLENCODED_HEADER = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
    'Cookie': 'sessionid=55174935431:oUkeyOkjSTHOai:11:AYcCQRGAQW0_XSTcjaz7XHUgRoXj6weyCzi_8MCzew'
}
const random_number = Math.floor(Math.random() * 10);

const uploads = multer({ storage: storage });
(module.exports.uploadData = uploads.single("csv")),
    (req, res, next) => {
        next();
    };
exports.uploadcreatorcsv = (req, res) => {
    const proxyAgent = new HttpsProxyAgent(`http://${proxyArray.proxyArray.list[random_number]}`)
    let str = '';
    let splitArr;
    csv()
        .fromFile(req.file.path)
        .then((csvData) => {
            csvData.forEach((data) => {
                if (data.handleName !== '') {
                    const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${data.handleName}`;
                    fetch(url, {
                        method: 'GET',
                        agent: proxyAgent,
                        headers: URLENCODED_HEADER,
                        mode: 'cors',
                    })
                        .then((response) => {
                            response.json()
                                .then((data) => {
                                    ProfileData.insertMany([data.data.user])
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
                // else {
                //     str = data.instagramhandlelink.substring(data.instagramhandlelink.indexOf('.com/') + 5);
                //     if (str.includes('?')) {
                //         splitArr = str.split('?')
                //         csvData.unshift({ username: splitArr[0] })
                //     }
                //     else if (str.includes('/')) {
                //         splitArr = str.split('/')
                //         csvData.unshift({ username: splitArr[0] })
                //     }
                //     const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${splitArr[0]}`;
                //     axios.get(url, {
                //         method: 'GET',
                //         agent: proxyAgent,
                //         headers: URLENCODED_HEADER,
                //         mode: 'cors',
                //     })
                //         .then((response) => {
                //             // res.status(200).json({
                //             //     success: true,
                //             //     data: response.data
                //             // });
                //             ProfileData.insertMany([response.data['data']['user']])
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
            })
            res.json('sucess')
        });
}

exports.updateCreatorsDetails = (req, res) => {
    csv()
        .fromFile(req.file.path)
        .then((csvData) => {
            csvData.forEach((elm) => {
                InfluencersData.findOne({ username: elm.handleName })
                    .select({ username: 1, city_name: 1, category_enum: 1, final_category: 1, gender: 1, contact: 1, final_email: 1, dob: 1 })
                    .then((data) => {
                        if (data) {
                            data.final_category = elm.category,
                                data.gender = elm.gender,
                                data.contact = elm.contact,
                                data.final_email = elm.email,
                                data.dob = elm.dob,
                                data.final_city = elm.city
                            data.save()
                        }

                    })
            })
            res.json('success')
        });
}

exports.testingproxies = (req, res) => {
    let { username } = req.body;
    const proxyAgent = new HttpsProxyAgent(`http://${proxyArray.proxyArray.list[random_number]}`)
    fetch(`https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
        {
            method: 'GET',
            agent: proxyAgent,
            headers: URLENCODED_HEADER,
            mode: 'cors',
        }
    )
        .then((response) => response.json())
        .then((data) => {
            if (data.data.user) {
                ProfileData.insertMany([data.data.user])
                    .then((result) => {
                        res.json({
                            success: 'true',
                            result: data.data.user
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })
}