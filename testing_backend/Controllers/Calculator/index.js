const Calculator = require('../../Models/calculator');

exports.setBasicFieldsForReel = (req, res) => {
    let {
        budgetperFollowersRange,
        creatorsCount,
        multipleForBudgetReach,
        multipleForBudgetLikesComment,
    } = req.body;
    let nanoFollowers = {};
    let microFollowers = {};
    let midTierFollowers = {};
    let macroFollowers = {};
    let megaFollowers = {};
    let reel = {};
    let deliverableType = 'Reel';

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

    Calculator.findOne(reel)
        .then((data) => {
            if (data) {
                data.deliverableType = deliverableType,
                    data.reel = {
                        nanoFollowers: nanoFollowers,
                        microFollowers: microFollowers,
                        midTierFollowers: midTierFollowers,
                        macroFollowers: macroFollowers,
                        megaFollowers: megaFollowers,
                    }
                data.save()
                    .then((result) => {
                        res.json(result)
                    })
            }
            else {
                const cost = new Calculator({
                    deliverableType: deliverableType,
                    reel: {
                        nanoFollowers: nanoFollowers,
                        microFollowers: microFollowers,
                        midTierFollowers: midTierFollowers,
                        macroFollowers: macroFollowers,
                        megaFollowers: megaFollowers,
                    }
                })
                cost.save()
                    .then((data) => {
                        res.json(data)
                    })
            }
        })
}

exports.setBasicFieldsForPost = (req, res) => {
    let {
        budgetperFollowersRange,
        creatorsCount,
        multipleForBudgetReach,
        multipleForBudgetLikesComment,
    } = req.body;
    let nanoFollowers = {};
    let microFollowers = {};
    let midTierFollowers = {};
    let macroFollowers = {};
    let megaFollowers = {};
    let deliverableType = 'Post';
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
    let array = [];
    let array1 = [];

    Calculator.find()
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.deliverableType === 'Post') {
                        array1.push(item);
                    }
                })
                if (array1.length > 0) {
                    array1.forEach((item) => {
                        item.deliverableType = deliverableType,
                            item.post = {
                                nanoFollowers: nanoFollowers,
                                microFollowers: microFollowers,
                                midTierFollowers: midTierFollowers,
                                macroFollowers: macroFollowers,
                                megaFollowers: megaFollowers,
                            }
                        item.save()
                            .then((result) => {
                                array.push(result)
                            })
                    })
                }
                else if (array1.length === 0) {
                    const cost = new Calculator({
                        deliverableType: deliverableType,
                        post: {
                            nanoFollowers: nanoFollowers,
                            microFollowers: microFollowers,
                            midTierFollowers: midTierFollowers,
                            macroFollowers: macroFollowers,
                            megaFollowers: megaFollowers,
                        }
                    })
                    cost.save()
                        .then((data) => {
                            array.push(data)
                        })
                }
                res.json(array)
            }
        })
}

exports.setBasicFieldsForStories = (req, res) => {
    let {
        budgetperFollowersRange,
        creatorsCount,
        multipleForBudgetReach,
        multipleForBudgetLikesComment,
    } = req.body;

    let deliverableType = 'Story';
    let nanoFollowers = {};
    let microFollowers = {};
    let midTierFollowers = {};
    let macroFollowers = {};
    let megaFollowers = {};
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
    let array = [];
    let array1 = [];

    Calculator.find()
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.deliverableType === 'Story') {
                        array1.push(item);
                    }
                })
                if (array1.length > 0) {
                    array1.forEach((item) => {
                        item.deliverableType = deliverableType,
                            item.story = {
                                nanoFollowers: nanoFollowers,
                                microFollowers: microFollowers,
                                midTierFollowers: midTierFollowers,
                                macroFollowers: macroFollowers,
                                megaFollowers: megaFollowers,
                            }
                        item.save()
                            .then((result) => {
                                array.push(result)
                            })
                    })
                }
                else if (array1.length === 0) {
                    const cost = new Calculator({
                        deliverableType: deliverableType,
                        story: {
                            nanoFollowers: nanoFollowers,
                            microFollowers: microFollowers,
                            midTierFollowers: midTierFollowers,
                            macroFollowers: macroFollowers,
                            megaFollowers: megaFollowers,
                        }
                    })
                    cost.save()
                        .then((data) => {
                            array.push(data)
                        })
                }
                res.json(array)
            }
        })
}

