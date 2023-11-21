import { Request, Response } from "express";
import { MessagesGateway } from "../enums";
import { SearchGatewayService } from "../services/SearchGatewayService";

class SearchGatewayController {
  async handle(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchGatewayService = new SearchGatewayService();
    try {
      const gateway = await searchGatewayService.search(search);
      response.render("searchGateway", {
        gateway,
        search,
      });
    } catch (err) {
      response.render("message", { message: `${MessagesGateway.SEARCH_ERROR}: ${err.message}` });
    }
  }
}

export { SearchGatewayController };