//Install sequelize, mysql2, sequelize cli (npm i -g sequelize sequelize-cli)//
// initialize the sequelize cli (sequelize init:models && sequelize init:config)//
// var sequelize = require("sequelize");
var express = require ("express");
var app = express();
var db = require("./models/burger");
var exphbs = require("express-handlebars");

// set the variable PORT to either get the value of process.env.port or the value assigned (8080)//
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory to be served
app.use(express.static("public"));

var routes = require("./controller/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  