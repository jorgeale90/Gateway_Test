import { getCustomRepository } from "typeorm";
import { Messages } from "../enums";
import { GatewayRepository } from "../repositories/GatewayRepository";

class SearchGatewayService {
  async search(search: string) {
    if (!search) {
      throw new Error(Messages.PRE_ENTER_SEARCH_FIELD);
    }

    const gatewayRepository = getCustomRepository(GatewayRepository);

    return await gatewayRepository
        .createQueryBuilder()
        .where("serial like :search", { search: `%${search}%` })
        .orWhere("name like :search", { search: `%${search}%` })
        .orWhere("ip like :search", { search: `%${search}%` })
        .getMany();

  }
}

export { SearchGatewayService };