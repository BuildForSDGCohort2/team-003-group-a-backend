//require('dotenv').config();
const PORT = process.env.PORT || 5000 ;

const http = require('http');
const app  = require('./app');

app.set('port',PORT);
const server = http.createServer(app);

server.listen(PORT);