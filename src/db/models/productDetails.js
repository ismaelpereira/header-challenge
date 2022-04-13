"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const config_1 = require("../config");
class ProductDetails extends types_1.Model {
}
ProductDetails.init({
    id: {
        type: types_1.DataTypes.STRING,
        primaryKey: true,
    },
    referenceId: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    SKU: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    groupId: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    categories: {
        type: types_1.DataTypes.ARRAY,
        allowNull: false,
    },
    brand: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: types_1.DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: types_1.DataTypes.INTEGER,
        allowNull: false,
    },
    imgUrl: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    inStock: {
        type: types_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    keywords: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    displayPrice: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    gender: { type: types_1.DataTypes.STRING,
        allowNull: false, },
    surface: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    bestFor: {
        type: types_1.DataTypes.ARRAY,
        allowNull: false,
    },
    colors: {
        type: types_1.DataTypes.ARRAY,
        allowNull: false,
    },
    cushioning: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    support: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_name: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_inStock: {
        type: types_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_enUS_url: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_imgUrl: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_displayPrice: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_name: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_inStock: {
        type: types_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_enGB_url: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_imgUrl: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_displayPrice: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_name: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_inStock: {
        type: types_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_frFR_url: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_imgUrl: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_displayPrice: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_name: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_inStock: {
        type: types_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_deDE_url: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_imgUrl: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_displayPrice: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: config_1.sequelizeConnection
});
exports.default = ProductDetails;
