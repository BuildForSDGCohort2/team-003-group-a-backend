import vacancyService from '../services/vacancy.service.js';
import response from '../helpers/responses.js';
import vacancyModel from '../models/vacancy.model.js';

/**
 * @description this controller deals with everything about post a vancancy
 */

const { successResponse, errorResponse } = response;
const { postVacancy, getVacancy } = vacancyService;

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
    return successResponse(
      res,
      201,
      '',
      'posted vacancy successfully',
      vacancy
    );
  } catch (error) {
    return errorResponse(res, 401, error.message);
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
    return successResponse(res, 200, '', 'all vacancy', vacancy);
  } catch (error) {
    return errorResponse(res, 401, error.message);
  }
};

export default {
  createVacancy,
  viewAllVacancy,
};
