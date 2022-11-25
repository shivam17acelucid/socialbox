const InfluencersData = require('../../Models/influencer_details');

exports.setCalculateCostForReel = (req, res) => {
    let { minCostPer1kFollowersForReel,
        maxCostper1KFollowersForReel,
        minCostPerLikeForReel,
        maxCostperLikeForReel,
        minCostPerCommentForReel,
        maxCostperCommentForReel,
    } = req.body;

    let costFactor = {};

    if (minCostPer1kFollowersForReel && maxCostper1KFollowersForReel) {
        costFactor.minCostPer1kFollowersForReel = minCostPer1kFollowersForReel;
        costFactor.maxCostper1KFollowersForReel = maxCostper1KFollowersForReel;
    }

    if (minCostPerLikeForReel && maxCostperLikeForReel && minCostPerCommentForReel && maxCostperCommentForReel) {
        costFactor.minCostPerLikeForReel = minCostPerLikeForReel;
        costFactor.maxCostperLikeForReel = maxCostperLikeForReel;
        costFactor.minCostPerCommentForReel = minCostPerCommentForReel;
        costFactor.maxCostperCommentForReel = maxCostperCommentForReel;
    }

    let array = [];

    InfluencersData.find()
        .then((data) => {
            data.forEach((item) => {
                item.cost.push({ costFactor: costFactor })
                array.push(item)
            })
            res.json(array);
        })
}

exports.setCalculateCostForPosts = (req, res) => {
    let { minCostPer1kFollowersForPosts,
        maxCostper1KFollowersForPosts,
        minCostPerLikeForPosts,
        maxCostperLikeForPosts,
        minCostPerCommentForPosts,
        maxCostperCommentForPosts,
    } = req.body;

    let costFactor = {};

    if (minCostPer1kFollowersForPosts && maxCostper1KFollowersForPosts) {
        costFactor.minCostPer1kFollowersForPosts = minCostPer1kFollowersForPosts;
        costFactor.maxCostper1KFollowersForPosts = maxCostper1KFollowersForPosts;
    }

    if (minCostPerLikeForPosts && maxCostperLikeForPosts && minCostPerCommentForPosts && maxCostperCommentForPosts) {
        costFactor.minCostPerLikeForPosts = minCostPerLikeForPosts;
        costFactor.maxCostperLikeForPosts = maxCostperLikeForPosts;
        costFactor.minCostPerCommentForPosts = minCostPerCommentForPosts;
        costFactor.maxCostperCommentForPosts = maxCostperCommentForPosts;
    }

    let array = [];

    InfluencersData.find()
        .then((data) => {
            data.forEach((item) => {
                item.cost.push({ costFactor: costFactor })
                array.push(item)
            })
            res.json(array);
        })

}

exports.setCalculateCostForIgtv = (req, res) => {
    let { minCostPer1kFollowersForIgtv,
        maxCostper1KFollowersForIgtv,
        minCostPerLikeForIgtv,
        maxCostperLikeForIgtv,
        minCostPerCommentForIgtv,
        maxCostperCommentForIgtv,
    } = req.body;
    let costFactor = {};

    if (minCostPer1kFollowersForIgtv && maxCostper1KFollowersForIgtv) {
        costFactor.minCostPer1kFollowersForIgtv = minCostPer1kFollowersForIgtv;
        costFactor.maxCostper1KFollowersForIgtv = maxCostper1KFollowersForIgtv;
    }

    if (minCostPerLikeForIgtv && maxCostperLikeForIgtv && minCostPerCommentForIgtv && maxCostperCommentForIgtv) {
        costFactor.minCostPerLikeForIgtv = minCostPerLikeForIgtv;
        costFactor.maxCostperLikeForIgtv = maxCostperLikeForIgtv;
        costFactor.minCostPerCommentForIgtv = minCostPerCommentForIgtv;
        costFactor.maxCostperCommentForIgtv = maxCostperCommentForIgtv;
    }

    let array = [];

    InfluencersData.find()
        .then((data) => {
            data.forEach((item) => {
                item.cost.push({ costFactor: costFactor })
                array.push(item)
            })
            res.json(array);
        })

}

exports.setCalculateCostForStories = (req, res) => {
    let { minCostPer1kFollowersForStory,
        maxCostper1KFollowersForStory,
        minCostPerLikeForStory,
        maxCostperLikeForStory,
        minCostPerCommentForStory,
        maxCostperCommentForStory,
    } = req.body;

    let costFactor = {};

    if (minCostPer1kFollowersForStory && maxCostper1KFollowersForStory) {
        costFactor.minCostPer1kFollowersForStory = minCostPer1kFollowersForStory;
        costFactor.maxCostper1KFollowersForStory = maxCostper1KFollowersForStory;
    }

    if (minCostPerLikeForStory && maxCostperLikeForStory && minCostPerCommentForStory && maxCostperCommentForStory) {
        costFactor.minCostPerLikeForStory = minCostPerLikeForStory;
        costFactor.maxCostperLikeForStory = maxCostperLikeForStory;
        costFactor.minCostPerCommentForStory = minCostPerCommentForStory;
        costFactor.maxCostperCommentForStory = maxCostperCommentForStory;
    }

    let array = [];

    InfluencersData.find()
        .then((data) => {
            data.forEach((item) => {
                item.cost.push({ costFactor: costFactor })
                array.push(item)
            })
            res.json(array);
        })

}