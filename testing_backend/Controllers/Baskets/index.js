const CategorizedBasket = require('../../Models/categorised_basket');
const InfluencersData = require('../../Models/influencer_details');

exports.createCategorizedBasket = (req, res) => {
    let { categoryName } = req.body;

    CategorizedBasket.findOne({ categoryName: categoryName })
        .then((data) => {
            if (data) {
                res.json("Basket Already Present")
            }
            else {
                const categorizedBasket = new CategorizedBasket({
                    categoryName: categoryName,
                })
                categorizedBasket.save()
                    .then((response) => {
                        res.status(200).json(response)
                    })
            }
        })

}

exports.showCategorizedBasket = (req, res) => {
    CategorizedBasket.find()
        .then((data) => {
            if (!data) {
                res.json("No Basket Present")
            }
            else {
                data.forEach((item) => {
                    item.basketInfluencersCount = item.basket.length
                })
                res.json(data)
            }
        })
}

exports.addInfluencersToBasket = (req, res) => {
    let { username, categoryName } = req.body;
    if (!username) {
        res.json("Username Not Given")
    }
    else {
        InfluencersData.find({ username: username })
            .then((data) => {
                if (data) {
                    CategorizedBasket.findOne({ categoryName: categoryName })
                        .then((response) => {
                            if (response) {
                                response.basket.push(data[0]);
                                res.json(response)
                                response.save();
                            }
                            else {
                                res.json("Category Not Found")
                            }
                        })
                }
                else {
                    res.json("User Not found")
                }
            })
    }
}

exports.showBasketInfluencers = (req, res) => {
    let { categoryName } = req.query;

    CategorizedBasket.find({ categoryName })
        .then((data) => {
            res.json(data)
        })
}
