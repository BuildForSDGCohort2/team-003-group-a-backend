import vacancyService from '../services/vacancy.service.js';
import response from '../helpers/responses.js';
import vacancyModel from '../models/vacancy.model.js';

const { successResponse, errorResponse } = response;
const { postVacancy, getVacancy } = vacancyService;

/**
 * @description this controller
 * @param {object} req request
 * @param {object} res response
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

const viewAllVacancy = async (res, req) => {
  try {
    const vacancy = await getVacancy();
    return successResponse(res, 200, '', 'all va');
  } catch (error) {}
};

export default {
  createVacancy,
};
