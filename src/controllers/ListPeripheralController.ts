import { Request, Response } from "express";
import { ListPeripheralService } from "../services/ListPeripheralService";

class ListPeripheralController {
  async handle(request: Request, response: Response) {
    const listPeripheralService = new ListPeripheralService();

    const peripheral = await listPeripheralService.list();

    return response.render("listPeripheral", {
      peripheral: peripheral
    });
  }
}

export { ListPeripheralController };