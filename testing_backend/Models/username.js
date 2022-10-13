const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let usernameSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        isVerified: {
            type: Boolean,
        },
        media_count: {
            type: Number,
        },
        follower_count: {
            type: Number,
        },
        following_count: {
            type: Number,
        },
        category: {
            type: String,
        },
        city_name: {
            type: String,
        },
        contact_phone_number: {
            type: Number,
        },
        public_email: {
            type: String,
        },
        public_phone_number: {
            type: Number,
        },
        is_business: {
            type: Boolean,
        },
        whatsapp_number: {
            type: Number,
        },
    },
    {
        timestamps: true,
        collection: "userIdSearchResponse",
    }
);
module.exports = mongoose.model("Username", usernameSchema);