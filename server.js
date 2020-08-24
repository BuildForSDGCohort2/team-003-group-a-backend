require('dotenv').config();
const http = require('http');
const port = process.env.APP_PORT || 3000 ;

const server = http.createServer((req,res)=> {
     res.end('Welcome to the Educonnecte  API');
})
server.listen(port);