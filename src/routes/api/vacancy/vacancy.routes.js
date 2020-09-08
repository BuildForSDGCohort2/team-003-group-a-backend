import express from 'express';
import vacancyController from '../../../controllers/vacancy.controller.js';

const router = express.Router();
const { createVacancy, viewAllVacancy, viewOneVacancy } = vacancyController;

router
  .get('/vacancies', viewAllVacancy)
  .get('/users/vacancies/:vacancyId', viewOneVacancy)
  .post('/users/vacancies', createVacancy)
  .post('/users/vacancies/:vacancyId/proposal');

export default router;
