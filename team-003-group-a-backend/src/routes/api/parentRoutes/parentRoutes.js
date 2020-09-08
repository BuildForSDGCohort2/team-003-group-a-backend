import express from 'express';

const parentRouter = express.Router();

// all routes for requests which a parent or a school would make
parentRouter
// Get the profiles of all teachers for a parent or a school
  .get('/teacherProfiles', (req, res) => {
    res.status(200).json({
      message: 'Fetch all registered teachers',
    });
  })
// Post a job vacancy
  .post('/vacancy', (req, res) => {
    res.status(200).json({
      message: 'Post a job vacancy',
    });
  })
// approve a job application
  .put('/users/vacancies/:vacancyId/approve', (req, res) => {
    res.status(200).json({
      message: 'approve a job vacancy',
    });
  })
// decline a job application
  .put('/users/vacancies/:vacancyId/decline', (req, res) => {
    res.status(200).json({
      message: 'decline a job vacancy',
    });
  })


  export default router;
