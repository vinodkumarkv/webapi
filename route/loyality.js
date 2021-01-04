
var appRouter = function(app){
 app.get('/getmomentbycode', function (req, res) {
    res.status(200)
    .send("MomentCode")
 });
};

module.exports = appRouter;