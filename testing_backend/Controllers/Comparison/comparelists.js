const CategorizedBasket = require('../../Models/categorised_basket')

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