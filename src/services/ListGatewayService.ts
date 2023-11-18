import { getCustomRepository } from "typeorm";
import { GatewayRepository } from "../repositories/GatewayRepository";

class ListGatewayService {
  async list() {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gateway = await gatewayRepository.find();

    return gateway;
  }
}

export { ListGatewayService };