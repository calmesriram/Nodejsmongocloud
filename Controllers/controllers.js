var schema = require('../Schema/Ram');
exports.register=(req,res)=>{
console.log(req.body)
    var myschema = new schema({
        name:req.body.name,
        password:req.body.password
    })


    myschema.save(function(err,data){
if(err)
{
    console.log(err)
}
if(data)
{
    console.log("saved");
    res.send(data)
    res.end();
}
    })

}

exports.initial=(req,res)=>{
  
    res.end("Hai");
    
    }