let express = require("express");
let adminRouter = express.Router();

adminRouter.use((req, res, next) => {
    if(req.user.priv === "admin"){
    next();
    } else {
        res.status(401).send({"message": "User is not Authorized"});
    }
});

module.exports = adminRouter;