const fetch = require('node-fetch');
const InfluencersData = require('../../Models/influencer_details');
const UserInfo = require('../../Models/user_info');
const axios = require('axios');
const jwt = require("jsonwebtoken");

exports.comapreInfluencers = (req, res) => {
    let { influencer1name, influencer2name, influencer3name } = req.body;
    let errors = [];
    if (!influencer1name) {
        errors.push('Minimum 2 Influencers Name Required to Compare');
    }

    if (!influencer2name) {
        errors.push('Minimum 2 Influencers Name Required');
    }

    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }

    InfluencersData.find({ $or: [{ username: influencer1name }, { username: influencer2name }, { username: influencer3name }] })
        .then((data) => {
            res.json(data)
        })
}   