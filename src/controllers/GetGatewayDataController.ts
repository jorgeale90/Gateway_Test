import { Request, Response } from "express";
import { GetGatewayDataService } from "../services/GetGatewayDataService";

class GetGatewayDataController {
  async handle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();
    const getGatewayDataService = new GetGatewayDataService();
    const gateway = await getGatewayDataService.getData(id);

    return response.render("editGateway", { gateway });
  }
}

export { GetGatewayDataController };