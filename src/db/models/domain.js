"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class Domain extends sequelize_1.Model {
}
Domain.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    cid: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    domain: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: config_1.sequelizeConnection,
    paranoid: true
});
exports.default = Domain;
