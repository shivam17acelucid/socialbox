const Calculator = require('../../Models/calculator');

exports.setBasicFields = (req, res) => {
    let {
        budgetperFollowersRange,
        minFollowersRange,
        maxFollowersRange,
        creatorsCount,
        multipleForBudgetReach,
        multipleForBudgetLikesComment,
        reach,
        LikesComment,
    } = req.body;
    let reel = {};
    let post = {};
    let story = {};
    let igtv = {};
    let swipeupStory = {};
    let video = {};
    let nanoFollowers = {};

    if (minFollowersRange > 1000 && maxFollowersRange < 10000) {
        
    }

    Calculator.find()
        .then((data) => {
            res.json(data)
        })
}