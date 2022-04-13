"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductDetails = exports.findById = exports.deleteById = exports.update = exports.create = void 0;
const models_1 = require("../models");
const create = async (payload) => {
    const productDetails = await models_1.ProductDetails.create(payload);
    return productDetails;
};
exports.create = create;
const update = async (id, payload) => {
    const productDetails = await models_1.ProductDetails.findByPk(id);
    if (!productDetails) {
        throw new Error('product details not found');
    }
    const updatedProducDetails = await productDetails.update(payload);
    return updatedProducDetails;
};
exports.update = update;
const deleteById = async (id) => {
    const deletedProductDetails = await models_1.ProductDetails.destroy({
        where: { id }
    });
    return !!deletedProductDetails;
};
exports.deleteById = deleteById;
const findById = async (id) => {
    const productDetails = await models_1.ProductDetails.findByPk(id);
    if (!productDetails) {
        throw new Error('product details not found');
    }
    return productDetails;
};
exports.findById = findById;
const getAllProductDetails = async () => {
    return models_1.ProductDetails.findAll();
};
exports.getAllProductDetails = getAllProductDetails;
