import express from 'express';
import authMiddleware from '../../../middlewares/auth.js';
import authController from '../../../controllers/auth.controller.js';

const router = express.Router();
const { signUp, logIn } = authController;
const { userDuplicationAccount, checkLoginCredentials } = authMiddleware;
router
  .post('/auth/signup', [userDuplicationAccount], signUp)
  .post('/auth/login', [checkLoginCredentials], logIn);

export default router;
