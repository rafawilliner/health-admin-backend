// environment variables
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();

const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:8080"
    //origin: "https://palaven.herokuapp.com"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Medicare App." });
});

require("./routes/benefitType.routes")(app);

module.exports = app;