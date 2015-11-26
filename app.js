var express = require('express');
var app = express();
var path = require('path');

app.set('views', __dirname + '/view');
app.use(express.static(path.join(__dirname,'lib')));
app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'src')));
app.get('/',(req, res) => {
	res.sendFile(__dirname + '/view/index.html');
});
app.get('/m',(req, res) => {
	res.sendFile(__dirname + '/view/m.index.html');
})
app.listen(4000);

console.log('running on port:4000');
