const Calculator = require('../../Models/calculator');

exports.setBasicFieldsForReel = (req, res) => {
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
    let nanoFollowers = {};
    let microFollowers = {};
    let midTierFollowers = {};
    let macroFollowers = {};
    let megaFollowers = {};

    if (minFollowersRange > 1000 && maxFollowersRange < 10000) {
        nanoFollowers.budgetperFollowersRange = budgetperFollowersRange;
        nanoFollowers.creatorsCount = creatorsCount;
        nanoFollowers.reach = reach;
        nanoFollowers.multipleForBudgetReach = multipleForBudgetReach;
        nanoFollowers.multipleForBudgetLikesComment = multipleForBudgetLikesComment;
        nanoFollowers.LikesComment = LikesComment;
    }

    if (minFollowersRange > 10000 && maxFollowersRange < 50000) {
        microFollowers.budgetperFollowersRange = budgetperFollowersRange;
        microFollowers.creatorsCount = creatorsCount;
        microFollowers.reach = reach;
        microFollowers.multipleForBudgetReach = multipleForBudgetReach;
        microFollowers.multipleForBudgetLikesComment = multipleForBudgetLikesComment;
        microFollowers.LikesComment = LikesComment;
    }

    Calculator.find()
        .then((data) => {
            res.json(data)
        })
}