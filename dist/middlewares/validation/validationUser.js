"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const validationUser = (body) => {
    const { error } = celebrate_1.Joi.object({
        id: celebrate_1.Joi.alternatives(celebrate_1.Joi.string().email().min(8).max(80).required(), celebrate_1.Joi.string()
            .regex(/^(\+?\d{7,15})\b$/)
            .required()).required(),
        password: celebrate_1.Joi.string().regex(/(?=.*[a-z])/).min(8).required()
    }).validate(body);
    return !error;
};
exports.default = validationUser;
