import { getCustomRepository } from "typeorm";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class ListPeripheralService {
  async list() {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    const peripheral = await peripheralRepository.find();

    return peripheral;
  }
}

export { ListPeripheralService };