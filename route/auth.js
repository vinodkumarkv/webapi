var jwt = require("jsonwebtoken");
var request = require("request");


var appRouter = function(app){
app.post('/authenticate',function(req,res){

    var user = {
        username = req.body.name,
        password: req.body.password,
    }
});
};

module.exports = appRouter;