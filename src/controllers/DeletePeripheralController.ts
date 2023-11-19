import { Request, Response } from "express";
import { DeletePeripheralService } from "../services/DeletePeripheralService";

class DeletePeripheralController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deletePeripheralService = new DeletePeripheralService();

    try {
      await deletePeripheralService.delete(id).then(() => {
        response.render("message", {
          message: "Peripheral deleted with success"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error deleting Peripheral: ${err.message}`
      });
    }
  }
}

export { DeletePeripheralController };