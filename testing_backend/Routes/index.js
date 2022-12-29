const express = require("express");
const router = express.Router();
const { hashtag, username, topsearch, userID, profile, influencer_list, influencer_search, testinnng, getInfluencersDetails, filteredInfluencersData, createList, getListData, addInfluencersToList, showInfluencersInList, filteredByErInfluencersData, deleteInfluencersFromList, editDeliverables, deleteList, getUserDetails, getFilteredResults } = require('../Controllers/testing');
const { uploadcsv, uploadCsv } = require('../Controllers/uploadcsv')
const { downloadcsv } = require("../controllers/downloadcsv");
const { signup, login, logout } = require('../Controllers/Authentication/user')
const { compareInfluencers } = require('../Controllers/Comparison/compareinfluencers');
const { createCategorizedBasket, showCategorizedBasket, addInfluencersToBasket, showBasketInfluencers, filtered_basket_list, followersfilteredBasketData, erfilteredBasketData, addImageToBasket, upload } = require('../Controllers/Baskets/index');
const { compareCategorizedBaskets, compareUsersLists } = require('../Controllers/Comparison/comparelists')
const { setCalculateCostForReel, setCalculateCostForPosts, setCalculateCostForStories, setCalculateCostForIgtv, setInfluencerCost, setCalculateCostForSwipeupStories, setCalculateCostForVideos } = require('../Controllers/CostCalculator/index');
const rolehandler = require("../controllers/rolehandler");
const { submitQuery } = require('../Controllers/enquiry');
const { setBasicFieldsForReel, setBasicFieldsForPost, setBasicFieldsForStories, setBasicFieldsForSwipeUpStories, setBasicFieldsForVideos, setBasicFieldsForIgtv, calculateBudget } = require('../Controllers/Calculator/index');


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
router.get('/getErFilteredInfluencersData', filteredByErInfluencersData)
router.get('/getUserDetails/:id', getUserDetails);
router.get('/getFilteredResults', getFilteredResults)
router.post('/createList/:id', createList)
router.post('/editDeliverables/:id', editDeliverables);
router.get('/getListData/:id', getListData)
router.put('/deleteInfluencersFromList/:id', deleteInfluencersFromList)
router.post('/addInfluencersToList/:id', addInfluencersToList)
router.get('/showInfluencersList/:id', showInfluencersInList);
router.get('/compareInfluencers', compareInfluencers);
router.put('/deleteList/:id', deleteList);
router.get('/compareCategorizedBaskets', compareCategorizedBaskets);
router.get('/compareUsersLists/:id', compareUsersLists);
router.post('/createCategorizedBasket', rolehandler.grantAccess("create", "categorizedInfluencers"), createCategorizedBasket);
router.post('/addImageToBasket', upload, addImageToBasket)
router.post('/addInfluencersToBasket', rolehandler.grantAccess("update", "categorizedInfluencers"), addInfluencersToBasket);
router.get('/showCategorizedBasket', showCategorizedBasket);
router.get('/showBasketInfluencers', showBasketInfluencers);
router.get('/filtered_basket_list', filtered_basket_list);
router.get('/followersfilteredBasketData', followersfilteredBasketData);
router.post('/setCalculateCostForReel', setCalculateCostForReel);
router.post('/setCalculateCostForPosts', setCalculateCostForPosts);
router.post('/setCalculateCostForStories', setCalculateCostForStories);
router.post('/setCalculateCostForIgtv', setCalculateCostForIgtv);
router.post('/setCalculateCostForSwipeupStories', setCalculateCostForSwipeupStories);
router.post('/setCalculateCostForVideos', setCalculateCostForVideos);
router.put('/setInfluencerCost', setInfluencerCost);
router.get('/erfilteredBasketData', erfilteredBasketData);
router.post("/upload-csv", uploadCsv, uploadcsv);
router.get("/downloadcsv", downloadcsv);
router.post('/submitQuery', submitQuery);
router.post('/setBasicFieldsForReel', setBasicFieldsForReel)
router.post('/setBasicFieldsForPost', setBasicFieldsForPost)
router.post('/setBasicFieldsForStories', setBasicFieldsForStories)
router.post('/setBasicFieldsForIgtv', setBasicFieldsForIgtv)
router.post('/setBasicFieldsForSwipeUpStories', setBasicFieldsForSwipeUpStories)
router.post('/setBasicFieldsForVideos', setBasicFieldsForVideos)
router.get('/calculateBudget', calculateBudget)
module.exports = router;
