"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const getUser = (id) => new Promise((resolve, reject) => {
    connection_1.default.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => error ? reject(error) : resolve(results));
});
exports.default = getUser;
