/*Server express*/
var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

//Server our static like index.compression
app.use(express.static(path.join(__dirname, 'public')));

//Send all request to index
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Var Port
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Production express running at localhost: ' + PORT);
});
