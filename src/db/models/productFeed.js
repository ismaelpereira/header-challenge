"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const domain_1 = __importDefault(require("./domain"));
const types_1 = require("sequelize/types");
const config_1 = require("../config");
class ProductFeed extends types_1.Model {
}
ProductFeed.init({
    id: {
        type: types_1.DataTypes.STRING,
        defaultValue: crypto.randomUUID(),
        primaryKey: true
    },
    cid: {
        type: types_1.DataTypes.STRING,
        defaultValue: crypto.randomUUID(),
        allowNull: false,
    },
    name: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    owner: {
        type: types_1.DataTypes.STRING,
        defaultValue: crypto.randomUUID(),
        allowNull: false,
    },
    parentID: {
        type: types_1.DataTypes.STRING,
        defaultValue: crypto.randomUUID(),
        allowNull: true,
    },
    statusID: {
        type: types_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    typeID: {
        type: types_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    lookupKeys: {
        type: types_1.DataTypes.STRING,
        allowNull: true
    },
    domainID: {
        type: types_1.DataTypes.STRING,
        references: {
            model: domain_1.default,
            key: "id"
        }
    },
    virtualKey: {
        type: types_1.DataTypes.STRING,
        allowNull: true
    },
    rows: {
        type: types_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: config_1.sequelizeConnection,
});
ProductFeed.belongsTo(domain_1.default);
exports.default = ProductFeed;
