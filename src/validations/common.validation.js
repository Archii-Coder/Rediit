const Joi = require("joi");

const paginationValidationSchema = {
  limit: Joi.number().integer().min(1).max(100).default(10),
  page: Joi.number().integer().min(1).default(1),
};

module.exports = paginationValidationSchema;
