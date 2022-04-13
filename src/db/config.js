"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnection = void 0;
const types_1 = require("sequelize/types");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
exports.sequelizeConnection = new types_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    logging: false,
});
