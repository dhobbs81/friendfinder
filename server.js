// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');

// Sets up the Express App
// =============================================================
var app = express();

// Heroku will set the port via an environment variable
app.set('port', (process.env.PORT || 5000));

// Configure Express with middleware to handle json and other data
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.text());
//app.use(bodyParser.json({type: "application/vnd.api+json"}));

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// The friends array stores data on how to match friends
var friends = [
    {
        "name": "Marcus",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/26a/04d/20ffa08.jpg",
        "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
];

// The default file path to the application
var defaultPath = path.join(__dirname, '/');

// Configure Routes
// =============================================================
htmlRoutes.setup(defaultPath, app);
apiRoutes.setup(defaultPath, app, friends);

// Starts the server to begin listening
// =============================================================
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
