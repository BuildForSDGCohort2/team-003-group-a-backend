import express from 'express';
import authMiddleware from '../../../middlewares/auth.js';
import authController from '../../../controllers/auth.controller.js';

const router = express.Router();
const { addUser } = authController;
const { userDuplicationAccount } = authMiddleware;
router
  .post('/auth/signup', [userDuplicationAccount], addUser)
  .post('/auth/login');

export default router;
