"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductFeed = exports.findById = exports.deleteById = exports.update = exports.create = void 0;
const models_1 = require("../models");
const create = async (payload) => {
    const productFeed = await models_1.ProductFeed.create(payload);
    return productFeed;
};
exports.create = create;
const update = async (id, payload) => {
    const productFeed = await models_1.ProductFeed.findByPk(id);
    if (!productFeed) {
        throw new Error('product feed not found');
    }
    const updatedProductFeed = await productFeed.update(payload);
    return updatedProductFeed;
};
exports.update = update;
const deleteById = async (id) => {
    const deletedProductFeed = await models_1.ProductFeed.destroy({
        where: { id }
    });
    return !!deletedProductFeed;
};
exports.deleteById = deleteById;
const findById = async (id) => {
    const productFeed = await models_1.ProductFeed.findByPk(id);
    if (!productFeed) {
        throw new Error('product feed  not found');
    }
    return productFeed;
};
exports.findById = findById;
const getAllProductFeed = async () => {
    return models_1.ProductFeed.findAll();
};
exports.getAllProductFeed = getAllProductFeed;
