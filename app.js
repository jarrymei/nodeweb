var path = require('path'),
    express = require('express'),
    session = require('express-session'),
    flash = require('connect-flash'),
    ejs = require('ejs'),
    // config = require('config-lite'),
    router = require('./proxy/router'),
    config = require('./config')

var app = express();

//设置模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

app.use('/', router);

app.listen(config.port, function () {
    console.log('port:'+config.port+'start');
})