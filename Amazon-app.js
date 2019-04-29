// Include the node-geocoder and inquirer NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// Replace with your mapquest consumer API key
// var options = {
//   provider: "mapquest",
//   apiKey: "itAS4yqnwTOtoclOiaxxQAhZFKAAsbwG"
// };

// var geocoder = NodeGeocoder(options);


// Prompt the user to provide item information.
inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Which location or landmark would you like to geocode?"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function(location) {

  // console.log(location.userInput);

  // Then use the Google Geocoder to Geocode the address
  geocoder.geocode(location.userInput, function(err, data) {

    console.log(JSON.stringify(data, null, 2));
  });

});