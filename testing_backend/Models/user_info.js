const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userinfoSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      index: true, unique: true, sparse: true,
    },
    password: {
      type: String,

      minlength: 8,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superAdmin"],
    },
    token: {
      type: String,
    },
    status: {
      type: Boolean,
      default: 1,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    phone: {
      type: String,
      trim: true,
    },
    list: [{
      listName: String,
      deliverables: Array,
      influencersData: Array,
      deletedInfluencers: Array,
      createdAT: { type: Date, default: Date.now(), index: { expiresIn: 300 } }
    }],
    date: {
      type: Date,
    },
    image: {
      type: String,
    },
    otp: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now(), index: { expiresIn: 300 } },
    source: { type: String },
  },
  {
    timestamps: true,
    collection: "users",
  }
);
module.exports = mongoose.model("UserInfo", userinfoSchema);
