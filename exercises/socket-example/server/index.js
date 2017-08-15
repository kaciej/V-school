let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

//import socketio
let socketIO = require("socket.io");

const PORT = process.env.PORT || 9000;

//import routes
let chartRouter = require("./routes/vote-route.js");

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//setup endpoints
app.use("/chat", chatRouter);

let server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//make a new instance of socket.io called io
let io = socketIO(server);

io.on("connection", (scoket) => {
    console.log(`Client has connecte with ID of ${socket.id}`);
});