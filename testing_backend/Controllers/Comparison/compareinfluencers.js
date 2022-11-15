const fetch = require('node-fetch');
const InfluencersData = require('../../Models/influencer_details');
const UserInfo = require('../../Models/user_info');
const axios = require('axios');
const jwt = require("jsonwebtoken");

exports.compareInfluencers = (req, res) => {
    let { influencer1name, influencer2name, influencer3name } = req.query;
    let filter = [];

    if (influencer1name) {
        filter = [
            { username: new RegExp(influencer1name, 'i') },
        ]
    }
    if (influencer2name) {
        filter = [
            { username: new RegExp(influencer2name, 'i') },
        ]
    }
    if (influencer3name) {
        filter = [
            { username: new RegExp(influencer3name, 'i') },
        ]
    }

    if (influencer1name && influencer2name) {
        filter = [
            { username: new RegExp(influencer1name, 'i') },
            { username: new RegExp(influencer2name, 'i') },
        ]
    }

    if (influencer1name && influencer3name) {
        filter = [
            { username: new RegExp(influencer1name, 'i') },
            { username: new RegExp(influencer3name, 'i') },
        ]
    }

    if (influencer2name && influencer3name) {
        filter = [
            { username: new RegExp(influencer2name, 'i') },
            { username: new RegExp(influencer3name, 'i') },
        ]
    }

    if (influencer1name && influencer2name && influencer3name) {
        filter = [
            { username: new RegExp(influencer1name, 'i') },
            { username: new RegExp(influencer2name, 'i') },
            { username: new RegExp(influencer3name, 'i') },
        ]
    }

    // InfluencersData.find({ $and: [filter] })
    InfluencersData.find({ $or: filter })
        .then((data) => {
            console.log(filter)
            res.json(data)
        })
}  