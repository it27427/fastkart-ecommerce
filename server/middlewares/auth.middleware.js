const config = require('@root/config/config');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized User!',
    });
  }

  try {
    const secretKey = config.token.key;
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Authorization Error:', error);
    res.status(401).json({
      success: false,
      message: 'Unauthorized User!',
    });
  }
};

module.exports = authMiddleware;
