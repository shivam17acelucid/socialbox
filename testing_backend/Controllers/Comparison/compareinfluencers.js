const InfluencersData = require('../../Models/influencer_details');
const UserInfo = require('../../Models/user_info');

exports.compareInfluencers = (req, res) => {
    let { influencer1name, influencer2name, influencer3name, influencer4name } = req.query;
    let errors = [];
    let filter = [];

    if (influencer1name && !influencer2name && !influencer3name && !influencer4name) {
        errors.push("Minimum 2 Influencers Required")
    }
    if (influencer2name && !influencer1name && !influencer3name && !influencer4name) {
        errors.push("Minimum 2 Influencers Required")
    }
    if (influencer3name && !influencer2name && !influencer1name && !influencer4name) {
        errors.push("Minimum 2 Influencers Required")
    }

    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }

    if (influencer1name && influencer2name) {
        filter = [
            { username: influencer1name },
            { username: influencer2name },
        ]
    }

    if (influencer1name && influencer3name) {
        filter = [
            { username: influencer1name },
            { username: influencer3name },
        ]
    }

    if (influencer2name && influencer3name) {
        filter = [
            { username: influencer2name },
            { username: influencer3name },
        ]
    }

    if (influencer1name && influencer2name && influencer3name) {
        filter = [
            { username: influencer1name },
            { username: influencer2name },
            { username: influencer3name },
        ]
    }

    if (influencer1name && influencer4name) {
        filter = [
            { username: influencer1name },
            { username: influencer3name },
        ]
    }
    
    if (influencer2name && influencer4name) {
        filter = [
            { username: influencer1name },
            { username: influencer3name },
        ]
    }

    if (influencer3name && influencer4name) {
        filter = [
            { username: influencer1name },
            { username: influencer3name },
        ]
    }

    if (influencer1name && influencer2name && influencer3name && influencer4name) {
        filter = [
            { username: influencer1name },
            { username: influencer2name },
            { username: influencer3name },
            { username: influencer4name },
        ]
    }

    // InfluencersData.find({ $and: [filter] })
    InfluencersData.find({ $or: filter })
        .then((data) => {
            console.log(filter)
            res.json(data)
        })
}  