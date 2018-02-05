var httpp = require('http');
var bll = require('bl');

httpp.get(process.argv[2], function callback(response){

    response.pipe(bll(function (err, data) {
        if(err) {
            return console.log(err)
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});