const express = require("express");
const router = express.Router();
const { hashtag, username, topsearch, userID, profile } = require('../Controllers/testing');
const { uploadcsv, uploadCsv } = require('../Controllers/uploadcsv')
const { downloadcsv } = require("../controllers/downloadcsv");

router.get('/searchbyhashtag', hashtag)
router.get('/searchbyusername', username)
router.get('/searchtopusers', topsearch)
router.get('/getUsername', userID)
router.get('/getprofiledata', profile)
router.post("/upload-csv", uploadCsv, uploadcsv);
router.get("/downloadcsv", downloadcsv);
module.exports = router;
