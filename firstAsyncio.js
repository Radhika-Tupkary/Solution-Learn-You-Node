var fs = require('fs');

var buffer_obj = fs.readFile(process.argv[2], function callback(err,data) {
    if(err)
        console.log("error");
    else
        var str = data.toString();
        var new_lines = str.split('\n');
        console.log(new_lines.length-1);
});

