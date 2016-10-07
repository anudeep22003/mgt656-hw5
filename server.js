var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/thoughtful-grasshopper', function(request, response){
    response.send('Hello I am a thoughtful grasshopper who also goes by the name Anudeep');
});

app.listen(
    process.env.PORT || 4000,
    process.env.IP || 'localhost'
);