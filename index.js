'use strict';

require('dotenv').config({
    path: './.env'
});

// var bst = require('bespoken-tools');
// var bstKey = process.env.bstKey;
// var logless = bst.Logless.middleware(bstKey);

const main = require('./scripts/main');

let express = require('express');
let expressApp = express();
expressApp.set('port', (process.env.PORT || 8004));

let bodyParser = require('body-parser');
expressApp.use(bodyParser.json());

expressApp.get('/*', function(request, response) {
    console.log('incoming GET - should be testing only!');
    response.send('hello!');
});

// main incoming call
expressApp.post('/', main.app);

// Start the server
let server = expressApp.listen(expressApp.get('port'), function() {
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit.');
});
