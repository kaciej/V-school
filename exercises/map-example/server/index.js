let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/map-example");

const PORT = process.env.PORT || 9000;

let markerRouter = require("./routes/marker.js");

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/marker", markerRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});