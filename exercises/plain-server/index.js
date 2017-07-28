let http = require("http");
const PORT = 8080;

//req -> resquest  //res -> response
let server = http.createServer((req, res) => {
    if(req.method === "GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        if(req.url === "/"){
            res.write("<h1>This is my index.html</h1>");
        }else if(req.url === "/blog"){
            res.write("<h2>This is my blog page</h2>")
        }
     res.end();
    }
});

server.listen(PORT);