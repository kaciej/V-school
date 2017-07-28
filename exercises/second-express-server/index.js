let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let uuid = require("uuid/v1");

let app = express();
const PORT = process.env.PORT || 8080;

let bountyArr = [
    {
        id: uuid(),
        name: "Edward Cullin",
        location: "tree house",
        price: 60,
        wantedAlive: "yes"
    },
    {
        id: uuid(),
        name: "Bella Cullen",
        location: "tree house",
        price: 1000,
        wantedAlive: "No"  
    },
     {
        id: uuid(),
        name: "Micheal Jackson",
        location: "wonderland",
        price: 2000,
        wantedAlive: "yes"  
    }
]

//allows express to handle json as objects in req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//allows cross site resource sharing
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({"message": "sucess here is your data", data: bountyArr});
});

app.get("/:id", (req, res) => {
   //loop through the data array
   //find the object that has an ._id that matches req.params and return that object
   for(let i = 0; i < bountyArr.length; i++){
       if(bountyArr[i].id === req.params.id){
           res.status(200).send(bountyArr[i]);
       }
   }return res.status(404).send({
       message: "ERROR NOT FOUND"
   })
})

app.post("/", (req, res) => {
    let newBounty = req.body;
    newBounty.id = uuid();
    bountyArr.push(newBounty);
    res.status(200).send({"message": "success data was posted"})
})

app.delete("/:id", (req, res) => {
    //loop through the data
    //find the matching onjects
    //splice it out of the array
    //send back confirmation message
    for(let i = 0; i < bountyArr.length; i++){
        if(bountyArr[i].id === req.params.id){
            bountyArr.splice(i, 1);
            return res.status(200).send({
                message: "DELETE SUCCESFUL"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

app.put("/:id", (req, res) => {
//loop through the data
    for(let i = 0; i < bountyArr.length; i++){
        //find matching item
        if(bountyArr[i].id === req.params.id){
            //replace old item with new item
            for(let key in req.body){
                //loop through each key in the request body
               if(bountyArr[i].hasOwnProperty(key)){
                    //check if current item has a property name of key value
                    bountyArr[i][key] = req.body[key];
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

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
})