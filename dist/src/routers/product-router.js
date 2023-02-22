"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producrRouter = void 0;
const express_1 = require("express");
const product_controler_1 = require("../controllers/product-controler");
let producrRouter = (0, express_1.Router)();
exports.producrRouter = producrRouter;
let productController = new product_controler_1.ProductController();
producrRouter.get("/", productController.index);
producrRouter.get("/create", productController.showCreate);
producrRouter.post("/create", productController.create);
//# sourceMappingURL=product-router.js.map