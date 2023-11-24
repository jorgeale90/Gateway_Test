import { getCustomRepository } from "typeorm";
import { Gateway, Peripheral } from "../entities";
import { GatewayRepository } from "../repositories/GatewayRepository";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class DeleteGatewayService {
  async delete(id: string) {
    const gatewayRepository = getCustomRepository(GatewayRepository);
    // Gets the peripheral repository
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    // Eliminate the peripherals associated with the gateway
    await peripheralRepository
        .createQueryBuilder()
        .delete()
        .from(Peripheral)
        .where("gatewayId = :id", { id })
        .execute();

    // Delete the gateway
    return await gatewayRepository
        .createQueryBuilder()
        .delete()
        .from(Gateway)
        .where("id = :id", { id })
        .execute();
  }
}

export { DeleteGatewayService };