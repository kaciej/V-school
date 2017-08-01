let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bountySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    location: String,
    price: Number,
    wantedAlive: String
});

module.exports = mongoose.model("bountylist", bountySchema);