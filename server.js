// server creation

//http module
const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("req has been made from browser to server");
  //  console.log(req.method); //get //post //patch // 
  //  console.log(req.url); //url after base url
    

    //response object --> json,html,text,excel
    // res.setHeader('Content-Type', 'text/html');
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('<h1>Hello, Pepcoders ! :</h1>');
    // res.write('Hello, Pepcoders ! :)');
    // res.end();

    //for the whole file

    fs.readFile('./views/index.html',(err,fileData) => {
        if(err){
            console.log(err);
        }else{
            // res.write(fileData);
        //if only one file it also pass in res.end();
            res.end(fileData);
        }
    });
});

// switch case or padhna hai









//port number, host, callback func
server.listen(3000, 'localhost', () => {
  console.log("server is listening on port 3000");
});
