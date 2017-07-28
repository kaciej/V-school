let express = require("express");
//make a mini express app called router
let placeRouter = express.Router();
let uuid = require("uuid/v1")

let places = [
    {
        name: "New Zealand",
        price: 10000,
        distance: "bazillion miles",
        ranking: "first",
        id: uuid()
    },
    {
        name: "Italy",
        price: 300,
        distance: "over the pond",
        ranking: "fourth",
        id: uuid()
    },
    {
        name: "Mongolia",
        price: 10000,
        distance: "bazillion miles",
        ranking: "second",
        id: uuid()
    }
]

placeRouter.get("/", (req, res) => {
    let search = places.filter((place) => {
        for(let key in req.query) {
            if(req.query[key] != place[key]) return false
        }
        return true;
    })
    res.status(200).send({"message": "sucess here is your data", data: search});
});

placeRouter.get("/:id", (req, res) => {
   //loop through the data array
   //find the object that has an ._id that matches req.params and return that object
   for(let i = 0; i < places.length; i++){
       if(places[i].id === req.params.id){
           res.status(200).send(places[i]);
       }
   }return res.status(404).send({
       message: "ERROR NOT FOUND"
   })
})

placeRouter.post("/", (req, res) => {
    let newPlaces = req.body;
    newPlaces.id = uuid();
    places.push(newPlaces);
    res.status(200).send({"message": "success data was posted"})
})

placeRouter.delete("/:id", (req, res) => {
    //loop through the data
    //find the matching onjects
    //splice it out of the array
    //send back confirmation message
    for(let i = 0; i < places.length; i++){
        if(places[i].id === req.params.id){
            places.splice(i, 1);
            return res.status(200).send({
                message: "DELETE SUCCESFUL"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

placeRouter.put("/:id", (req, res) => {
    //loop through the array
    for(let i = 0; i < places.length; i++){
        //find the matching item in the array
        if(places[i] === req.params.id){
            //loop through each key in the request body(req.body)
            for(let key in req.body){
                //check if current item has a property name of key value
                if(places[i].hasOwnProperty(key)) {
                    //set the key in the item to the new key
                    places[i][key] = req.body[key];
                }
            }
             return res.status(200).send({
                message: "UPDATED ITEM"
            })
        };
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

module.exports = placeRouter;