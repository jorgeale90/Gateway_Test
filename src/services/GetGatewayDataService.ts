import { getCustomRepository } from "typeorm";
import { GatewayRepository } from "../repositories/GatewayRepository";

class GetGatewayDataService {
  async getData(id: string) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gateway = await gatewayRepository.findOne(id);

    return gateway;
  }
}

export { GetGatewayDataService };