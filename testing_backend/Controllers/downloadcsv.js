const InfluencersData = require('../Models/influencer_details');
const CsvParser = require("json2csv").Parser;
exports.downloadcsv = (req, res, next) => {
  let Followers;
  InfluencersData.find({}).then((objs) => {
    let data = [];
    // objs.forEach((data) => {
    //   Followers = data.edge_followed_by.count;
    //   const
    // })

    objs.forEach((obj) => {
      Followers = edge_followed_by.count;
      const { username, Followers, er, avg_likes, avg_comment, avg_reach, city_name, category_enum } = obj;
      data.push({ username, Followers, er, avg_likes, avg_comment, avg_reach, city_name, category_enum });
    });

    const csvFields = ["Instagram Profiles"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(data);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=info.csv");

    res.status(200).end(csvData);
  });
}