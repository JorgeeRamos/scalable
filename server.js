/******** Dependencies ************/
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

/******** Database Config ************/
require('./models/message');
var Message = mongoose.model('Message');
mongoose.connect('mongodb://localhost/deep');

/******** Configuration  **********/
var app = express();

app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'www')));


/******** Routes  **********/
//For debugging
app.all('*', function(req, res, next){
    var output = req.method + " " + req.url;
    if(!!req.body && Object.keys(req.body).length){
        output += ", " + JSON.stringify(req.body);
    }
    console.log(output);
    next();
});

//Run app
var server = app.listen(3000, function () {

      var host = server.address().address;
      var port = server.address().port;

      console.log('Example app listening at http://%s:%s', host, port);

});
