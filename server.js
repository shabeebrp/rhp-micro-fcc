var express = require('express');
var app = express();
app.listen(process.env.PORT || 3000, function(){
  console.log("Chat server listening at "+(process.env.PORT || 3000);
});
