const User = require("../models/user");
const CsvParser = require("json2csv").Parser;
exports.downloadcsv = (req, res, next) => {
    User.find({}).then((objs) => {
        let data = [];
    
        objs.forEach((obj) => {
          const { ownerID } = obj;
          data.push({ ownerID });
        });
    
        const csvFields = ["OwnerID"];
        const csvParser = new CsvParser({ csvFields });
        const csvData = csvParser.parse(data);
    
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=info.csv");
    
        res.status(200).end(csvData);
      });
}