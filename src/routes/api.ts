import { Request, Response, Router } from "express";
import { Messages } from "../enums";
import { IGateway, IPeripheral } from "../interface";
import {
    CreateGatewayService,
    CreatePeripheralService,
    DeleteGatewayService,
    DeletePeripheralService,
    GetGatewayDataService,
    GetPeripheralDataService,
    ListGatewayService,
    SearchGatewayService,
    SearchPeripheralService,
    UpdateGatewayService,
    UpdatePeripheralService,
} from "../services/GatewayService";
import { ListPeripheralService } from "../services/ListPeripheralService";

const api = Router();

//#region GATEWAYS
// LIST
api.get("/gateway", async function (req: Request, res: Response) {
    const service = new ListGatewayService();
    const data = await service.list();
    res.json({ "message": Messages.SUCCESS, data });
});

// SEARCH
api.get("/gateway/search", async function (req: Request, res: Response) {
    const { ip, serial, name }: IGateway = req.query;
    const params = ip ?? serial ?? name;
    const service = new SearchGatewayService();
    const data = await service.search(params);
    res.json({ "message": Messages.SUCCESS, data });
});

// GET BY ID
api.get("/gateway/:id", async function (req: Request, res: Response) {
    const { id } = req.params;
    const service = new GetGatewayDataService();
    const data = await service.getData(id);
    res.json({ "message": Messages.SUCCESS, data });
});

// GET BY SERIAL WHIT DEVICES
api.get("/gateway/serial/:serial", async function (req: Request, res: Response) {
    const { serial } = req.params;

    const gatewayService = new GetGatewayDataService();
    const peripheralService = new GetPeripheralDataService();

    try {
        const gatewayData = await gatewayService.getDataBySerial(serial);
        const peripheralData = await peripheralService.getAllPeripheralsByGatewayId(gatewayData.id);
        const data = {
            gateway: gatewayData,
            peripherals: peripheralData
        };
        res.json({ "message": Messages.SUCCESS, data });
    } catch (error) {
        res.status(500).json({ "message": Messages.ERROR, "error": error.message });
    }
});

// CREATE
api.post("/gateway", async function (req: Request, res: Response) {
    const params: IGateway = req.body;
    const service = new CreateGatewayService();
    const data = await service.create(params);
    res.json({ "message": Messages.SUCCESS, data });
});

// UPDATE
api.put("/gateway/:id", async function (req: Request, res: Response) {
    const { serial, name, ip }: IGateway = req.body;
    const { id }: IGateway = req.params;
    const service = new UpdateGatewayService();
    const data = await service.updateById({ id, serial, name, ip });
    res.json({ "message": Messages.SUCCESS, data });
});

// DELETE BY ID
api.delete("/gateway/:id", async function (req: Request, res: Response) {
    // here we will have logic to delete a user by a given user id
    const { id }: IGateway = req.params;
    const service = new DeleteGatewayService();
    const data = await service.delete(id);
    res.json({ "message": Messages.SUCCESS, data });
});
//#endregion GATEWAYS

//#region PERIPHERAL
// LIST
api.get("/peripheral", async function (req: Request, res: Response) {
    const service = new ListPeripheralService();
    const data = await service.list();
    res.json({ "message": Messages.SUCCESS, data });
});

// SEARCH
api.get("/peripheral/search", async function (req: Request, res: Response) {
    const { uid, vendor, status }: IPeripheral = req.query;
    const params = `${uid}` ?? vendor ?? status;
    const service = new SearchPeripheralService();
    const data = await service.search(params);
    res.json({ "message": Messages.SUCCESS, data });
});

// GET BY ID
api.get("/peripheral/:id", async function (req: Request, res: Response) {
    const { id } = req.params;
    const service = new GetPeripheralDataService();
    const data = await service.getData(id);
    res.json({ "message": Messages.SUCCESS, data });
});

// CREATE
api.post("/peripheral", async function (req: Request, res: Response) {
    const params: IPeripheral = req.body;
    const service = new CreatePeripheralService();
    const data = !!params?.gatewayId ? await service.create(params) : await service.createWithGateway(params);
    res.json({ "message": Messages.SUCCESS, data });
});

// UPDATE
api.put("/peripheral/:id", async function (req: Request, res: Response) {
    const { uid, vendor, status, gateway, gatewayId }: IPeripheral = req.body;
    const { id }: IPeripheral = req.params;
    const service = new UpdatePeripheralService();
    const data = await service.updateById({ uid, vendor, status, gateway, gatewayId });
    res.json({ "message": Messages.SUCCESS, data });
});

// DELETE BY ID
api.delete("/peripheral/:id", async function (req: Request, res: Response) {
    const { id }: IPeripheral = req.params;
    const service = new DeletePeripheralService();
    const data = await service.delete(id);
    res.json({ "message": Messages.SUCCESS, data });
});
//#endregion PERIPHERAL

export { api };