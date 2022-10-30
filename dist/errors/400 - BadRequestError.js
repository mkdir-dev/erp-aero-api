"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorStatuses_1 = require("./errorStatuses");
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = errorStatuses_1.statuses.ERROR_CODE;
    }
}
exports.default = BadRequestError;
