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
                res.json(data)
            }
        })
}

exports.addInfluencersToBasket = (req, res) => {
    let { username, categoryName } = req.query;
    if (!username) {
        res.json("Username Not Given")
    }
    else {
        CategorizedBasket.find({ categoryName })
            .then((data) => {
                if (data) {
                    InfluencersData.find({ username: username })
                        .then((response) => {
                            data.basket = response;
                            res.json({response,data})
                            data.save();
                        })
                }
                else {
                    res.json("Category Not found")
                }
            })
    }
}