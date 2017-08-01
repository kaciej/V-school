let express = require("express");
let bountyRouter = express.Router();

//import models
let Bounty = require("../models/bounty.js");

//middleware to pull all queries in lowercase

bountyRouter.get("/", (req, res) => {
    Bounty.find(req.query, (error, data) => {
        if(error) {
             res.status(500).send({"message": "Error within Sever", error});
        }else if (data === null) {
          res.status(404).send({"error": "Not found"});
        } else {
            res.status(200).send({"message": "Sucess here is your data", data});
        }
    });
});

bountyRouter.get("/:id", (req, res) => {
   Bounty.findOne({"_id": req.params.id }, (error, data) => {
       if(error) {
            res.status(500).send({"message": "Error within Sever", error});
        }else if (data === null) {
            res.status(404).send({"error": "Not found"});
        } else {
            res.status(200).send({"message": "Sucess", data});
        } 
   });
});

bountyRouter.post("/", (req, res) => {
    let newBounty = new Bounty(req.body);
    newBounty.save((error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within sever", error});
        } else {
            res.status(201).send({"message": "It was created", data});
        }
    });
})

bountyRouter.delete("/:id", (req, res) => {
    Bounty.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within sever", error});
        } else if (data === null) {
          res.status(404).send({"Error": "Not found"});
        } else {
        res.status(200).send({"message": "Deleted Successful", data});
      } 
    })
})

bountyRouter.put("/:id", (req, res) => {
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within server", erro});
        } else if (data === null) {
            res.status(404).send({"message": "Not Found"});
        } else {
            res.status(200).send({"message": "Update Successful", data});
        }
    })
});

module.exports = bountyRouter;