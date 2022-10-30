"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    PORT: Number(process.env.PORT) || 3000,
    db: {
        host: String(process.env.DB_HOST) || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        database: String(process.env.DB_NAME) || "database",
        user: String(process.env.DB_USER) || "root",
        password: String(process.env.DB_PASSWORD) || "my password"
    }
};
