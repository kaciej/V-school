let express = require("express");
let todoRouter = express.Router();

//import model
let Todo = require("../models/todo.js");

//middleware to put all queries in lowercase
todoRouter.use((req, res, next) => {
    for(let key in req.query) {
        if(typeof req.query[key] === "string") {
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});

//GET
todoRouter.get("/", (req, res) => {
  Todo.find(req.query, (error, data) => {
      if(error){
          res.status(500).send({"message": "Error within server", error}) ;
      } else if (data === null) {
          res.status(404).send({"error": "Not found"});
      } else {
          res.status(200).send({"message": "Success here is your data", data});
      }
  });
  
});

//POST
todoRouter.post("/", (req, res) => {
  let newTodo = new Todo(req.body);
  newTodo.save((error, data) => {
      if(error){
          res.status(500).send({"message": "Error within server", error}) ;
      } else {
        res.status(201).send({"message": "Item was created", data});
      }
  });
});

//GET BY ID
todoRouter.get("/:id", (req, res) => {
    Todo.findOne({"_id": req.params.id }, (error, data) => {
          if(error){
          res.status(500).send({"message": "Error within server", error});
      } else if (data === null) {
          res.status(404).send({"error": "Not found"});
      } else {
        res.status(200).send({"message": "Success", data});
      }
    });
});

//DELETE
todoRouter.delete("/:id", (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (error, data) => {
        if(error){
          res.status(500).send({"message": "Error within server", error}) ;
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
        } else {
        res.status(200).send({"message": "Deleted Successful", data});
      } 
    });
});

//UPDATE PUT
todoRouter.put("/:id", (req, res ) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data) => {
         if(error){
          res.status(500).send({"message": "Error within server", error}) ;
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
        } else {
        res.status(200).send({"message": "Update Successful", data});
      } 
  });
});

module.exports = todoRouter;
