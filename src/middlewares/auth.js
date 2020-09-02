import responses from '../helpers/responses.js';
import userService from '../services/user.service.js';

const { successResponse, errorResponse } = responses;
const { getUserByEmail } = userService;

const checkEmailExist = async (email) => {
  const user = await getUserByEmail(email);
  return user;
};

const userDuplicationAccount = async (req, res, next) => {
  const { email } = req.body;
  let user = await checkEmailExist(email);

  if (!user) {
    return next();
  }
  return errorResponse(res, 401, 'account already Exist');
};

export default {
  userDuplicationAccount,
};
