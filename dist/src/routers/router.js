"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_router_1 = require("./product-router");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/", product_router_1.producrRouter);
//# sourceMappingURL=router.js.map