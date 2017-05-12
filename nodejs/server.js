'use strict';

const express = require('express');
const noodle = require('noodlejs');
//const jQuery = require('jquery');

// Constants
const PORT = 8080;

// App
const app = express();

var jsdom = require('jsdom').jsdom
  , myWindow = jsdom().createWindow()
  , $ = require('jQuery')
  , jq = require('jQuery').create()
  , jquery = require('jquery').create(myWindow)
  ;

var query = {
    url: 'http://google.com/search?q=javascript',
    type: 'html',
    selector: 'h3.r a',
    extract: 'text'
  },
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';

// Make Ajax request to Noodle server
jquery.getJSON(request, function (data) {
  alert(data[0].results);
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
