import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const router = express.Router();
const apiVersion = process.env.API_VERSION;
const baseUrl = `/api/${apiVersion}`;

router.use(cors());

router.get((req, res) => {
  res
    .status(200)
    .json({ message: 'educonnecte rest api built on node.js and express' });
});

export default router;
