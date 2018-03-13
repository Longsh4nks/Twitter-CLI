var home = require('./controllers/home.js');

var meth = process.argv[2];
var args = process.argv[3];

home(meth, args);