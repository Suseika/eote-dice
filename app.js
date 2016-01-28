var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3001, perMessageDeflate: false});
var _ = require('lodash');
var url = require('url');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(require('node-sass-middleware')({
//  src: path.join(__dirname, 'public'),
//  dest: path.join(__dirname, 'public'),
//  indentedSyntax: true,
//  sourceMap: true
//}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var dieFactory = require("./eote-model/dice/DieFactory");

wss.broadcastNewThrow = function (data) {
    this.clients
        .filter(function (client) {
            return url.parse(client.upgradeReq.url, true).pathname == "/newThrows"
        })
        .forEach(function (client) {
            client.send(JSON.stringify(data));
        });
};

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        var data = JSON.parse(message);
        var throwResults = {
            playerName: data.playerName,
            rolls: _.keys(data)
                .map(function (dieTypeName) {
                    return {
                        dieTypeName: dieTypeName,
                        amount: data[dieTypeName]
                    }
                })
                .filter(function(dieTypeThrow) {
                    return dieTypeThrow.amount > 0;
                })
                .map(function (dieTypeThrow) {
                    return _.range(0, dieTypeThrow.amount)
                        .map(function (i) {
                            var die = dieFactory.createDie(dieTypeThrow.dieTypeName);
                            return {
                                dieName: die.name,
                                results: die.roll()
                                    .map(function (rollResult) {
                                        return rollResult.name;
                                    })
                            };
                        });
                })
        };
        wss.broadcastNewThrow(throwResults);
    });
})
;

module.exports = app;
