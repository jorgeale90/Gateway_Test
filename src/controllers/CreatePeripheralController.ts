import { Request, Response } from "express";
import { MessagesPeripheral } from "../enums";
import { CreatePeripheralService } from "../services/CreatePeripheralService";

class CreatePeripheralController {
  async handle(request: Request, response: Response) {
    const { uid, vendor, status, gatewayId } = request.body;
    const createPeripheralService = new CreatePeripheralService();
    try {
      await createPeripheralService.create({
        uid,
        vendor,
        status,
        gatewayId,
      }).then(() => {
        response.render("message", { message: MessagesPeripheral.REGISTER });
      });
    } catch (err) {
      response.render("message", {
        message: `${MessagesPeripheral.REGISTER_ERROR}: ${err.message}`,
      });
    }

  }
}

export { CreatePeripheralController };