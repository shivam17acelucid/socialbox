const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let categorisedBasketSchema = new Schema(
    {
        categoryName: {
            type: String,
            unique: true,
        },
        basket: [{
            influencersData: Array,
            createdAT: { type: Date, default: Date.now(), index: { expiresIn: 300 } }
        }],
    },
    {
        timestamps: true,
        collection: "Categorized_Baskets",
    }
);
module.exports = mongoose.model("CategorizedBasket", categorisedBasketSchema);
