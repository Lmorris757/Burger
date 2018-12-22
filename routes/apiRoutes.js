// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
// Requiring our models
var db = require("../models");

// Routes
// =============================================================


  // GET route for getting all of the todos
  router.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function (dbBurgers) {
      // We have access to the todos as an argument inside of the callback function
    //   res.json(dbBurgers);

      res.render("index", {burgers: dbBurgers});
    });
  });

  // POST route for saving a new todo


  router.post("/api/burger", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function (dbBurgers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurgers);
    });
  });

//   // DELETE route for deleting todos. We can get the id of the todo to be deleted from
//   // req.params.id
//   app.delete("/api/todos/:id", function (req, res) {
//     // Use the sequelize destroy method to delete a record from our table with the
//     // id in req.params.id. res.json the result back to the user
//     db.Todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function (dbTodo) {
//       res.json(dbTodo);
//     });
//   });
// //^^^essentially sequelize's way of 'FELETE * FROM todos WHERE id= ?'
//   // PUT route for updating todos. We can get the updated todo data from req.body
  router.put("/api/burger/:id", function (req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
    db.Burger.update({
        burger_name: req.body.burger_name
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurgers){
      res.json(dbBurgers);
    });
  });

module.exports = router;