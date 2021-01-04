var express = require('express')

var defaultRoute = require('./route/default')
// var authRoute = require('./route/auth')
var loyalityRoute = require('./route/loyality')
var constants = require('./utils/constants')

var app = express()

defaultRoute(app);
loyalityRoute(app);
//authRoute(app);


console.log(constants.httpGetMethod);
app.listen(3000)
