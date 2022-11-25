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
    let totalCost = {};

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
                item.cost.push({ costFactorReel: costFactor })
                totalCost.minTotalCost = 0;
                totalCost.maxTotalCost = 0;
                minCostPerLike = minCostPerLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                minCostPerComment = minCostPerCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                maxCostperLike = maxCostperLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                maxCostperComment = maxCostperCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                minCostPer1kFollowers = (minCostPer1kFollowersForReel / 1000) * item.edge_followed_by.count;
                maxCostPer1kFollowers = (maxCostper1KFollowersForReel / 1000) * item.edge_followed_by.count;
                totalCost.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                totalCost.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                item.cost.push({ reelCost: totalCost })
                // item.save()
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

    let costFactorPost = {};
    let totalCost = {};

    if (minCostPer1kFollowersForPosts && maxCostper1KFollowersForPosts) {
        costFactorPost.minCostPer1kFollowersForPosts = minCostPer1kFollowersForPosts;
        costFactorPost.maxCostper1KFollowersForPosts = maxCostper1KFollowersForPosts;
    }

    if (minCostPerLikeForPosts && maxCostperLikeForPosts && minCostPerCommentForPosts && maxCostperCommentForPosts) {
        costFactorPost.minCostPerLikeForPosts = minCostPerLikeForPosts;
        costFactorPost.maxCostperLikeForPosts = maxCostperLikeForPosts;
        costFactorPost.minCostPerCommentForPosts = minCostPerCommentForPosts;
        costFactorPost.maxCostperCommentForPosts = maxCostperCommentForPosts;
    }

    let array = [];

    InfluencersData.find()
        .then((data) => {
            data.forEach((item) => {
                item.cost.push({ costFactorPosts: costFactorPost })
                totalCost.minTotalCost = 0;
                totalCost.maxTotalCost = 0;
                minCostPerLike = minCostPerLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                minCostPerComment = minCostPerCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                maxCostperLike = maxCostperLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                maxCostperComment = maxCostperCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                minCostPer1kFollowers = (minCostPer1kFollowersForReel / 1000) * item.edge_followed_by.count;
                maxCostPer1kFollowers = (maxCostper1KFollowersForReel / 1000) * item.edge_followed_by.count;
                totalCost.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                totalCost.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                item.cost.push({ reelCost: totalCost })
                // item.save();
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

    let costFactorIgtv = {};
    let totalCost = {};

    if (minCostPer1kFollowersForIgtv && maxCostper1KFollowersForIgtv) {
        costFactorIgtv.minCostPer1kFollowersForIgtv = minCostPer1kFollowersForIgtv;
        costFactorIgtv.maxCostper1KFollowersForIgtv = maxCostper1KFollowersForIgtv;
    }

    if (minCostPerLikeForIgtv && maxCostperLikeForIgtv && minCostPerCommentForIgtv && maxCostperCommentForIgtv) {
        costFactorIgtv.minCostPerLikeForIgtv = minCostPerLikeForIgtv;
        costFactorIgtv.maxCostperLikeForIgtv = maxCostperLikeForIgtv;
        costFactorIgtv.minCostPerCommentForIgtv = minCostPerCommentForIgtv;
        costFactorIgtv.maxCostperCommentForIgtv = maxCostperCommentForIgtv;
    }

    let array = [];

    InfluencersData.find()
        .then((data) => {
            data.forEach((item) => {
                item.cost.push({ costFactorIgtv: costFactorIgtv })
                totalCost.minTotalCost = 0;
                totalCost.maxTotalCost = 0;
                minCostPerLike = minCostPerLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                minCostPerComment = minCostPerCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                maxCostperLike = maxCostperLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                maxCostperComment = maxCostperCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                minCostPer1kFollowers = (minCostPer1kFollowersForReel / 1000) * item.edge_followed_by.count;
                maxCostPer1kFollowers = (maxCostper1KFollowersForReel / 1000) * item.edge_followed_by.count;
                totalCost.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                totalCost.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                item.cost.push({ reelCost: totalCost })
                // item.save();
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

    let costFactorStories = {};
    let totalCost = {};

    if (minCostPer1kFollowersForStory && maxCostper1KFollowersForStory) {
        costFactorStories.minCostPer1kFollowersForStory = minCostPer1kFollowersForStory;
        costFactorStories.maxCostper1KFollowersForStory = maxCostper1KFollowersForStory;
    }

    if (minCostPerLikeForStory && maxCostperLikeForStory && minCostPerCommentForStory && maxCostperCommentForStory) {
        costFactorStories.minCostPerLikeForStory = minCostPerLikeForStory;
        costFactorStories.maxCostperLikeForStory = maxCostperLikeForStory;
        costFactorStories.minCostPerCommentForStory = minCostPerCommentForStory;
        costFactorStories.maxCostperCommentForStory = maxCostperCommentForStory;
    }

    let array = [];

    InfluencersData.find()
        .then((data) => {
            data.forEach((item) => {
                item.cost.push({ costFactorStories: costFactorStories })
                totalCost.minTotalCost = 0;
                totalCost.maxTotalCost = 0;
                minCostPerLike = minCostPerLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                minCostPerComment = minCostPerCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                maxCostperLike = maxCostperLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                maxCostperComment = maxCostperCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                minCostPer1kFollowers = (minCostPer1kFollowersForReel / 1000) * item.edge_followed_by.count;
                maxCostPer1kFollowers = (maxCostper1KFollowersForReel / 1000) * item.edge_followed_by.count;
                totalCost.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                totalCost.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                item.cost.push({ reelCost: totalCost })
                // item.save();
                array.push(item)
            })
            res.json(array);
        })

}