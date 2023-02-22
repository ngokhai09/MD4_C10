"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const products_model_1 = require("src/models/products-model");
let categoryRouter = (0, express_1.Router)();
exports.categoryRouter = categoryRouter;
categoryRouter.get("/", async (req, res) => {
    let products = await products_model_1.Product.find();
    res.render("products/list", { data: products, title: "Demo MongoDB" });
});
categoryRouter.get("/create", (req, res) => {
    res.render("products/create");
});
categoryRouter.post("/create", (req, res) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
    };
    products_model_1.Product.insertMany(product);
    res.redirect("/");
});
//# sourceMappingURL=category-router.js.map