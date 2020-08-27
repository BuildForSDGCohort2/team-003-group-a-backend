import express from 'express';

const router = express.Router();

router
  .get('/profile/schoolprofiles', (req, res) => {
    res.status(200).json({
      message: 'Fetch all registered schools',
    });
  })
  .get('/profile/teacherprofiles', (req, res) => {
    res.status(200).json({
      message: 'Fetch all registered teachers',
    });
  })
  .get('/users/profile/:profileId', (req, res) => {
    res.status(200).json({
      message: 'Fetch specific user profile',
    });
  });

export default router;
