let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
//url to connect database to mongo
//defautl port that mongodb operates on(27017)
let url = "mongodb://localhost:27017/catbabies";

//connect to db takes the url and a callback function
MongoClient.connect(url, (error, db) => {
    if(error) {
        console.log("Error in running mongodb", error);
    } else {
        console.log("Success you have entered the database");
        //connect to the catbabies collection
        let catbabies = db.collection("catbabies");
        catbabies.find({}).toArray((error, data) => {
            console.log(data);
            db.close();
        });
        //insert a catbaby
        // catbabies.insertOne({
        //     name: "honey",
        //     color: "burtorange",
        //     age: 44
        // }, (error, result) => {
        //     if(error){
        //         console.log(error);
        //     } else {
        //         console.log(result);
        //     }
        // });  
        // catbabies.deleteOne({_id: new mongodb.ObjectID("597fb19f8f76790495f21069")}, (error, result) => {
        //     if(error){
        //         console.log(error);
        //     } else {
        //         console.log(result);
        //     }
        // });  
        catbabies.updateOne({_id: new mongodb.ObjectID("597fb3053e323e04b4feda29")},
         {$set: {color: "red"}}, (error, result) => {
            if(error){
                console.log(error);
            } else {
                console.log("Sucess item was updated")
            }
        })
    }
});



