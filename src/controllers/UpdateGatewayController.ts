import { Request, Response } from "express";
import { UpdateGatewayService } from "../services/UpdateGatewayService";

class UpdateGatewayController {
  async handle(request: Request, response: Response) {
    const { id, serial, name, ip } = request.body;

    const updateGatewayService = new UpdateGatewayService();

    try {
      await updateGatewayService.update({ id, serial, name, ip }).then(() => {
        response.render("message", {
          message: "Usuário atualizado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao atualizar usuário: ${err.message}`
      });
    }

  }
}

export { UpdateGatewayController };