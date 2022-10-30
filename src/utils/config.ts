import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: Number(process.env.PORT) || 3000,

  db: {
    host: String(process.env.DB_HOST) || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    database: String(process.env.DB_NAME) || "database",
    user: String(process.env.DB_USER) || "root",
    password: String(process.env.DB_PASSWORD) || "my password"
  }
}
