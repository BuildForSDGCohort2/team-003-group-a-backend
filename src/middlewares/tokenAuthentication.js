export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    req.User = '';
    return next();
  }
  const token = authorization.replace;
};
