"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productFeed = (0, express_1.Router)();
productFeed.get("domain/feed/", () => {
});
productFeed.get("domain/feed/:id", () => {
});
