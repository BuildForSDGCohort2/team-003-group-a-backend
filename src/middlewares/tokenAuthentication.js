import helper from '../helpers/helper.js';
import userService from '../services/user.service';

const { verifyToken } = helper;
const { getUserById } = userService;

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    req.User = '';
    return next();
  }
  const token = authorization.replace('Bearer ', '');
  const payload = verifyToken(token);
  const { _id } = payload;
  const profession = await getUserById(_id);
  req.User = payload;
  req.User.profession = profession;
  return next();
};
