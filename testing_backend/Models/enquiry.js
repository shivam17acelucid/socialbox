const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let enquirySchema = new Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        collection: "enquiry",
    }
);
module.exports = mongoose.model("Enquiry", enquirySchema);