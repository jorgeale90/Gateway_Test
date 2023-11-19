import { Request, Response } from "express";
import { UpdateGatewayService } from "../services/UpdateGatewayService";

class UpdateGatewayController {
  async handle(request: Request, response: Response) {
    const { id, serial, name, ip } = request.body;

    const updateGatewayService = new UpdateGatewayService();

    try {
      await updateGatewayService.update({ id, serial, name, ip }).then(() => {
        response.render("message", {
          message: "Gateway updated with success"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error updating Gateway: ${err.message}`
      });
    }

  }
}

export { UpdateGatewayController };