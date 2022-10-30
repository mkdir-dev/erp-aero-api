"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const createUser = (id, password) => {
    return new Promise((resolve, reject) => {
        connection_1.default.query("INSERT INTO users (id, password) VALUES (?, ?) ", [id, password], (error, results) => error ? reject(error) : resolve(results));
    });
};
exports.default = createUser;
