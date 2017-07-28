let express = require("express");

let app = express();
const PORT = process.env.PORT || 8080;

//req => request   // res => response
app.get("/", (req, res) => {
    res.status(200).send({"message": "Well Pickle Juice"});
});

app.listen(PORT, () => {
    console.log(`Starting Sever on port ${PORT}`)
});