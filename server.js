require('dotenv').config();
const http = require('http');

const server = http.createServer((req,res)=> {
     res.end('Welcome to the Educonnecte  API');
})
server.listen(process.env.APP_PORT || 3000);