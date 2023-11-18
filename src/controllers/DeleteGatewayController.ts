import { Request, Response } from "express";
import { DeleteGatewayService } from "../services/DeleteGatewayService";

class DeleteGatewayController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteGatewayService = new DeleteGatewayService();

    try {
      await deleteGatewayService.delete(id).then(() => {
        response.render("message", {
          message: "Usuário deletado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao deletar usuário: ${err.message}`
      });
    }
  }
}

export { DeleteGatewayController };