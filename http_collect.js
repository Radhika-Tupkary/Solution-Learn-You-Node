var http = require('http');

http.get(process.argv[2], function callback(response){
    var result = [];

    response.on("data", function(data){
        result.push(data.toString())
    });

   response.on("end", function(){
       var str = result.join("");
       console.log(str.length);
       console.log(str);
   });

});