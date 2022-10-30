"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const validationUser = (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object().keys({
        id: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().min(8).required(),
    }),
});
exports.default = validationUser;
