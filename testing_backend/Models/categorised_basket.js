const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let categorisedBasketSchema = new Schema(
    {
        categoryName: {
            type: String,
            unique: true,
        },
        basket: {
            type: Array,
        },
    },
    {
        timestamps: true,
        collection: "Categorized_Baskets",
    }
);
module.exports = mongoose.model("CategorizedBasket", categorisedBasketSchema);
