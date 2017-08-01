const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const teamRoute = require("./routes/team.js");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/teams", teamRoute);

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})