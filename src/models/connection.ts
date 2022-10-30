import mysql from "mysql2";

import config from "../utils/config";

const { db } = config; 

const connection = mysql.createConnection({
  ...db,
  multipleStatements: true,
});

connection.query(
  `CREATE TABLE IF NOT EXISTS users 
    (pkey SERIAL PRIMARY KEY, id VARCHAR(128) UNIQUE, password VARCHAR(72), created_time DATETIME DEFAULT NOW());`
);

connection.query(
  `CREATE TABLE IF NOT EXISTS tokens (token VARCHAR(256), expiration DATETIME)`
);

connection.query(
  `CREATE TABLE IF NOT EXISTS files 
    (pkey SERIAL PRIMARY KEY, id VARCHAR(64) UNIQUE, name VARCHAR(256), extension VARCHAR(128), mime_type VARCHAR (256), 
    size INTEGER, created_time DATETIME DEFAULT NOW())`
);

export default connection;