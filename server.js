var express = require("express");
var app = express();
var Particle = require('particle-api-js');
var particle = new Particle();
var token;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Devices = require('./models/device.js');

// var userName = "";
// var passWord = "";

// mongodb
mongoose.connect('mongodb://localhost:27017/particlejs', { useNewUrlParser: true});
var db = mongoose.connection;
//
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("db connected");
});

// app.use == configuration du server
// je déclare mes fichiers statiques
app.use('/javaScript', express.static(__dirname + '/app/javascript'));
app.use('/controller', express.static(__dirname + '/app/controller'));
// app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/views', express.static(__dirname + '/app/views'));

// je configure mon body-parser
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Liste Device
particle.login({username: 'mns2157@outlook.fr', password: 'prtcltheo1999'}).then(
    function(data){
        console.log('API call completed on promise resolve: ', data.body.access_token);
        passerDevice(data.body.access_token);
    },
    function(err) {
        console.log('API call completed on promise fail: ', err);
    }
);

// Récupérer le token  pour le faire passer
function passerDevice(access_token){
    var devicesPr = particle.listDevices({ auth: access_token });
    devicesPr.then(
        function(devices){
            console.log('Devices: ', devices);
        },
        function(err) {
            console.log('List devices call failed: ', err);
        }
    );
}

//indiquer les routes (URL) à laquelle l'application doit répondre, ici la racine
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
app.get('/devices/:id', function(req,res){

    Devices.findOne({'_id':req.params.id},function(err,collection){
        if(err){
            console.log(err);
            return res.status(500);
        }
        else {
            res.send(collection);
        }
    });
});

app.get('/devices', function(req,res){

    Devices.find(function(err, collection) {
        if (err) {
            console.log(err);
            return res.send(500);
        } else {
            res.send(collection);
        }
    });
});

app.listen(8080);
console.log('serveur lancé');