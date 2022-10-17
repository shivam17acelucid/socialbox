const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let profileDataSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        isVerified: {
            type: Boolean,
        },
        profile_pic_url: {

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
        total_igtv_videos: {
            type: Number,
        },
        total_clips_count: {
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
        collection: "usernameSearchResponse",
    }
);
module.exports = mongoose.model("ProfileData", profileDataSchema);