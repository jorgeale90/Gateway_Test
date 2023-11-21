import { Request, Response } from "express";
import { MessagesGateway } from "../enums";
import { DeleteGatewayService } from "../services/DeleteGatewayService";

class DeleteGatewayController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const deleteGatewayService = new DeleteGatewayService();
    try {
      await deleteGatewayService.delete(id).then(() => {
        response.render("message", { message: MessagesGateway.DELETE });
      });
    } catch (err) {
      response.render("message", {
        message: `${MessagesGateway.DELETE_ERROR}: ${err.message}`,
      });
    }
  }
}

export { DeleteGatewayController };