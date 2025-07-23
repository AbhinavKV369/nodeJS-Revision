const http = require("http");
const { readFileSync } = require("fs");

const home = readFileSync("./index.html");
const homecss = readFileSync("./style.css");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(home);
    res.end();
  }

  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homecss);
    res.end();
  }
  else if(url === "/about"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hello This is about page</h1>");
    res.end();
  }else{
    res.writeHead(400,{"content-type":"text/html"});
    res.write("<h1>Error page not fond</h1>");
    res.end();
  }
});

server.listen(5000,()=>{
   console.log("Server started") 
});
