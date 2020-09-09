import responses from '../helpers/responses.js';
import userService from '../services/user.service.js';
import helper from '../helpers/helper.js';

const { errorResponse } = responses;
const { getUserByEmail } = userService;
const { comparePassword } = helper;

const checkEmailExist = async (email) => {
  const user = await getUserByEmail(email);
  return user;
};

const userDuplicationAccount = async (req, res, next) => {
  const { email } = req.body;
  const user = await checkEmailExist(email);

  if (!user) {
    return next();
  }
  return errorResponse(res, 401, 'account already Exist');
};

const checkLoginCredentials = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await checkEmailExist(email);
  const boolPassword = await comparePassword(password, user.password);
  if (!user || !boolPassword) {
    return errorResponse(res, 401, 'Invalid email or password');
  }
  return next();
};
export default {
  userDuplicationAccount,
  checkLoginCredentials,
};
