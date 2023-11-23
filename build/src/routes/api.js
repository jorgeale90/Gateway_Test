"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = require("express");
const GatewayService_1 = require("../services/GatewayService");
const ListPeripheralService_1 = require("../services/ListPeripheralService");
const api = express_1.Router();
exports.api = api;
//#region GATEWAYS
// LIST
api.get("/gateway", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new GatewayService_1.ListGatewayService();
        const data = yield service.list();
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// SEARCH
api.get("/gateway/search", function (req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { ip, serial, name } = req.query;
        const params = (_a = ip !== null && ip !== void 0 ? ip : serial) !== null && _a !== void 0 ? _a : name;
        const service = new GatewayService_1.SearchGatewayService();
        const data = yield service.search(params);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// GET BY ID
api.get("/gateway/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const service = new GatewayService_1.GetGatewayDataService();
        const data = yield service.getData(id);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// GET BY SERIAL WHIT DEVICES
api.get("/gateway/serial/:serial", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { serial } = req.params;
        const gatewayService = new GatewayService_1.GetGatewayDataService();
        const peripheralService = new GatewayService_1.GetPeripheralDataService();
        try {
            const gatewayData = yield gatewayService.getDataBySerial(serial);
            const peripheralData = yield peripheralService.getAllPeripheralsByGatewayId(gatewayData.id);
            const data = {
                gateway: gatewayData,
                peripherals: peripheralData
            };
            res.json({ "message": "success" /* SUCCESS */, data });
        }
        catch (error) {
            res.status(500).json({ "message": "error" /* ERROR */, "error": error.message });
        }
    });
});
// CREATE
api.post("/gateway", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = req.body;
        const service = new GatewayService_1.CreateGatewayService();
        const data = yield service.create(params);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// UPDATE
api.put("/gateway/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { serial, name, ip } = req.body;
        const { id } = req.params;
        const service = new GatewayService_1.UpdateGatewayService();
        const data = yield service.updateById({ id, serial, name, ip });
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// DELETE BY ID
api.delete("/gateway/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // here we will have logic to delete a user by a given user id
        const { id } = req.params;
        const service = new GatewayService_1.DeleteGatewayService();
        const data = yield service.delete(id);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
//#endregion GATEWAYS
//#region PERIPHERAL
// LIST
api.get("/peripheral", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new ListPeripheralService_1.ListPeripheralService();
        const data = yield service.list();
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// SEARCH
api.get("/peripheral/search", function (req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { uid, vendor, status } = req.query;
        const params = (_b = (_a = `${uid}`) !== null && _a !== void 0 ? _a : vendor) !== null && _b !== void 0 ? _b : status;
        const service = new GatewayService_1.SearchPeripheralService();
        const data = yield service.search(params);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// GET BY ID
api.get("/peripheral/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const service = new GatewayService_1.GetPeripheralDataService();
        const data = yield service.getData(id);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// CREATE
api.post("/peripheral", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = req.body;
        const service = new GatewayService_1.CreatePeripheralService();
        const data = !!(params === null || params === void 0 ? void 0 : params.gatewayId) ? yield service.create(params) : yield service.createWithGateway(params);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// UPDATE
api.put("/peripheral/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { uid, vendor, status, gateway, gatewayId } = req.body;
        const { id } = req.params;
        const service = new GatewayService_1.UpdatePeripheralService();
        const data = yield service.updateById({ uid, vendor, status, gateway, gatewayId });
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
// DELETE BY ID
api.delete("/peripheral/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const service = new GatewayService_1.DeletePeripheralService();
        const data = yield service.delete(id);
        res.json({ "message": "success" /* SUCCESS */, data });
    });
});
