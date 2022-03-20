require('dotenv').config();

const {
  DATABASE,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};