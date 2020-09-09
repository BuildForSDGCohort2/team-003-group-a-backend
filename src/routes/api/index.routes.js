import express from 'express';
import userRoutes from '../api/user/user.routes.js';
import vacancyRoutes from '../api/vacancy/vacancy.routes.js';
import authRoutes from '../api/auth/auth.routes.js';

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(vacancyRoutes);

export default router;
