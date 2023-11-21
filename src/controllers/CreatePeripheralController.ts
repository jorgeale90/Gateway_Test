import { Request, Response } from "express";
import { CreatePeripheralService } from "../services/CreatePeripheralService";

class CreatePeripheralController {
  async handle(request: Request, response: Response) {
    const { uid, vendor, status, gateway } = request.body;

    const createPeripheralService = new CreatePeripheralService();

    try {
      await createPeripheralService.create({
        uid,
        vendor,
        status,
        gateway
      }).then(() => {
        response.render("message", {
          message: "Registered Peripheral with success"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error in Peripheral registration: ${err.message}`
      });
    }

  }
}

export { CreatePeripheralController };