let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let settings = require("./config/settings.js");

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

//import routes
let authRouter = require("./routes/auth.js");
let hotelRouter = require("./routes/hotel.js");

const PORT = process.env.PORT || settings.port;

let app = express();

app.use(cors());
//if using socket.io set extended to true
app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/hotel", hotelRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});