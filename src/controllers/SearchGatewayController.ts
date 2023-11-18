import { Request, Response } from "express";
import { SearchGatewayService } from "../services/SearchGatewayService";

class SearchGatewayController {
  async handle(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();

    const searchGatewayService = new SearchGatewayService();

    try {
      const gateway = await searchGatewayService.search(search);
      response.render("searchGateway", {
        gateway: gateway,
        search: search
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao buscar usuário: ${err.message}`
      });
    }
  }
}

export { SearchGatewayController };