import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
import connectDb from './config/dbConfig.js';

const app = express();

connectDb();
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(routes);
app.use((req, res) => {
  res.json({ message: 'educonnecte rest api built on node.js and express' });
});
export default app;
