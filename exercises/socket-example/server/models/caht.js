let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let chatSchema = new Schema({
    username: String,
    message:String
});

modlue.export = mongoose.model("chat", chatSchema);