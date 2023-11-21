import { getCustomRepository } from "typeorm";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class GetPeripheralDataService {
  async getData(id: string) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    return await peripheralRepository.findOne(id);
  }
}

export { GetPeripheralDataService };