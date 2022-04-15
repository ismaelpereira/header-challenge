"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = __importDefault(require("./domain"));
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class ProductFeed extends sequelize_1.Model {
}
ProductFeed.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    cid: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    owner: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    parentID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    statusID: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    typeID: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    lookupKeys: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    domainID: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: domain_1.default,
            key: "id"
        }
    },
    virtualKey: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    rows: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: config_1.sequelizeConnection,
});
exports.default = ProductFeed;
