var path = require('path'),
    express = require('express'),
    session = require('express-session'),
    flash = require('connect-flash'),
    ejs = require('ejs'),
    // config = require('config-lite'),
    router = require('./proxy/router'),
    config = require('./config'),
    winston = require('winston'),
    expressWinston = require('express-winston');

var app = express();

//设置模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());


// 正常请求的日志
app.use(expressWinston.logger({
    transports: [
        new (winston.transports.Console)({
            json: true,
            colorize: true,
            level: 'debug',
        }),
        new winston.transports.File({
            filename: 'logs/success.log'
        })
    ]
}));

app.use('/', router);

// 错误请求的日志
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        }),
        new winston.transports.File({
            filename: 'logs/error.log'
        })
    ]
}));


app.listen(config.port, function () {
    console.log('port:'+config.port+'start');
})