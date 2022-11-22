const InfluencersData = require('../Models/influencer_details');
const CsvParser = require("json2csv").Parser;
exports.downloadcsv = (req, res, next) => {
  InfluencersData.find({}).then((objs) => {
    let data = [];

    objs.forEach((obj) => {
      const { InstagramProfiles, Followers, Engagement, AvgLike, AvgComment, AvgReach, city_name, Category } = obj;
      data.push({ InstagramProfiles, Followers, Engagement, AvgLike, AvgComment, AvgReach, city_name, Category });
    });

    const csvFields = ["Instagram Profiles"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(data);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=info.csv");

    res.status(200).end(csvData);
  });
}