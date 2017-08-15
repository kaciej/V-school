let express = require("express");
let authRouter = express.Router();

//import settings
let settings = require("../config/settings.js");

//import user model
let User = require("../models/user.js");

//import passport modules
let passport = require("passport");
let Strategy = require("passport-local");

let jwt = require("jsonwebtoken");

passport.use(new Strategy((username, password, done) => {
    User.findOne({username}, (error, currentUser) => {
        if(error) {
            done(error, false);
        } else if(currentUser === null){
            done(null, false);
        } else {
            currentUser.auth(password, (isCorrect) => {
                if(isCorrect) {
                    done(null, true);
                } else {
                    done(null, false);
                }
            });
        }
    });
}));

//strartup passport
authRouter.use(passport.initialize());

//login a user
authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) => {
    User.findOne({username: req.body.username}, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error", error});
        } else if(data === null) {
            res.status(404).send({"message": "NO user found with this username"});
        } else {
            let payload = { username: data.username }
            res.status(201).send({
                "message": "Success, Auth token issued",
                "token": jwt.sign(payload, settings.secret, {expiresIn: 1800})
            })
        }
    })
});

//post users
authRouter.post("/signup", (req, res) => {
    let makeUser = new User(req.body);
    makeUser.save((error, data) => {
        if(error) {
            res.status(500).send({"message": "Error in system", error});
        } else {
            res.status(201).send({"message": `User was created with username of ${data.username}`});
        }
    });
});

module.exports = authRouter;
