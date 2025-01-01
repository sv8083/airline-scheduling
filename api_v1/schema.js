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


module.exports = { validateGetFlightQuerySchema };