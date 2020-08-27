import express from 'express';

const router = express.Router();

router
  .get('/vacancies', (req, res) => {
    res.status(200).json({
      message: 'Fetch all jobs posted',
    });
  })
  .get('/users/vacancies/:vacancyId', (req, res) => {
    res.status(200).json({
      message: 'Fetch specific vacancy',
    });
  })
  .post('/users/vacancies', (req, res) => {
    res.status(200).json({
      message: 'Post a vacancy',
    });
  })
  .post('/users/vacancy/:vacanciesId', (req, res) => {
    res.json({
      message: 'Users post a job',
    });
  });

export default router;
