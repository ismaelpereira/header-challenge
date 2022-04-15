"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const productFeed_1 = __importDefault(require("./productFeed"));
class ProductDetails extends sequelize_1.Model {
}
ProductDetails.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    referenceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: productFeed_1.default,
            key: "id"
        }
    },
    SKU: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    groupId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categories: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    imgUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    inStock: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    keywords: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayPrice: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gender: { type: sequelize_1.DataTypes.STRING,
        allowNull: false, },
    surface: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bestFor: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    colors: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cushioning: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    support: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_inStock: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_enUS_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_imgUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_displayPrice: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_inStock: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_enGB_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_imgUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_displayPrice: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_inStock: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_frFR_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_imgUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_displayPrice: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_inStock: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_deDE_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_imgUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_displayPrice: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: config_1.sequelizeConnection
});
exports.default = ProductDetails;
