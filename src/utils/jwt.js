const jwt = require("jsonwebtoken");
const config = require("./config");
const { logger } = require("./logger");

const secret = config.JWT_KEY;

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "7d" });
};

const validateToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    logger.warn("JWT validation failed", { error: e.message });
    return null;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
