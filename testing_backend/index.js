const express = require("express");
const app = express();
const mongoSanitize = require("express-mongo-sanitize");
const mongoose = require("mongoose");
var bodyparser = require("body-parser");

var cors = require('cors')

require("dotenv").config();
const Route = require("./routes/public");
/* middleware */
app.use(bodyparser.json());
app.use(express.json());
app.use(mongoSanitize());
app.use(cors())
app.use("/", Route);
app.use("/uploads", express.static("./uploads"));

app.get('/', (req, res) => {
  res.send("Socialbox Backend")
})

/* mongodb connection */
mongoose
  .connect(process.env.DATABASE)
  .then(console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });

/* server */
const port = process.env.PORT;
app.listen(port, (req, res, next) => {
  console.log(`PORT is running on ${port}`);
});