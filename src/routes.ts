import { Router } from "express";
// Gateway
import { CreateGatewayController } from "./controllers/CreateGatewayController";
import { DeleteGatewayController } from "./controllers/DeleteGatewayController";
import { GetGatewayDataController } from "./controllers/GetGatewayDataController";
import { ListGatewayController } from "./controllers/ListGatewayController";
import { SearchGatewayController } from "./controllers/SearchGatewayController";
import { UpdateGatewayController } from "./controllers/UpdateGatewayController";
// Peripheral
import { CreatePeripheralController } from "./controllers/CreatePeripheralController";
import { DeletePeripheralController } from "./controllers/DeletePeripheralController";
import { GetPeripheralDataController } from "./controllers/GetPeripheralDataController";
import { ListPeripheralController } from "./controllers/ListPeripheralController";
import { SearchPeripheralController } from "./controllers/SearchPeripheralController";
import { UpdatePeripheralController } from "./controllers/UpdatePeripheralController";

const router = Router();
// Gateway
const createGatewayController = new CreateGatewayController();
const searchGatewayController = new SearchGatewayController();
const updateGatewayController = new UpdateGatewayController();
const deleteGatewayController = new DeleteGatewayController();
const listGatewayController = new ListGatewayController();
const getGatewayDataController = new GetGatewayDataController();
// Peripheral
const createPeripheralController = new CreatePeripheralController();
const searchPeripheralController = new SearchPeripheralController();
const updatePeripheralController = new UpdatePeripheralController();
const deletePeripheralController = new DeletePeripheralController();
const listPeripheralController = new ListPeripheralController();
const getPeripheralDataController = new GetPeripheralDataController();

router.get("/", listGatewayController.handle);

// Gateway
router.get("/gateway", listGatewayController.handle);

router.get("/addGateway", (request, response) => {
  response.render("addGateway");
});

router.post("/addGateway", createGatewayController.handle);

router.get("/searchGateway", searchGatewayController.handle);

router.get("/editGateway", getGatewayDataController.handle);

router.post("/edit-gateway", updateGatewayController.handle);

router.post("/delete-gateway", deleteGatewayController.handle);

// Peripheral
router.get("/peripheral", listPeripheralController.handle);

router.get("/addPeripheral", (request, response) => {
  response.render("addPeripheral");
});

router.post("/addPeripheral", createPeripheralController.handle);

router.get("/searchPeripheral", searchPeripheralController.handle);

router.get("/editPeripheral", getPeripheralDataController.handle);

router.post("/edit-peripheral", updatePeripheralController.handle);

router.post("/delete-peripheral", deletePeripheralController.handle);

export { router };
