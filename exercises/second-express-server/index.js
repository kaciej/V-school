let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

//get routes
let bountyRouter = require("./routes/bounty.js");

//connect to database
mongoose.connect("mongodb://localhost:27017/bounty");

let app = express();
const PORT = process.env.PORT || 8080;


//allows express to handle json as objects in req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//allows cross site resource sharing
app.use(cors());

//use routes
app.use("/bounty", bountyRouter);

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
});