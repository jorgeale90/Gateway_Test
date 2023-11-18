import { getCustomRepository } from "typeorm";
import { Gateway } from "../entities/Gateway";
import { GatewayRepository } from "../repositories/GatewayRepository";

class DeleteGatewayService {
  async delete(id: string) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gateway = await gatewayRepository
      .createQueryBuilder()
      .delete()
      .from(Gateway)
      .where("id = :id", { id })
      .execute();

    return gateway;

  }
}

export { DeleteGatewayService };