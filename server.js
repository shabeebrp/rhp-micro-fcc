var express = require('express');
var app = express();
app.get('/api/whoami',function(req,res){
    var out = {
        ipaddress:"s",
        language:"s",
        software:"s"};
    out.ipaddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
    out.language = req.get('accept-Language').substr(0,5);
    out.software =req.get('user-agent').split('(')[1].split(")")[0];
    res.send(out);
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Server listening at "+(process.env.PORT || 3000));
});
