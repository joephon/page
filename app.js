var express = require('express');
var app = express();
var path = require('path');

function isMobileDevice(ua) {
  var judge = /(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(ua);
  if (judge) {
    return true;
  }
  return false;
};

app.set('views', __dirname + '/view');
app.use(express.static(path.join(__dirname,'lib')));
app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'src')));

app.get('*',(req, res) => {
  var userAgent = req.headers['user-agent'];
  if (isMobileDevice(userAgent)) {
    res.sendFile(__dirname + '/view/m.index.html');
  }
  else {
    res.sendFile(__dirname + '/view/index.html');
  }
});

app.listen(4000);

console.log('running on port:4000');
