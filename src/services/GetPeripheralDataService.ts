import { getCustomRepository } from "typeorm";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class GetPeripheralDataService {
  async getData(id: string) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    return await peripheralRepository.findOne(id);
  }

  async getAllPeripheralsByGatewayId(gateway: string) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    return await peripheralRepository.find({ where: { gateway: gateway } });
  }
}

export { GetPeripheralDataService };