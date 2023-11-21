import { Request, Response } from "express";
import { MessagesPeripheral } from "../enums";
import { UpdatePeripheralService } from "../services/UpdatePeripheralService";

class UpdatePeripheralController {
  async handle(request: Request, response: Response) {
    const { id, uid, vendor, status } = request.body;
    const updatePeripheralService = new UpdatePeripheralService();
    try {
      await updatePeripheralService.update({ id, uid, vendor, status }).then(() => {
        response.render("message", { message: MessagesPeripheral.UPDATE });
      });
    } catch (err) {
      response.render("message", { message: `${MessagesPeripheral.UPDATE_ERROR}: ${err.message}` });
    }
  }
}

export { UpdatePeripheralController };