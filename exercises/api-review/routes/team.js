const express = require("express");
const teamRoute = express.Router();
const uuid = require("uuid/v1");

let teams = [
    {
        _id: uuid(),
        name: "Jazz",
        location: "Salt Lake",
        sport: "basketball"
    }, {
        _id: uuid(),
        name: "Real Salt Lake",
        location: "Salt Lake",
        sport: "Soccer"
    }, {
        _id: uuid(),
        name: "Broncos",
        location: "Danver",
        sport: "Football"
    }
]

teamRoute
    .route("/")
    .get((req, res) => {
        //we want to send back the filtered array
        res.send(teams.filter((team) => {
            for (let key in req.query) {
                if (req.query[key] != team[key]) 
                    return false;
                } return true;
            }))
    })
    .post((req, res) => {
        //add new team to teams req.body is the teams
        let template = {
            name: "",
            location: "",
            sport: ""
        };
        for (let key in req.body) {
            //check if properties match
            if (!template.hasOwnProperty(key)) {
                continue;
            } else {
                template[key] = req.body[key]
            }
        }
        template._id = uuid();
        teams.push(template);
        res.status(200).send({message: "Post Sucessful"})
    })
teamRoute
    .route("/:id")
    .get((req, res) => {
        //find the team with a matching id
        for (let i = 0; i < teams.length; i++) {
            if (teams[i]._id === req.params.id) {
                res.status(200).send(teams[i]);
            }
        }
    })
    .delete((req, res) => {
        //find the team and splice it from the teams
        for(let i = 0; teams.length; i++){
            if (teams[i]._id === req.params.id){
                teams.splice(i, 1);
                res.status(200).send(teams[i]);
            }
        }
    })
    .put((req, res) => {
        for(let i = 0; teams.length; i++){
           if (teams[i]._id === req.params.id){
               for(let key in req.body){
                   if(teams[i].hasOwnProperty(key)){
                       teams[i][key] = req.body[key];
                   }
               }
           }
           return res.status(200).send({
               message: "Update Success"
           })
        }
    })

module.exports = teamRoute;