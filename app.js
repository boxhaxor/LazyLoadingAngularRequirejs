/**
 * Module dependencies.
 */

process.chdir(__dirname);

// base requirements
var util = require('util');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');
var multer  = require('multer');
var methodOverride = require('method-override');
var logger = require('morgan');

// parse command line options
var address ='127.0.0.1';
var port = 8080;

// bring in requirements
var express = require('express');

// instance app object
var app = module.exports = express();


// configure express web server

app.set('address', address);
app.set('port', port);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(methodOverride());
app.use(logger('dev'));
app.use(express.static(__dirname + '/dist', {
  redirect: false
}));

app.get('*', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, 'dist') });
});

// Start server
app.listen(app.get('port'), app.get('address'), function () {
    console.log("HTTP server listening on port %s:%d in %s mode", this.address().address, this.address().port, app.settings.env);
});

