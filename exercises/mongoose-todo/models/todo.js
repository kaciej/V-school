let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//the structure of the data in your collection
let todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  dateDue: {
    type: Date,
    default: Date.now
  },
  price: Number
});

//mongoose.model("collection name", schema);
module.exports = mongoose.model("todolist", todoSchema);