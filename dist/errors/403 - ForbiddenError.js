"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorStatuses_1 = require("./errorStatuses");
class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = errorStatuses_1.statuses.ERROR_FORBIDDEN;
    }
}
exports.default = ForbiddenError;
