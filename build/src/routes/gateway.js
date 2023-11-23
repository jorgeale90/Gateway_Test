"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerGateway = void 0;
const express_1 = require("express");
const CreateGatewayController_1 = require("../controllers/CreateGatewayController");
const DeleteGatewayController_1 = require("../controllers/DeleteGatewayController");
const GetGatewayDataController_1 = require("../controllers/GetGatewayDataController");
const ListGatewayController_1 = require("../controllers/ListGatewayController");
const SearchGatewayController_1 = require("../controllers/SearchGatewayController");
const UpdateGatewayController_1 = require("../controllers/UpdateGatewayController");
const routerGateway = express_1.Router();
exports.routerGateway = routerGateway;
// Gateway
const createGatewayController = new CreateGatewayController_1.CreateGatewayController();
const searchGatewayController = new SearchGatewayController_1.SearchGatewayController();
const updateGatewayController = new UpdateGatewayController_1.UpdateGatewayController();
const deleteGatewayController = new DeleteGatewayController_1.DeleteGatewayController();
const listGatewayController = new ListGatewayController_1.ListGatewayController();
const getGatewayDataController = new GetGatewayDataController_1.GetGatewayDataController();
// Gateway
routerGateway.get("/", listGatewayController.handle);
routerGateway.get("/gateway", listGatewayController.handle);
routerGateway.get("/addGateway", (request, response) => {
    response.render("addGateway");
});
routerGateway.post("/addGateway", createGatewayController.handle);
routerGateway.get("/searchGateway", searchGatewayController.handle);
routerGateway.get("/editGateway", getGatewayDataController.handle);
routerGateway.post("/edit-gateway", updateGatewayController.handle);
routerGateway.post("/delete-gateway", deleteGatewayController.handle);
