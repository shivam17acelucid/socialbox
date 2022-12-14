const InfluencersData = require('../../Models/influencer_details');

exports.filterUsers = (req, res) => {
    let { username } = req.query;
    let filter = {};
    if (username != null) {
        filter = { $or: [{ full_name: { $regex: username, $options: 'i' } }, { username: { $regex: username, $options: 'i' } }, { category_enum: { $regex: username, $options: 'i' } }] }
    }
    InfluencersData.find(filter)
        .select({ username: 1, _id: 0 })
        .then((data) => {
            res.json(data)
        })
}