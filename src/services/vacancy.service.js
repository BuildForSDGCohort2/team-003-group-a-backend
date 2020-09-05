import vacancyModel from '../models/vacancy.model.js';

const postVacancy = async (vacancy) => {
  try {
    return await vacancyModel.create(vacancy);
  } catch (error) {
    throw error;
  }
};

// const getVacancy = async () => {
//     try {
//         return await vacancyModel.find();
//     } catch (error) {
//         throw error
//     }

// }

export default {
  postVacancy,
  // getVacancy
};
