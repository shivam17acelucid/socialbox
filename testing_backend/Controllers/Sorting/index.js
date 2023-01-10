const InfluencersData = require('../Models/influencer_details');

exports.filterUsers = (req, res) => {
    let { username } = req.body;
    let filter = {};
    if (username != null) {
        filter = { $or: [{ full_name: { $regex: username, $options: 'i' } }, { username: { $regex: username, $options: 'i' } }, { category_enum: { $regex: username, $options: 'i' } }] }
    }
    InfluencersData.find(filter)
        .then((data) => {
            res.json(data.username)
        })
}