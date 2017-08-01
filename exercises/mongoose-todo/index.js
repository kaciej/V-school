let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

//define port
const port = process.env.PORT || 8080;

//require routes
let todoRouter = require("./routes/todo-route.js");

//connect to database
mongoose.connect("mongodb://localhost:27017/todos");

//make the base app
let app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors
app.use(cors());

//use the routes
app.use("/todo", todoRouter);

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});