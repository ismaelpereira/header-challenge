"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDomains = exports.findById = exports.deleteById = exports.update = exports.create = void 0;
const models_1 = require("../models");
const create = async (payload) => {
    const domain = await models_1.Domain.create(payload);
    return domain;
};
exports.create = create;
const update = async (id, payload) => {
    const domain = await models_1.Domain.findByPk(id);
    if (!domain) {
        throw new Error('domain not found');
    }
    const updatedDomain = await domain.update(payload);
    return updatedDomain;
};
exports.update = update;
const deleteById = async (id) => {
    const deletedDomain = await models_1.Domain.destroy({
        where: { id }
    });
    return !!deletedDomain;
};
exports.deleteById = deleteById;
const findById = async (id) => {
    const domain = await models_1.Domain.findByPk(id);
    if (!domain) {
        throw new Error('domain not found');
    }
    return domain;
};
exports.findById = findById;
const getAllDomains = async () => {
    return models_1.Domain.findAll();
};
exports.getAllDomains = getAllDomains;
