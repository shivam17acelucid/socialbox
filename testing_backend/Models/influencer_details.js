const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let influencersDataSchema = new Schema(
    {
        profile_pic_url_hd: {
            type: String,
        },
        username: {
            type: String,
            unique: true,
        },
        full_name: {
            type: String,
        },
        is_verified: {
            type: Boolean,
        },
        external_url: {
            type: String,
        },
        edge_followed_by: {
            type: Object,
        },
        edge_follow: {
            type: Object,
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
        is_business_account: {
            type: Boolean,
        },
        whatsapp_number: {
            type: Number,
        },
        business_contact_method: {
            type: String,
        },
        business_email: {
            type: String,
        },
        business_phone_number: {
            type: String,
        },
        business_category_name: {
            type: String,
        },
        overall_category_name: {
            type: String,
        },
        category_enum: {
            type: String,
        },
        edge_felix_video_timeline: {
            type: Object,
        },
        edge_owner_to_timeline_media: {
            type: Object,
        },
        edge_saved_media: {
            type: Object,
        },
        edge_media_collections: {
            type: Object,
        },
        cost: [{
            costFactor: {
                minCostPer1kFollowersForReel: Number,
                maxCostper1KFollowersForReel: Number,
                minCostPerLikeForReel: Number,
                maxCostperLikeForReel: Number,
                minCostPerCommentForReel: Number,
                maxCostperCommentForReel: Number,
                minCostPer1kFollowersForPosts: Number,
                maxCostper1KFollowersForPosts: Number,
                minCostPerLikeForPosts: Number,
                maxCostperLikeForPosts: Number,
                minCostPerCommentForPosts: Number,
                maxCostperCommentForPosts: Number,
                minCostPer1kFollowersForStory: Number,
                maxCostper1KFollowersForStory: Number,
                minCostPerLikeForStory: Number,
                maxCostperLikeForStory: Number,
                minCostPerCommentForStory: Number,
                maxCostperCommentForStory: Number,
                minCostPer1kFollowersForIgtv: Number,
                maxCostper1KFollowersForIgtv: Number,
                minCostPerLikeForIgtv: Number,
                maxCostperLikeForIgtv: Number,
                minCostPerCommentForIgtv: Number,
                maxCostperCommentForIgtv: Number,
            },
            reel: {
                minTotalCost: Number,
                maxTotalCost: Number,
            },
            post: {
                minTotalCost: Number,
                maxTotalCost: Number,
            },
            story: {
                minTotalCost: Number,
                maxTotalCost: Number,
            },
            igtv: {
                minTotalCost: Number,
                maxTotalCost: Number,
            },
        }],
    },
    {
        timestamps: true,
        collection: "InfluencersData",
    }
);
module.exports = mongoose.model("InfluencersData", influencersDataSchema);