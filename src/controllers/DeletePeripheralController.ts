import { Request, Response } from "express";
import { MessagesPeripheral } from "../enums";
import { DeletePeripheralService } from "../services/DeletePeripheralService";

class DeletePeripheralController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const deletePeripheralService = new DeletePeripheralService();
    try {
      await deletePeripheralService.delete(id).then(() => {
        response.render("message", { message: MessagesPeripheral.DELETE });
      });
    } catch (err) {
      response.render("message", {
        message: `${MessagesPeripheral.DELETE_ERROR}: ${err.message}`,
      });
    }
  }
}

export { DeletePeripheralController };