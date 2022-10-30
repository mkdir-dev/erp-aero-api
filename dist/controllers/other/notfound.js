"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorStatuses_1 = require("../../errors/errorStatuses");
const errorMessages_1 = require("../../errors/errorMessages");
const { ERROR_SERVER } = errorStatuses_1.statuses;
const { NotFoundErrMessages } = errorMessages_1.serverErr;
const notfound = (res) => res.status(ERROR_SERVER).send({ message: NotFoundErrMessages });
exports.default = notfound;
