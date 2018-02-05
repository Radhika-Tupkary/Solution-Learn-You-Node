var mymodule = require('./make-it-modular-helper');

var dirtitle = process.argv[2];
var extion = process.argv[3];

mymodule(dirtitle, extion, function(err, files) {console.log(files.join('\n'));} );