import userModel from '../models/user.model.js';

const createUser = async (user) => {
  try {
    return await userModel.create(user);
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await userModel.findOne({ email: email });
    return user;
  } catch (error) {
    throw error;
  }
};

export default {
  createUser,
  getUserByEmail,
};
