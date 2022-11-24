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
    let { list1Name, list2Name, list3Name, list4Name } = req.query;
    let errors = [];
    let filter = [];

    if (list1Name && !list2Name && !list3Name && !list4Name) {
        errors.push("Minimum 2 Lists Required")
    }
    if (list2Name && !list1Name && !list3Name && !list4Name) {
        errors.push("Minimum 2 Lists Required")
    }
    if (list3Name && !list2Name && !list1Name && !list4Name) {
        errors.push("Minimum 2 Lists Required")
    }

    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }

    if (list1Name && list2Name) {
        filter = [
            { listName: list1Name },
            { listName: list2Name },
        ]
    }

    if (list1Name && list3Name) {
        filter = [
            { listName: list1Name },
            { listName: list3Name },
        ]
    }

    if (list2Name && list3Name) {
        filter = [
            { listName: list2Name },
            { listName: list3Name },
        ]
    }

    if (list1Name && list2Name && list3Name) {
        filter = [
            { listName: list1Name },
            { listName: list2Name },
            { listName: list3Name },
        ]
    }

    if (list1Name && list4Name) {
        filter = [
            { listName: list1Name },
            { listName: list3Name },
        ]
    }

    if (list2Name && list4Name) {
        filter = [
            { listName: list1Name },
            { listName: list3Name },
        ]
    }

    if (list3Name && list4Name) {
        filter = [
            { listName: list1Name },
            { listName: list3Name },
        ]
    }

    if (list1Name && list2Name && list3Name && list4Name) {
        filter = [
            { listName: list1Name },
            { listName: list2Name },
            { listName: list3Name },
            { listName: list4Name },
        ]
    }

    let totalInfluencers = 0;
    let totalFollowers = 0;
    let totalCategory = [];
    let totalEngagment = 0;
    let totalAvgLike = 0;
    let totalAvgComment = 0;
    let totalReach = 0;
    let finalArray = [];


    UserInfo.findById(req.params.id)
        .then((data) => {
            data.list.forEach((item) => {
                if (item.listName === list1Name || list2Name || list3Name || list4Name) {
                    filter.forEach((data) => {
                        if (data.listName === item.listName) {
                            filter = [];
                        }
                    })
                    filter.push(item);
                    [item].forEach((response) => {
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
                }
            })
            res.json(finalArray)
        })
}