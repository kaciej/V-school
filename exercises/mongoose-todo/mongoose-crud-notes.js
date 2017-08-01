let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//mongoose docs never straight up connec to database, do this:
mongoose.connect("mongodb://localhost:27017/todos");

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
  Cost: Number
});

//mongoose.model('collection name', schema);
let Todo = mongoose.model('todolist', todoSchema);


// create
let newTodo = new Todo({
  title: "connect mongo to mongoose",
  desciption: "via jacob"
});


//save the todo to the mongodb database
newTodo.save((err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log('item save to db');
    console.log(data);
  }
});

//to do read, use empty object {} if you want to find everything
Todo.find({}, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log("success, returned data");
    console.log(data);
  }
})

//read one data
Todo.findOne({_id:"5980ba8b81b1c10f3d139a69"}, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log("success, found item by id");
    console.log(data);
  }
});

//to delete ONE
Todo.deleteOne({_id:"5980ba8b81b1c10f3d139a69"}, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log('success, data deleted');
  }
});

//OR USE:
Todo.findByIdAndRemove("5980ba8b81b1c10f3d139a69", (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log("success, item deleted");
    console.log(data);
  }
});

// //update item
let newData = {
  title: "blueberries",
  description: ""
}
//
// //use updateOne({_id:""}, , ) or findByIdAndUpdate("", , )
//new: true says to send the new one
Todo.updateOne({_id:"5980b6547051e80ee1f0f277"}, newData, {new: true}, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log({
      message: "success",
      data
    })
    console.log(data);
  }
});