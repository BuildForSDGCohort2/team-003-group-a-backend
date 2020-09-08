import express from 'express';
import parentRoutes from '../api/parentRoutes/parentRoutes.routes.js';
import teacherRoutes from '../api/teacherRoutes/teacherRoutes.routes.js';

const router = express.Router();

router.use(parentRoutes);
router.use(teacherRoutes);

export default router;
