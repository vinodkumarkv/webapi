var appRouter = function(app){
    app.get("/",function(req,res){
      res.status(200)
      .send("Hi Welcome to API")
    });

    app.use(function (req, res, next) {
      console.log('Time:', Date.now())
      next();
    })
};

module.exports = appRouter;