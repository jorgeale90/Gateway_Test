import { getCustomRepository } from "typeorm";
import { Gateway } from "../entities";
import { IGateway } from "../interface";
import { GatewayRepository } from "../repositories/GatewayRepository";

class UpdateGatewayService {
  async update({ id, serial, name, ip }: IGateway) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    return await gatewayRepository
        .createQueryBuilder()
        .update(Gateway)
        .set({ serial, name, ip })
        .where("id = :id", { id })
        .execute();

  }

  async updateById({ id, serial, name, ip }: IGateway) {
    const gatewayRepository = getCustomRepository(GatewayRepository);
    const property = await gatewayRepository.findOne({ where: { id } });
    return gatewayRepository.save({
      ...property,
      serial,
      name,
      ip,
    });
  }
}

export { UpdateGatewayService };