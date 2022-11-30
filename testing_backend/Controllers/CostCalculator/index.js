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
                if (!item.costFactorReel.influencerExactminTotalCost || !item.costFactorReel.influencerExactmaxTotalCost) {
                    minCostPerLike = minCostPerLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    minCostPerComment = minCostPerCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    maxCostperLike = maxCostperLikeForReel * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    maxCostperComment = maxCostperCommentForReel * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    let minCostPer1kFollowers = (minCostPer1kFollowersForReel / 1000) * item.edge_followed_by.count;
                    let maxCostPer1kFollowers = (maxCostper1KFollowersForReel / 1000) * item.edge_followed_by.count;
                    costFactor.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                    costFactor.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                    item.costFactorReel = costFactor;
                    item.save()
                    array.push(item)
                }
                else {
                    console.log(item.costFactorReel)
                }
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
                if (!item.costFactorPosts.influencerExactminTotalCost || !item.costFactorPosts.influencerExactmaxTotalCost) {
                    minCostPerLike = minCostPerLikeForPosts * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    minCostPerComment = minCostPerCommentForPosts * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    maxCostperLike = maxCostperLikeForPosts * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    maxCostperComment = maxCostperCommentForPosts * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    let minCostPer1kFollowers = (minCostPer1kFollowersForPosts / 1000) * item.edge_followed_by.count;
                    let maxCostPer1kFollowers = (maxCostper1KFollowersForPosts / 1000) * item.edge_followed_by.count;
                    costFactorPost.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                    costFactorPost.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                    item.costFactorPosts = costFactorPost;
                    item.save();
                    array.push(item)
                }
                else {
                    console.log(item.costFactorPosts)
                }
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
                if (!item.costFactorIgtv.influencerExactminTotalCost || !item.costFactorIgtv.influencerExactmaxTotalCost) {
                    minCostPerLike = minCostPerLikeForIgtv * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    minCostPerComment = minCostPerCommentForIgtv * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    maxCostperLike = maxCostperLikeForIgtv * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    maxCostperComment = maxCostperCommentForIgtv * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    let minCostPer1kFollowers = (minCostPer1kFollowersForIgtv / 1000) * item.edge_followed_by.count;
                    let maxCostPer1kFollowers = (maxCostper1KFollowersForIgtv / 1000) * item.edge_followed_by.count;
                    costFactorIgtv.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                    costFactorIgtv.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                    item.costFactorIgtv = costFactorIgtv;
                    item.save();
                    array.push(item)
                }
                else {
                    console.log(item.costFactorIgtv)
                }
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
                if (!item.costFactorStories.influencerExactminTotalCost || !item.costFactorStories.influencerExactmaxTotalCost) {
                    minCostPerLike = minCostPerLikeForStory * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    minCostPerComment = minCostPerCommentForStory * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    maxCostperLike = maxCostperLikeForStory * item.edge_owner_to_timeline_media.edges[0].avg_likes;
                    maxCostperComment = maxCostperCommentForStory * item.edge_owner_to_timeline_media.edges[0].avg_comment;
                    let minCostPer1kFollowers = (minCostPer1kFollowersForStory / 1000) * item.edge_followed_by.count;
                    let maxCostPer1kFollowers = (maxCostper1KFollowersForStory / 1000) * item.edge_followed_by.count;
                    costFactorStories.minTotalCost = minCostPer1kFollowers + minCostPerLike + minCostPerComment;
                    costFactorStories.maxTotalCost = maxCostPer1kFollowers + maxCostperLike + maxCostperComment;
                    item.costFactorStories = costFactorStories;
                    item.save();
                    array.push(item)
                }
                else {
                    console.log(item.costFactorStories)
                }
            })
            res.json(array);
        })

}

exports.setInfluencerCost = (req, res) => {
    let { username, minTotalPostCost, maxTotalPostCost, minTotalReelCost, maxTotalReelCost, minTotalIgtvCost, maxTotalIgtvCost, minTotalStoryCost, maxTotalStoryCost } = req.body;
    let costFactorPosts = {};
    let costFactorReel = {};
    let costFactorStories = {};
    let costFactorIgtv = {};

    if (minTotalPostCost) {
        costFactorPosts.influencerExactminTotalCost = minTotalPostCost;
    }
    if (maxTotalPostCost) {
        costFactorPosts.influencerExactmaxTotalCost = maxTotalPostCost;
    }
    if (minTotalReelCost) {
        costFactorReel.influencerExactminTotalCost = minTotalReelCost;
    }
    if (maxTotalReelCost) {
        costFactorReel.influencerExactmaxTotalCost = maxTotalReelCost;
    }
    if (minTotalStoryCost) {
        costFactorStories.influencerExactminTotalCost = minTotalStoryCost;
    }
    if (maxTotalStoryCost) {
        costFactorStories.influencerExactmaxTotalCost = maxTotalStoryCost;
    }
    if (minTotalIgtvCost) {
        costFactorIgtv.influencerExactminTotalCost = minTotalIgtvCost;
    }
    if (maxTotalIgtvCost) {
        costFactorIgtv.influencerExactmaxTotalCost = maxTotalIgtvCost;
    }

    InfluencersData.findOne({ username: username })
        .then((data) => {
            if (minTotalPostCost || maxTotalPostCost) {
                data.costFactorPosts = costFactorPosts;
            }
            if (minTotalIgtvCost || maxTotalIgtvCost) {
                data.costFactorIgtv = costFactorIgtv;
            }
            if (minTotalReelCost || maxTotalReelCost) {
                data.costFactorReel = costFactorReel;
            }
            if (minTotalStoryCost || maxTotalStoryCost) {
                data.costFactorStories = costFactorStories
            }
            data.save();
            res.json(data)
        })
}