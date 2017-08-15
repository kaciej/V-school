let express = require("express");
let markerRouter = express.Router();

//import models
let Marker = require("../models/marker.js");

//GET
markerRouter.get("/", (req ,res) => {
    Marker.find({}, (error, data) => {
        if(error){
          res.status(500).send({"message": "Error within server", error}) ;
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
         } else {
          res.status(200).send({"message": "Here's your markers", data});
        }
    });
});

//Post
markerRouter.post("/", (req, res) => {
    let newMarker = new Marker(req.body);
    newMarker.save((error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within Server", error});
        } else {
            res.status(201).send({"message": "It was Created", data});
        }
    });
});

//PUT
markerRouter.put("/:id", (req, res) => {
    Marker.findOneAndUpdate({"_id": req.params.id}, {$set: req.body}, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within Server"});
        } else {
            res.status(200).send({"message": "It was Created", data});
        }
    });
});

//Delete
markerRouter.delete("/:id", (req, res) => {
    Marker.findByIdAndRemove({"_id": req.params.id}, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within server", error});
        } else if (data === null) {
            res.status(404).send({"error": "Not found"});
        } else {
            res.status(200).send({"message": "Delete Successful", data});
      } 
    });
});

module.exports = markerRouter;