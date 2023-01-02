const UserInfo = require('../Models/user_info');

exports.editProfile = (req, res, next) => {
    let { name, email, mobile, locality, city, state, pin, designation, comapny, website, instagramProfile, facebookProfile, linkedInProfile, landmark, building } = req.body;
    UserInfo.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })

}