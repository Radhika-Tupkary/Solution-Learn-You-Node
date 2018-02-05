var fs = require('fs');

var buffer_obj = fs.readFileSync('hello-world.js');

var str = buffer_obj.toString();
var number_of_new_lines = str.split("\n");
console.log(number_of_new_lines.length-1);
