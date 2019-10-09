module.exports = function (app){

     var router = app.loopback.Router();

    router.get('/pings', function(req , res){
    res.send('data is here');

     });
     app.use(router);
}