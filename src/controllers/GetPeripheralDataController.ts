import { Request, Response } from "express";
import { GetPeripheralDataService } from "../services/GetPeripheralDataService";

class GetPeripheralDataController {
  async handle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();
    const getPeripheralDataService = new GetPeripheralDataService();
    const peripheral = await getPeripheralDataService.getData(id);

    return response.render("editPeripheral", { peripheral });
  }
}

export { GetPeripheralDataController };