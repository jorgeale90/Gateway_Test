import { getCustomRepository } from "typeorm";
import { GatewayRepository } from "../repositories/GatewayRepository";

class ListGatewayService {
  async list() {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    return await gatewayRepository.find();
  }
}

export { ListGatewayService };