//websocket
const http = require("http");
const fs = require('fs');
const WebSocketServer = require("websocket").server
let connection = null;

http.createServer(function (req,res){res.writeHead(200, {'Content-Type': 'text.html'});var readStream = fs.createReadStream('index.html','utf8');readStream.pipe(res);}).listen(3000);


const httpserver = http.createServer((req, res) => 
                console.log("we have received a request"))

const websocket = new WebSocketServer({
    "httpServer": httpserver
})

httpserver.listen(8080, () => console.log("my server is listening on port 8080"))


//communication
websocket.on("request", request=> {

    connection = request.accept(null, request.origin)
    connection.on("open", () => console.log("Opened!!!"))
    connection.on("close", () => console.log("CLOSED!!!"))
    connection.on("message", message => {

        console.log(`Received message ${message.utf8Data}`)
        Response.write('index.html')
    })
})
