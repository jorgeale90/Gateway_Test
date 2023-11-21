import { Router } from "express";
import { CreateGatewayController } from "../controllers/CreateGatewayController";
import { DeleteGatewayController } from "../controllers/DeleteGatewayController";
import { GetGatewayDataController } from "../controllers/GetGatewayDataController";
import { ListGatewayController } from "../controllers/ListGatewayController";
import { SearchGatewayController } from "../controllers/SearchGatewayController";
import { UpdateGatewayController } from "../controllers/UpdateGatewayController";

const routerGateway = Router();

// Gateway
const createGatewayController = new CreateGatewayController();
const searchGatewayController = new SearchGatewayController();
const updateGatewayController = new UpdateGatewayController();
const deleteGatewayController = new DeleteGatewayController();
const listGatewayController = new ListGatewayController();
const getGatewayDataController = new GetGatewayDataController();

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

export { routerGateway };
