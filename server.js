var express = require('express');
var app = express();
app.get('/api/whoami',function(req,res){
    var out = {
        ipaddress:"s",
        language:"s",
        software:"s"};
    out.ipaddress = req.connection.remoteAddress;
    out.language = req.get('accept-Language');
    out.software =req.get('user-agent');
    res.send(out);
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Chat server listening at "+(process.env.PORT || 3000));
});
