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
  
  .then(function (answers) {

      connection.query("SELECT * FROM products WHERE item_id = " + answers.item_id, function (err, res) {

        // calculate the total purchase using price and user quantity
        try {
          var currentPrice = res[0].price;
          var total = (answers.quantity) * currentPrice.toFixed(2);


             if (res[0].stock_quantity < answers.quantity) {
                console.log("Insufficient quantity");

              // Update stock_quantity and display total purchase to the customer
              }
              else {
               connection.query("UPDATE products SET stock_quantity = stock_quantity - "
                 + answers.quantity + "WHERE item_id = " + answers.item_id, function (err, res) {

                    console.log("Inventory Updated");
                    console.log("Your total is: $" + total);
                    console.log("See you again");

                });
          }
        } catch (err) {
          console.log(err);
        }

        connection.end();

      });


    })
})