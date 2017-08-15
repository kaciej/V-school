let express = require("express");
let chatRouter = express.Router();

//import model
let Chat = require("../model/chat.js");

chatRouter.get("/", (req, res) => {
    Chat.find({}, (error, data) => {
        if(error) {
            res.status(500),send({"message": "Internal error", error});
        } else {
            res.status(200).send({"message": "Sucess here's the data", data})
        }
    });
});

module.exports = chatRouter;