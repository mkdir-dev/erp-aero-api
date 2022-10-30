"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const { PORT, JWT_SECRET, JWT_SECRET_LIFE, REFRESH_SECRET, REFRESH_SECRET_LIFE, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, } = process.env;
dotenv_1.default.config();
exports.default = {
    port: Number(PORT) || 3000,
    secretKey: String(JWT_SECRET) || "super_secret_key",
    secretKeyLife: Number(JWT_SECRET_LIFE) || 3000,
    refreshSecretKey: String(REFRESH_SECRET) || "refresh_super_secret_key",
    refreshSecretKeyLife: Number(REFRESH_SECRET_LIFE) || 86400,
    db: {
        host: String(DB_HOST) || "localhost",
        port: Number(DB_PORT) || 3306,
        database: String(DB_NAME) || "database",
        user: String(DB_USER) || "root",
        password: String(DB_PASS) || "my password"
    }
};
