

// var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local
var connectionString = 'mongodb://127.0.0.1:27017/motodb'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds125041.mlab.com:25041/heroku_99hfrpf7'; // use yours
}

// mongodb://<dbuser>:<dbpassword>@ds125041.mlab.com:25041/heroku_99hfrpf7

var mongoose = require("mongoose");

var db = mongoose.connect(connectionString);

module.exports = db;