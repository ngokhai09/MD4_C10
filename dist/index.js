"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./src/routers/router");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
mongoose_1.default
    .connect("mongodb+srv://root:Blog%40123456@cluster0.f2ybqzw.mongodb.net/DemoC10?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connect Success");
})
    .catch((err) => {
    console.log(err);
});
app.use("", router_1.router);
app.listen(PORT, () => {
    console.log("App running on: http://localhost:" + PORT);
});
//# sourceMappingURL=index.js.map