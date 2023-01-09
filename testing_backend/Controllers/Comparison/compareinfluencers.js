const InfluencersData = require('../../Models/influencer_details');
const UserInfo = require('../../Models/user_info');

exports.compareInfluencers = (req, res) => {
    let { influencers } = req.query;
    let array = [];
    InfluencersData.find()
        .then((data) => {
            influencers.forEach((item) => {
                data.filter((el) => {
                    if (el.username === item) {
                        array.push(el)
                    }
                })
            })
            res.json(array)
        })

}  