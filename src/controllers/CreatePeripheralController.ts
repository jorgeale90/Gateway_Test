import { Request, Response } from "express";
import { CreatePeripheralService } from "../services/CreatePeripheralService";

class CreatePeripheralController {
  async handle(request: Request, response: Response) {
    const { uid, vendor, status } = request.body;

    const createPeripheralService = new CreatePeripheralService();

    try {
      await createPeripheralService.create({
        uid,
        vendor,
        status
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

export { CreatePeripheralController };