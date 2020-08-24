require('dotenv').config();
const port = process.env.APP_PORT || 3000 ;

const http = require('http');
const app  = require('./app');

app.set('port',port);
const server = http.createServer(app);

server.listen(port);