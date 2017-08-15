let mongoose = require("mongoose");
let rs = require("readline-sync");

mongoose.connect("mongodb://localhost:27017/userexample");



//import model
let User = require("./models/user.js");

let username = rs.question("Username: ");
let password = rs.question("Password: ", {hideEchoBack: true});

// let createUser = new User({
//     username,
//     password
// });

// createUser.save((error, data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("New user was saved", data);
//     }
// });

User.findOne({username}, (error, currentUser) => {
    if(error) {
        console.log(error);
    } else if (currentUser === null) {
        console.log("User Not found");
    } else {
        currentUser.auth(password, (isCorrect) => {
            if(isCorrect) {
                console.log("Sucess, username and password are correct");
            } else {
                console.log("Invalid Password");
            }
        });
    }
});
