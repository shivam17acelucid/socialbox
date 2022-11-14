const CategorizedBasket = require('../../Models/categorised_basket');

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