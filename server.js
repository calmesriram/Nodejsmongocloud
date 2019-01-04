var express = require("express");
var bodyparser= require("body-parser");
var cors = require("cors");
var app = express();
var MongoClient= require("mongodb").MongoClient;
var mongoose =require("mongoose");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
require('./Models/rammodels.js')(app);
var db = require('./dbConfig/dbconfig')
mongoose.connect(db.url,{useNewUrlParser:true},function(err,con){
    if(err)
    console.log(err)
    if(con){
        console.log("connected")
    }
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log("port is An Active:",port);