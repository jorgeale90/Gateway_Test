import { getCustomRepository } from "typeorm";
import { GatewayRepository } from "../repositories/GatewayRepository";

class GetGatewayDataService {
  async getData(id: string) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    return await gatewayRepository.findOne(id);
  }

  async getDataBySerial(serial: string) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    return await gatewayRepository.findOne({ where: { serial: serial } });
  }

}

export { GetGatewayDataService };