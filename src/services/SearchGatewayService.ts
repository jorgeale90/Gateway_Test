import { getCustomRepository } from "typeorm";
import { GatewayRepository } from "../repositories/GatewayRepository";

class SearchGatewayService {
  async search(search: string) {
    if (!search) {
      throw new Error("Por favor preencha o campo de busca");
    }

    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gateway = await gatewayRepository
        .createQueryBuilder()
        .where("serial like :search", { search: `%${search}%` })
        .orWhere("name like :search", { search: `%${search}%` })
        .orWhere("ip like :search", { search: `%${search}%` })
        .getMany();

    return gateway;

  }
}

export { SearchGatewayService };