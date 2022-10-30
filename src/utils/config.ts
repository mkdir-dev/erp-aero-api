import dotenv from "dotenv";

dotenv.config();

export default {
  port: Number(process.env.PORT) || 3000,
  
  secretKey: String(process.env.JWT_SECRET) || "super_secret_key",
  secretKeyLife: Number(process.env.JWT_SECRET_LIFE) || 3000,
  refreshSecretKey: String(process.env.REFRESH_SECRET) || "refresh_super_secret_key",
  refreshSecretKeyLife: Number(process.env.REFRESH_SECRET_LIFE) || 86400,

  db: {
    host: String(process.env.DB_HOST) || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    database: String(process.env.DB_NAME) || "database",
    user: String(process.env.DB_USER) || "root",
    password: String(process.env.DB_PASS) || "my password"
  }
}
