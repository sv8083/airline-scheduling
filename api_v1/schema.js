const Joi = require('joi');

const getFlightQuerySchema = Joi.object({
    departureCity: Joi.string().min(3).max(50).optional(),
    arrivalCity: Joi.string().min(3).max(50).optional(),
    name: Joi.string().min(3).max(100).optional(),
});

function validateGetFlightQuerySchema(query) {
    const { error, value } = getFlightQuerySchema.validate(query);
    if (error) {
        throw new Error(error.details.map(e => e.message).join(', '));
    }
    return value; // return sanitized values
}

const postFlightReqBody = Joi.object({
    departureCity: Joi.string().min(3).max(50).required(),
    arrivalCity: Joi.string().min(3).max(50).required(),
    name: Joi.string().min(3).max(255).required(),
});

function validatepostFlightReqBody(data) {
    const { error, value } = postFlightReqBody.validate(data);
    if (error) {
        throw new Error(error.details.map(e => e.message).join(', '));
    }
    return value; // return sanitized values
}


module.exports = { validateGetFlightQuerySchema, validatepostFlightReqBody };