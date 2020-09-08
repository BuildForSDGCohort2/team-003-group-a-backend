import vacancyService from '../services/vacancy.service.js';
import response from '../helpers/responses.js';
import vacancyModel from '../models/vacancy.model.js';
import statusCode from '../helpers/statusCode.js';
import customMessage from '../helpers/customMessage.js';

/**
 * @description this controller deals with everything about post a vancancy
 */

const { ok, created, badRequest } = statusCode;
const { jobCreated, jobExist } = customMessage;
const { successResponse, errorResponse } = response;
const { postVacancy, getVacancy, getVacancyById } = vacancyService;

/**
 * @param {object} req request
 * @param {object} res response
 * @returns {object} returns the newly vacancy created in json format
 */
const createVacancy = async (req, res) => {
  try {
    const { vacancyTitle, description } = req.body;
    let vacancy = new vacancyModel({
      vacancyTitle,
      description,
    });
    vacancy = await postVacancy(vacancy);
    return successResponse(res, created, '', jobCreated, vacancy);
  } catch (error) {
    return errorResponse(res, badRequest);
  }
};

/**
 * @param {object} res response
 * @param {object} req request
 * @returns {object} returns json object of all vacancy created
 */

const viewAllVacancy = async (req, res) => {
  try {
    const vacancy = await getVacancy();
    return successResponse(res, ok, '', 'all vacancy', vacancy);
  } catch (error) {
    return errorResponse(res, 401, error.message);
  }
};

const viewOneVacancy = async (req, res) => {
  const { vacancyId } = req.params;
  const vacancy = await getVacancyById(vacancyId);
  return successResponse(res, ok, undefined, jobExist, vacancy);
};

export default {
  createVacancy,
  viewAllVacancy,
  viewOneVacancy,
};
