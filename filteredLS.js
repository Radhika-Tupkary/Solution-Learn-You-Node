var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(err,list){

    var selected_files = [];
    var extension = "." + process.argv[3];

    for(var i=0;i<list.length;i++){
        if (path.extname(list[i]) == extension)
            selected_files.push(list[i]);
    }
    var str_files = selected_files.join('\n');
    console.log(str_files);

});