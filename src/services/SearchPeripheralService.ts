import { getCustomRepository } from "typeorm";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class SearchPeripheralService {
  async search(search: string) {
    if (!search) {
      throw new Error("Por favor preencha o campo de busca");
    }

    const peripheralRepository = getCustomRepository(PeripheralRepository);

    const peripheral = await peripheralRepository
        .createQueryBuilder()
        .where("uid like :search", { search: `%${search}%` })
        .orWhere("vendor like :search", { search: `%${search}%` })
        .orWhere("status like :search", { search: `%${search}%` })
        .getMany();

    return peripheral;

  }
}

export { SearchPeripheralService };