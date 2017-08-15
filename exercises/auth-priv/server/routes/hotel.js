let express = require("express");
let hotelRouter = express.Router();
let expressJwt = require("express-jwt");
let settings = require("../config/settings.js");
let authorization = expressJwt({secret: settings.secret});

hotelRouter.get("/events", (req, res) => {
    res.status(200).send({"message": "Here are the events", data: [{
        checkIn: "11:00 AM",
        checkOut: "4:00 PM",
        title: "Breakfast",
        description: "French Toast"
    },
    {
        checkIn: "09:00 AM",
        checkOut: "7:00 PM",
        title: "Lunch",
        description: "Kale Salad"
    }
    ]});
});

hotelRouter.get("/guests", authorization, (req, res) => {
    res.status(200).send({"message": "Here are the guests at the hotel", data: [{
        firstName: "Caleb",
        lastName: "Black",
        roomNumber: "13"
    },
    {
        firstName: "Barack",
        lastName: "Obhama",
        roomNumber: "Presidencial Suite"
    }
    ]});
});

module.exports = hotelRouter;