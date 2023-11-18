import { Request, Response } from "express";
import { UpdatePeripheralService } from "../services/UpdatePeripheralService";

class UpdatePeripheralController {
  async handle(request: Request, response: Response) {
    const { id, uid, vendor, status } = request.body;

    const updatePeripheralService = new UpdatePeripheralService();

    try {
      await updatePeripheralService.update({ id, uid, vendor, status }).then(() => {
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

export { UpdatePeripheralController };