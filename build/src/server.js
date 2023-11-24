"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
require("./database");
const routes_1 = require("./routes");
const api_1 = require("./routes/api");
const HTTP_PORT = 3000;
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(api_1.api, routes_1.routerPeripheral, routes_1.routerGateway);
exports.app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({ error: err.message });
    }
    return response.status(500).json({ status: "error", message: "Internal Server Error" /* SERVER_ERROR */ });
});
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
exports.app.set("view engine", "ejs");
exports.app.set("views", path_1.default.join(__dirname, "..", "views"));
exports.server = exports.app.listen(HTTP_PORT, () => console.log(`${"Server is running at port" /* SERVER_RUNNING */} ${HTTP_PORT}`));
exports.server.on("error", console.error);