exports.setBasicFieldsForSwipeUpStories = (req, res) => {
    let {
        budgetperFollowersRange,
        creatorsCount,
        multipleForBudgetReach,
        multipleForBudgetLikesComment,
    } = req.body;

    let deliverableType = 'Swipeup Story';
    let nanoFollowers = {};
    let microFollowers = {};
    let midTierFollowers = {};
    let macroFollowers = {};
    let megaFollowers = {};
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
    let array = [];
    let array1 = [];

    Calculator.find()
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.deliverableType === 'Swipeup Story') {
                        array1.push(item);
                    }
                })
                if (array1.length > 0) {
                    array1.forEach((item) => {
                        item.deliverableType = deliverableType,
                            item.swipeupStory = {
                                nanoFollowers: nanoFollowers,
                                microFollowers: microFollowers,
                                midTierFollowers: midTierFollowers,
                                macroFollowers: macroFollowers,
                                megaFollowers: megaFollowers,
                            }
                        item.save()
                            .then((result) => {
                                array.push(result)
                            })
                    })
                }
                else if (array1.length === 0) {
                    const cost = new Calculator({
                        deliverableType: deliverableType,
                        swipeupStory: {
                            nanoFollowers: nanoFollowers,
                            microFollowers: microFollowers,
                            midTierFollowers: midTierFollowers,
                            macroFollowers: macroFollowers,
                            megaFollowers: megaFollowers,
                        }
                    })
                    cost.save()
                        .then((data) => {
                            array.push(data)
                        })
                }
                res.json(array)
            }
        })
}

exports.setBasicFieldsForVideos = (req, res) => {
    let {
        budgetperFollowersRange,
        creatorsCount,
        multipleForBudgetReach,
        multipleForBudgetLikesComment,
    } = req.body;

    let deliverableType = 'Video';
    let nanoFollowers = {};
    let microFollowers = {};
    let midTierFollowers = {};
    let macroFollowers = {};
    let megaFollowers = {};
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
    let array = [];
    let array1 = [];

    Calculator.find()
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.deliverableType === 'Video') {
                        array1.push(item);
                    }
                })
                if (array1.length > 0) {
                    array1.forEach((item) => {
                        item.deliverableType = deliverableType,
                            item.video = {
                                nanoFollowers: nanoFollowers,
                                microFollowers: microFollowers,
                                midTierFollowers: midTierFollowers,
                                macroFollowers: macroFollowers,
                                megaFollowers: megaFollowers,
                            }
                        item.save()
                            .then((result) => {
                                array.push(result)
                            })
                    })
                }
                else if (array1.length === 0) {
                    const cost = new Calculator({
                        deliverableType: deliverableType,
                        video: {
                            nanoFollowers: nanoFollowers,
                            microFollowers: microFollowers,
                            midTierFollowers: midTierFollowers,
                            macroFollowers: macroFollowers,
                            megaFollowers: megaFollowers,
                        }
                    })
                    cost.save()
                        .then((data) => {
                            array.push(data)
                        })
                }
                res.json(array)
            }
        })
}

exports.setBasicFieldsForIgtv = (req, res) => {
    let {
        budgetperFollowersRange,
        creatorsCount,
        multipleForBudgetReach,
        multipleForBudgetLikesComment,
    } = req.body;

    let deliverableType = 'Igtv';
    let nanoFollowers = {};
    let microFollowers = {};
    let midTierFollowers = {};
    let macroFollowers = {};
    let megaFollowers = {};
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
    let array = [];
    let array1 = [];

    Calculator.find()
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.deliverableType === 'Igtv') {
                        array1.push(item);
                    }
                })
                if (array1.length > 0) {
                    array1.forEach((item) => {
                        item.deliverableType = deliverableType,
                            item.igtv = {
                                nanoFollowers: nanoFollowers,
                                microFollowers: microFollowers,
                                midTierFollowers: midTierFollowers,
                                macroFollowers: macroFollowers,
                                megaFollowers: megaFollowers,
                            }
                        item.save()
                            .then((result) => {
                                array.push(result)
                            })
                    })
                }
                else if (array1.length === 0) {
                    const cost = new Calculator({
                        deliverableType: deliverableType,
                        igtv: {
                            nanoFollowers: nanoFollowers,
                            microFollowers: microFollowers,
                            midTierFollowers: midTierFollowers,
                            macroFollowers: macroFollowers,
                            megaFollowers: megaFollowers,
                        }
                    })
                    cost.save()
                        .then((data) => {
                            array.push(data)
                        })
                }
                res.json(array)
            }
        })
}

