import { Request, Response } from "express";
import { MessagesGateway } from "../enums";
import { UpdateGatewayService } from "../services/UpdateGatewayService";
class UpdateGatewayController {
  async handle(request: Request, response: Response) {
    const { id, serial, name, ip } = request.body;
    const updateGatewayService = new UpdateGatewayService();
    try {
      await updateGatewayService.update({ id, serial, name, ip }).then(() => {
        response.render("message", { message: MessagesGateway.UPDATE });
      });
    } catch (err) {
      response.render("message", { message: `${MessagesGateway.UPDATE_ERROR}: ${err.message}` });
    }
  }
}

export { UpdateGatewayController };