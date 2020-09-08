import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

import { createServer } from 'http';
import app from './src/app.js';

app.set('port', PORT);
const server = createServer(app);

server.listen(PORT);
