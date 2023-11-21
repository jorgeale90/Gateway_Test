import { Request, Response } from "express";
import { MessagesGateway } from "../enums";
import { CreateGatewayService } from "../services/CreateGatewayService";

class CreateGatewayController {
  async handle(request: Request, response: Response) {
    const { serial, name, ip } = request.body;
    const createGatewayService = new CreateGatewayService();
    try {
      await createGatewayService.create({
        serial,
        name,
        ip,
      }).then(() => {
        response.render("message", { message: MessagesGateway.REGISTER });
      });
    } catch (err) {
      response.render("message", { message: `${MessagesGateway.REGISTER_ERROR}: ${err.message}` });
    }

  }
}

export { CreateGatewayController };