import { getCustomRepository } from "typeorm";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class GetPeripheralDataService {
  async getData(id: string) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    const peripheral = await peripheralRepository.findOne(id);

    return peripheral;
  }
}

export { GetPeripheralDataService };