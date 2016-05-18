var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.end('hello world\n');
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Chat server listening at "+(process.env.PORT || 3000));
});
