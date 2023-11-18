import { getCustomRepository } from "typeorm";
import { Gateway } from "../entities/Gateway";
import { GatewayRepository } from "../repositories/GatewayRepository";

interface IGateway {
  id: string
  serial: string;
  name: string;
  ip: string;
}

class UpdateGatewayService {
  async update({ id, serial, name, ip }: IGateway) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gateway = await gatewayRepository
      .createQueryBuilder()
      .update(Gateway)
      .set({ serial, name, ip })
      .where("id = :id", { id })
      .execute();

    return gateway;

  }
}

export { UpdateGatewayService };