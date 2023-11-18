import { Request, Response } from "express";
import { ListGatewayService } from "../services/ListGatewayService";

class ListGatewayController {
  async handle(request: Request, response: Response) {
    const listGatewayService = new ListGatewayService();

    const gateway = await listGatewayService.list();

    return response.render("listGateway", {
      gateway: gateway
    });
  }
}

export { ListGatewayController };