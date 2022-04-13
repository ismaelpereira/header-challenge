"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const domain_1 = require("./db/dal/domain");
const addDomain_1 = require("./db/scripts/addDomain");
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log("API Listening on port 4000");
});
(0, addDomain_1.addDomain)();
const domains = (0, domain_1.getAllDomains)();
console.log(domains);
