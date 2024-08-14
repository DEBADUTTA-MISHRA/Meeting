const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

exports.generateToken = (userId) => {
  return jwt.sign({ id: userId }, jwtSecret, { expiresIn: '1h' });
};
