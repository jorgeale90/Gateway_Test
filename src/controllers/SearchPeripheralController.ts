import { Request, Response } from "express";
import { MessagesPeripheral } from "../enums";
import { SearchPeripheralService } from "../services/SearchPeripheralService";

class SearchPeripheralController {
  async handle(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchPeripheralService = new SearchPeripheralService();
    try {
      const peripheral = await searchPeripheralService.search(search);
      response.render("searchPeripheral", {
        peripheral,
        search,
      });
    } catch (err) {
      response.render("message", { message: `${MessagesPeripheral.SEARCH_ERROR}: ${err.message}` });
    }
  }
}

export { SearchPeripheralController };