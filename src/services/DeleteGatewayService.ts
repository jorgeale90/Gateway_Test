import { getCustomRepository } from "typeorm";
import { Gateway } from "../entities";
import { GatewayRepository } from "../repositories/GatewayRepository";

class DeleteGatewayService {
  async delete(id: string) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    return await gatewayRepository
        .createQueryBuilder()
        .delete()
        .from(Gateway)
        .where("id = :id", { id })
        .execute();

  }
}

export { DeleteGatewayService };