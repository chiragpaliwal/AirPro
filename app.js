var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.get('/',function(req, res){
  request('http://api.thingspeak.com/channels/231438/feed/last.json', function (error, response, body) {
   if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
     console.log(importedJSON);
     res.render('index',{data:importedJSON});
}
});
});

app.listen('3000',function(){
  console.log('server working on port 3000...');
})
