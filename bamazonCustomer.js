// Include the mysql and inquirer NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// reating the connection to the database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");  

  // // Prompt the user to provide item information.
  inquirer.prompt([

    {
      type: "input",
      name: "item_id",
      message: "What's your item_id?",
    },

    {
      type: "input",
      name: "quantity",
      message: "How many units do you want to buy?"
    },
       // After the prompt, store the user's response in a variable called response.
  ])
 