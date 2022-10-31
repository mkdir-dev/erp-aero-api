"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const validationToken = (body) => {
    const { error } = celebrate_1.Joi.object({
        refresh_token: celebrate_1.Joi.string().regex(/^[\w-]+\.[\w-]+\.[\w-]+$/).min(150).required()
    }).validate(body);
    return !error;
};
exports.default = validationToken;
