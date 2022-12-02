const CategorizedBasket = require('../../Models/categorised_basket');
const UserInfo = require('../../Models/user_info');

exports.compareCategorizedBaskets = (req, res) => {
    let { basket1, basket2, basket3 } = req.query;
    let filter = {};
    if (basket1) {
        filter = [
            { categoryName: new RegExp(basket1, 'i') },
        ]
    }
    if (basket2) {
        filter = [
            { categoryName: new RegExp(basket2, 'i') },
        ]
    }
    if (basket3) {
        filter = [
            { categoryName: new RegExp(basket3, 'i') },
        ]
    }

    if (basket1 && basket2) {
        filter = [
            { categoryName: new RegExp(basket1, 'i') },
            { categoryName: new RegExp(basket2, 'i') },
        ]
    }

    if (basket1 && basket3) {
        filter = [
            { categoryName: new RegExp(basket1, 'i') },
            { categoryName: new RegExp(basket3, 'i') },
        ]
    }

    if (basket2 && basket3) {
        filter = [
            { categoryName: new RegExp(basket2, 'i') },
            { categoryName: new RegExp(basket3, 'i') },
        ]
    }

    if (basket1 && basket2 && basket3) {
        filter = [
            { categoryName: new RegExp(basket1, 'i') },
            { categoryName: new RegExp(basket2, 'i') },
            { categoryName: new RegExp(basket3, 'i') },
        ]
    }

    CategorizedBasket.find({ $or: filter })
        .then((data) => {
            console.log(filter)
            res.json(data)
        })
}

exports.compareUsersLists = (req, res) => {
    let { lists } = req.query;
    let comparedArray = [];
    let finalArray = [];

    UserInfo.findById(req.params.id)
        .then((data) => {
            lists.forEach((elm) => {
                data.list.filter((item) => {
                    if (item.listName === elm) {
                        comparedArray.push(item)
                    }
                })
            })
            comparedArray.forEach((response) => {
                totalFollowers = 0;
                totalInfluencers = 0;
                totalEngagment = 0;
                totalAvgLike = 0;
                totalAvgComment = 0;
                totalReach = 0;
                totalCategory = [];
                totalInfluencers = response.influencersData.length;
                let listname = response.listName
                response.influencersData.forEach((dataa) => {
                    totalFollowers += dataa.edge_followed_by.count;
                    totalEngagment += dataa.edge_owner_to_timeline_media.edges[0].er / totalInfluencers;
                    totalAvgLike += dataa.edge_owner_to_timeline_media.edges[0].avg_likes / totalInfluencers;
                    totalAvgComment += dataa.edge_owner_to_timeline_media.edges[0].avg_comment / totalInfluencers;
                    totalReach += dataa.edge_felix_video_timeline.edges[0].totalReelView / totalInfluencers;
                    totalCategory.push(dataa.category_enum)
                })
                finalArray.push({ totalInfluencers: totalInfluencers, totalFollowers: totalFollowers, totalEngagment: totalEngagment, totalAvgLike: totalAvgLike, totalAvgComment: totalAvgComment, totalReach: totalReach, listName: listname, totalCategory: totalCategory })
            })
            res.json(finalArray)
        })
}