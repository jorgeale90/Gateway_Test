import { Request, Response } from "express";
import { DeletePeripheralService } from "../services/DeletePeripheralService";

class DeletePeripheralController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deletePeripheralService = new DeletePeripheralService();

    try {
      await deletePeripheralService.delete(id).then(() => {
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

export { DeletePeripheralController };