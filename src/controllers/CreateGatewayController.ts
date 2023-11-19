import { Request, Response } from "express";
import { CreateGatewayService } from "../services/CreateGatewayService";

class CreateGatewayController {
  async handle(request: Request, response: Response) {
    const { serial, name, ip } = request.body;

    const createGatewayService = new CreateGatewayService();

    try {
      await createGatewayService.create({
        serial,
        name,
        ip
      }).then(() => {
        response.render("message", {
          message: "Registered Gateway with success"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error in Gateway registration: ${err.message}`
      });
    }

  }
}

export { CreateGatewayController };