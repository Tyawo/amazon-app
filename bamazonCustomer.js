// Include the node-geocoder and inquirer NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lnf2mpetj",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      console.log("\n-----------------------------------")
  afterConnection();

     

});
var afterConnection = function () {
  // Prompt the user to provide item information.
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
  ]).then(function (user) {
    connection.query("SELECT stock_quantity FROM products", function (err, res) {
      if (user.quantity > stock_quantity) {
        console.log("Insufficient quantity")
      }
      else {
        console.log("Fulfilling your order...\n");
        connection.query("SELECT stock_quantity FROM products", function (err, res) {
        });
     }


    }),






      // run queries here

      connection.end();

  });
}







// Replace with your mapquest consumer API key
// var options = {
//   provider: "mapquest",
//   apiKey: "itAS4yqnwTOtoclOiaxxQAhZFKAAsbwG"
// };

// var geocoder = NodeGeocoder(options);




//   //   // console.log(location.userInput);

//   //   // Then use the Google Geocoder to Geocode the address
//   //   geocoder.geocode(location.userInput, function(err, data) {

//   //     console.log(JSON.stringify(data, null, 2));
//   //   });

// });
  });