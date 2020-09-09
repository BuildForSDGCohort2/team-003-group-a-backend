import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = async (user) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return token;
};

const hashPassword = async (password) => {
  const hashValue = bcrypt.hashSync(password, 15);
  return hashValue;
};

const comparePassword = async (password, hashedPassword) => {
  const bool = bcrypt.compare(password, hashedPassword);
  return bool;
};

const verifyToken = (token) => {
  const bool = jwt.verify(token, process.env.JWT_SECRET);
  console.log(bool);
  return bool;
};

export default {
  generateToken,
  hashPassword,
  comparePassword,
  verifyToken,
};
