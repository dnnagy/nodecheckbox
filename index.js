var path = require('path');
var express = require('express');
var fs = require('fs'); 
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var staticPath = path.resolve(__dirname, '/public');
app.use(express.static(staticPath));

var port =  5000;
var host =  'localhost';

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');	
    res.send( fs.readFileSync('./public/index.html') );
})

app.post('/endpoint', function(req, res){
    var obj = {};
    console.log('body: ' + JSON.stringify(req.body));
    res.send(req.body);
});

app.listen(port, function() {
    console.log('listening');
});

