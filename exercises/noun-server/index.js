//express is our web framework -> we make endpoints and add middleware
let express = require("express");
//bodyParser is a middleware that allows express to handle json
// and possibly other things
let bodyParser = require("body-parser");
//cors is a middle that allows us to share data from this server
// to others that are not from the same port or same ip
let cors = require("cors");

//import Routes
let placeRouter = require("./routes/place.js");

//make a new express app
let app = express();
const PORT = process.env.PORT || 8080;

//allows express to handle json as objects in req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//allows cross site resource sharing
app.use(cors());

//use our routes
app.use("/places", placeRouter);

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
})