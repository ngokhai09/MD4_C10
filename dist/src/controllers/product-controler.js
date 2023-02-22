"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const products_model_1 = require("../models/products-model");
class ProductController {
    constructor() {
        this.showCreate = (req, res) => {
            res.render("products/create");
        };
        this.create = (req, res) => {
            let product = {
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity,
            };
            products_model_1.Product.insertMany(product);
            res.redirect("/");
        };
    }
    async index(req, res) {
        let products = await products_model_1.Product.find();
        res.render("products/list", { data: products, title: "Demo MongoDB" });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product-controler.js.map