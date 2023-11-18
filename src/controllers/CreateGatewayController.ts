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
          message: "Usuário cadastrado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao cadastrar usuário: ${err.message}`
      });
    }

  }
}

export { CreateGatewayController };