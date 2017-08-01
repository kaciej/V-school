let express = require("express");
//make a mini express app called router
let bucketRouter = express.Router();
let uuid = require("uuid/v1")

let bucketList = [
    {
        name: "New Zealand",
        cost: 10000,
        activity: "See it all",
        img: "http://static1.squarespace.com/static/55dfd642e4b071fdb5c58d2d/t/55e067fee4b0edb1e41555a1/1440770046014/Venezia-tourism-guide.jpg",
        id: uuid()
    },
    {
        name: "Italy",
        cost: 300,
        activity: "See Rome",
        img: "http://static1.squarespace.com/static/55dfd642e4b071fdb5c58d2d/t/55e067fee4b0edb1e41555a1/1440770046014/Venezia-tourism-guide.jpg",
        id: uuid()
    },
    {
        name: "Mongolia",
        cost: 10000,
        activity: "experience the old world",
        img: "http://static1.squarespace.com/static/55dfd642e4b071fdb5c58d2d/t/55e067fee4b0edb1e41555a1/1440770046014/Venezia-tourism-guide.jpg",
        id: uuid()
    }
]

bucketRouter.get("/", (req, res) => {
    let search = bucketList.filter((place) => {
        for(let key in req.query) {
            if(req.query[key] != place[key]) return false
        }
        return true;
    })
    res.status(200).send({"message": "sucess here is your data", data: search});
});

bucketRouter.get("/:id", (req, res) => {
   //loop through the data array
   //find the object that has an ._id that matches req.params and return that object
   for(let i = 0; i < bucketList.length; i++){
       if(bucketList[i].id === req.params.id){
           res.status(200).send(bucketList[i]);
       }
   }return res.status(404).send({
       message: "ERROR NOT FOUND"
   })
})

bucketRouter.post("/", (req, res) => {
    let newbucketList = req.body;
    newbucketList.id = uuid();
    bucketList.push(newbucketList);
    res.status(200).send({"message": "success data was posted"})
})

bucketRouter.delete("/:id", (req, res) => {
    //loop through the data
    //find the matching onjects
    //splice it out of the array
    //send back confirmation message
    for(let i = 0; i < bucketList.length; i++){
        if(bucketList[i].id === req.params.id){
            bucketList.splice(i, 1);
            return res.status(200).send({
                message: "DELETE SUCCESFUL"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

bucketRouter.put("/:id", (req, res) => {
    //loop through the array
    for(let i = 0; i < bucketList.length; i++){
        //find the matching item in the array
        if(bucketList[i].id === req.params.id){
            //loop through each key in the request body(req.body)
            for(let key in req.body){
                //check if current item has a property name of key value
                if(bucketList[i].hasOwnProperty(key)) {
                    //set the key in the item to the new key
                    bucketList[i][key] = req.body[key];
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

module.exports = bucketRouter;