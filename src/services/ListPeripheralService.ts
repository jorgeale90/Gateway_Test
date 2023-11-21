import { getCustomRepository } from "typeorm";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class ListPeripheralService {
  async list() {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    return await peripheralRepository.find();
  }
}

export { ListPeripheralService };