import { Router } from "express";
import { CreatePeripheralController } from "../controllers/CreatePeripheralController";
import { DeletePeripheralController } from "../controllers/DeletePeripheralController";
import { GetPeripheralDataController } from "../controllers/GetPeripheralDataController";
import { ListPeripheralController } from "../controllers/ListPeripheralController";
import { SearchPeripheralController } from "../controllers/SearchPeripheralController";
import { UpdatePeripheralController } from "../controllers/UpdatePeripheralController";

const routerPeripheral = Router();

const createPeripheralController = new CreatePeripheralController();
const searchPeripheralController = new SearchPeripheralController();
const updatePeripheralController = new UpdatePeripheralController();
const deletePeripheralController = new DeletePeripheralController();
const listPeripheralController = new ListPeripheralController();
const getPeripheralDataController = new GetPeripheralDataController();

routerPeripheral.get("/peripheral", listPeripheralController.handle);
routerPeripheral.get("/addPeripheral", (request, response) => {
    response.render("addPeripheral");
});
routerPeripheral.post("/addPeripheral", createPeripheralController.handle);
routerPeripheral.get("/searchPeripheral", searchPeripheralController.handle);
routerPeripheral.get("/editPeripheral", getPeripheralDataController.handle);
routerPeripheral.post("/edit-peripheral", updatePeripheralController.handle);
routerPeripheral.post("/delete-peripheral", deletePeripheralController.handle);

export { routerPeripheral };