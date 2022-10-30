"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("../utils/config"));
const connection = mysql2_1.default.createConnection(Object.assign(Object.assign({}, config_1.default.db), { multipleStatements: true }));
connection.query(`CREATE TABLE IF NOT EXISTS users 
    (pkey SERIAL PRIMARY KEY, id VARCHAR(128) UNIQUE, password VARCHAR(72), created_time DATETIME DEFAULT NOW());`);
connection.query(`CREATE TABLE IF NOT EXISTS tokens (token VARCHAR(256), expiration DATETIME)`);
connection.query(`CREATE TABLE IF NOT EXISTS files 
    (pkey SERIAL PRIMARY KEY, id VARCHAR(64) UNIQUE, name VARCHAR(256), extension VARCHAR(128), mime_type VARCHAR (256), 
    size INTEGER, created_time DATETIME DEFAULT NOW())`);
exports.default = connection;
