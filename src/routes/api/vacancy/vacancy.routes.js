import express from 'express';
import vacancyController from '../../../controllers/vacancy.controller.js';

const router = express.Router();
const { createVacancy } = vacancyController;

router
  .get('/vacancies')
  .get('/users/vacancies/:vacancyId', (req, res) => {
    res.status(200).json({
      message: 'Fetch specific vacancy',
    });
  })
  .post('/vacancies/add', createVacancy)
  .post('/users/vacancy/:vacanciesId', (req, res) => {
    res.json({
      message: 'Users post a job',
    });
  });

export default router;
