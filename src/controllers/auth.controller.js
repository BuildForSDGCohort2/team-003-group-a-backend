import userService from '../services/user.service.js';
import responses from '../helpers/responses.js';
import helper from '../helpers/helper.js';
import userModel from '../models/user.model.js';

const { createUser, getUserByEmail } = userService;
const { successResponse, errorResponse } = responses;
const { generateToken, hashPassword } = helper;

const signUp = async (req, res) => {
  try {
    const { name, profession, password, email } = req.body;
    const encryptPassword = await hashPassword(password);
    let user = new userModel({
      name,
      profession,
      password: encryptPassword,
      email,
    });
    user = await createUser(user);
    const token = await generateToken(user);
    return successResponse(res, 201, token, 'signup successfully', user);
  } catch (error) {
    return errorResponse(res, 401, `you can not signup`);
  }
};

const logIn = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);
    const token = await generateToken(user);
    return successResponse(res, 200, token, 'successfully logged In', user);
  } catch (error) {
    return errorResponse(res, 401, error.message);
  }
};

export default {
  signUp,
  logIn,
};
