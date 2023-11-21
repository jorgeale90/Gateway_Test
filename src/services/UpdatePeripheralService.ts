import { getCustomRepository } from "typeorm";
import { Peripheral } from "../entities";
import { IPeripheral } from "../interface";
import { GatewayRepository } from "../repositories/GatewayRepository";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class UpdatePeripheralService {
  async update({ id, uid, vendor, status }: IPeripheral) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);
    return await peripheralRepository
        .createQueryBuilder()
        .update(Peripheral)
        .set({ uid, vendor, status })
        .where("id = :id", { id })
        .execute();
  }

  async updateById({ id, uid, vendor, status, gateway, gatewayId }: IPeripheral) {

    if (!!gateway?.id || !!gatewayId) {
      const gatewayRepository = getCustomRepository(GatewayRepository);
      gateway = await gatewayRepository.findOne({ where: { id: gateway?.id ?? gatewayId } });
    }

    const peripheralRepository = getCustomRepository(PeripheralRepository);
    const property = await peripheralRepository.findOne({ where: { id } });
    return peripheralRepository.save({
      ...property,
      uid,
      vendor,
      status,
      gateway,
    });
  }
}

export { UpdatePeripheralService };