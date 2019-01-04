var mongoose = require("mongoose");

var a = mongoose.Schema({
    name:String,
    password:String
})

var b = mongoose.model("enroll",a);
module.exports=b;