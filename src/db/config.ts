import { Dialect,Model,Sequelize } from "sequelize/types";
import { SequelizeHooks } from "sequelize/types/hooks";

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD




export const sequelizeConnection = new Sequelize (dbName,dbUser,dbPassword, {
    host : dbHost,
    dialect: dbDriver,
    logging: false,
    
})