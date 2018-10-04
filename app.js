const
	http = require('http'),
	https = require('https'),
	fs = require('fs'),
	express = require('express'),
	app = express(),
	chttp = http.Server(app),
	path = require('path');

app.use(express.json());

// cadastros em memoria
var cadastros = [];

app.post('/addJsonSerializado', function(req, res) {
	var obj = req.body;
	cadastros.push(obj);
	res.end("ok");
});
app.get('/lista', function(req, res) {
	res.end(JSON.stringify(cadastros);
}
// formulario
app.get('/', function(req, res) {
	 res.sendFile(path.join(__dirname + '/index.html'));
}

chttp.listen(3002, function() {
	console.log('listening on *:3002');
});