import { Request, Response } from "express";
import { DeleteGatewayService } from "../services/DeleteGatewayService";

class DeleteGatewayController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteGatewayService = new DeleteGatewayService();

    try {
      await deleteGatewayService.delete(id).then(() => {
        response.render("message", {
          message: "Gateway deleted with success"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error deleting Gateway: ${err.message}`
      });
    }
  }
}

export { DeleteGatewayController };