exports.calculateBudget = (req, res) => {
    let { followersRange, creatorsCount } = req.query;
    let reelBudget = 0;
    let postBudget = 0;
    let storyBudget = 0;
    let swipeUpBudget = 0;
    let igtvBudget = 0;
    let videoBudget = 0;

    Calculator.find()
        .then((data) => {
            data.forEach((item) => {
                if (item.deliverableType === 'Reel') {
                    if (followersRange === 'Nano') {
                        reelBudget = creatorsCount * item.reel.nanoFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Micro') {
                        reelBudget = creatorsCount * item.reel.microFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mid-Tier') {
                        reelBudget = creatorsCount * item.reel.midTierFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Macro') {
                        reelBudget = creatorsCount * item.reel.macroFollowers.budgetperFollowersRange
                    }

                    else if (followersRange === 'Mega') {
                        reelBudget = creatorsCount * item.reel.megaFollowers.budgetperFollowersRange
                    }

                }
                else if (item.deliverableType === 'Post') {
                    if (followersRange === 'Nano') {
                        postBudget = creatorsCount * item.nanoFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Micro') {
                        postBudget = creatorsCount * item.microFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mid-Tier') {
                        postBudget = creatorsCount * item.midTierFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Macro') {
                        postBudget = creatorsCount * item.macroFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mega') {
                        postBudget = creatorsCount * item.megaFollowers.budgetperFollowersRange
                    }
                }
                else if (item.deliverableType === 'Story') {
                    if (followersRange === 'Nano') {
                        storyBudget = creatorsCount * item.nanoFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Micro') {
                        storyBudget = creatorsCount * item.microFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mid-Tier') {
                        storyBudget = creatorsCount * item.midTierFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Macro') {
                        storyBudget = creatorsCount * item.macroFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mega') {
                        storyBudget = creatorsCount * item.megaFollowers.budgetperFollowersRange
                    }
                }
                else if (item.deliverableType === 'Swipeup Story') {
                    if (followersRange === 'Nano') {
                        swipeUpBudget = creatorsCount * item.nanoFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Micro') {
                        swipeUpBudget = creatorsCount * item.microFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mid-Tier') {
                        swipeUpBudget = creatorsCount * item.midTierFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Macro') {
                        swipeUpBudget = creatorsCount * item.macroFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mega') {
                        swipeUpBudget = creatorsCount * item.megaFollowers.budgetperFollowersRange
                    }
                }
                else if (item.deliverableType === 'Igtv') {
                    if (followersRange === 'Nano') {
                        igtvBudget = creatorsCount * item.nanoFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Micro') {
                        igtvBudget = creatorsCount * item.microFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mid-Tier') {
                        igtvBudget = creatorsCount * item.midTierFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Macro') {
                        igtvBudget = creatorsCount * item.macroFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mega') {
                        igtvBudget = creatorsCount * item.megaFollowers.budgetperFollowersRange
                    }
                }
                else if (item.deliverableType === 'Video') {
                    if (followersRange === 'Nano') {
                        videoBudget = creatorsCount * item.nanoFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Micro') {
                        videoBudget = creatorsCount * item.microFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mid-Tier') {
                        videoBudget = creatorsCount * item.midTierFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Macro') {
                        videoBudget = creatorsCount * item.macroFollowers.budgetperFollowersRange
                    }
                    else if (followersRange === 'Mega') {
                        videoBudget = creatorsCount * item.megaFollowers.budgetperFollowersRange
                    }
                }
            })
            res.json({ reelBudget, postBudget, storyBudget, swipeUpBudget, igtvBudget, videoBudget })
        })

}