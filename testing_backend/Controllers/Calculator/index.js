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
    let reel = {};

    nanoFollowers.budgetperFollowersRange = budgetperFollowersRange;
    nanoFollowers.creatorsCount = creatorsCount;
    nanoFollowers.multipleForBudgetReach = multipleForBudgetReach;
    nanoFollowers.multipleForBudgetLikesComment = multipleForBudgetLikesComment;
    nanoFollowers.reach = budgetperFollowersRange * multipleForBudgetReach;
    nanoFollowers.LikesComment = multipleForBudgetLikesComment * budgetperFollowersRange;

    budgetperFollowersRange = 3.5 * budgetperFollowersRange;
    multipleForBudgetReach = multipleForBudgetReach - multipleForBudgetReach * (10 / 100)
    multipleForBudgetLikesComment = multipleForBudgetLikesComment - multipleForBudgetLikesComment * (10 / 100);

    microFollowers.budgetperFollowersRange = budgetperFollowersRange;
    microFollowers.creatorsCount = creatorsCount;
    microFollowers.multipleForBudgetReach = multipleForBudgetReach;
    microFollowers.multipleForBudgetLikesComment = multipleForBudgetLikesComment;
    microFollowers.LikesComment = budgetperFollowersRange * multipleForBudgetLikesComment;
    microFollowers.reach = budgetperFollowersRange * multipleForBudgetReach;

    budgetperFollowersRange = 3.5 * microFollowers.budgetperFollowersRange;
    multipleForBudgetReach = microFollowers.multipleForBudgetReach - multipleForBudgetReach * (10 / 100)
    multipleForBudgetLikesComment = microFollowers.multipleForBudgetLikesComment - multipleForBudgetLikesComment * (10 / 100);

    midTierFollowers.budgetperFollowersRange = budgetperFollowersRange;
    midTierFollowers.creatorsCount = creatorsCount;
    midTierFollowers.multipleForBudgetReach = multipleForBudgetReach;
    midTierFollowers.multipleForBudgetLikesComment = multipleForBudgetLikesComment;
    midTierFollowers.LikesComment = multipleForBudgetLikesComment * budgetperFollowersRange;
    midTierFollowers.reach = multipleForBudgetReach * budgetperFollowersRange;

    budgetperFollowersRange = 3.5 * midTierFollowers.budgetperFollowersRange;
    multipleForBudgetReach = midTierFollowers.multipleForBudgetReach - multipleForBudgetReach * (10 / 100)
    multipleForBudgetLikesComment = midTierFollowers.multipleForBudgetLikesComment - multipleForBudgetLikesComment * (10 / 100);

    macroFollowers.budgetperFollowersRange = budgetperFollowersRange;
    macroFollowers.creatorsCount = creatorsCount;
    macroFollowers.multipleForBudgetReach = multipleForBudgetReach;
    macroFollowers.multipleForBudgetLikesComment = multipleForBudgetLikesComment
    macroFollowers.LikesComment = multipleForBudgetLikesComment * budgetperFollowersRange;
    macroFollowers.reach = multipleForBudgetReach * budgetperFollowersRange;

    budgetperFollowersRange = 3.5 * macroFollowers.budgetperFollowersRange;
    multipleForBudgetReach = macroFollowers.multipleForBudgetReach - multipleForBudgetReach * (10 / 100)
    multipleForBudgetLikesComment = macroFollowers.multipleForBudgetLikesComment - multipleForBudgetLikesComment * (10 / 100);

    megaFollowers.budgetperFollowersRange = budgetperFollowersRange;
    megaFollowers.creatorsCount = creatorsCount;
    megaFollowers.multipleForBudgetReach = multipleForBudgetReach;
    megaFollowers.multipleForBudgetLikesComment = multipleForBudgetLikesComment;
    megaFollowers.LikesComment = budgetperFollowersRange * multipleForBudgetLikesComment;
    megaFollowers.reach = multipleForBudgetReach * budgetperFollowersRange;

    res.json({ nanoFollowers, microFollowers, midTierFollowers, macroFollowers, megaFollowers });
}