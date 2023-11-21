import { getCustomRepository } from "typeorm";
import { Messages } from "../enums";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class SearchPeripheralService {
  async search(search: string) {
    if (!search) {
      throw new Error(Messages.PRE_ENTER_SEARCH_FIELD);
    }

    const peripheralRepository = getCustomRepository(PeripheralRepository);

    return await peripheralRepository
        .createQueryBuilder()
        .where("uid like :search", { search: `%${search}%` })
        .orWhere("vendor like :search", { search: `%${search}%` })
        .orWhere("status like :search", { search: `%${search}%` })
        .getMany();

  }
}

export { SearchPeripheralService };