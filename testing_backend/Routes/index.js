const express = require("express");
const router = express.Router();
const { hashtag, username, topsearch, userID, profile, influencer_list, influencer_search, testinnng, getInfluencersDetails, filteredInfluencersData, createList, getListData, addInfluencersToList, showInfluencersInList } = require('../Controllers/testing');
const { uploadcsv, uploadCsv } = require('../Controllers/uploadcsv')
const { downloadcsv } = require("../controllers/downloadcsv");
const { signup, login, logout } = require('../Controllers/Authentication/user')
const { compareInfluencers, comapreInfluencers } = require('../Controllers/Comparison/compareinfluencers');


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get('/searchbyhashtag', hashtag)
router.get('/searchbyusername', username)
// router.get('/searchtopusers', topsearch)
router.get('/getUsername', userID)
router.get('/getInfluencersDetails', getInfluencersDetails);
router.get('/getfilteredData', filteredInfluencersData);
// router.get('/testing', testinnng)
router.get('/getprofiledata', profile)
router.get('/getinfluencerdata', influencer_list)
router.get('/getrelatedinfluencers', influencer_search)
router.post('/createList/:id', createList)
router.get('/getListData/:id', getListData)
router.post('/addInfluencersToList/:id', addInfluencersToList)
router.get('/showInfluencersList/:id', showInfluencersInList);
router.get('/compareInfluencers', comapreInfluencers);
router.post("/upload-csv", uploadCsv, uploadcsv);
router.get("/downloadcsv", downloadcsv);
module.exports = router;
