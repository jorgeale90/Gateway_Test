import { getCustomRepository } from "typeorm";
import { Peripheral } from "../entities/Peripheral";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

interface IPeripheral {
  id: string
  uid: number;
  vendor: string;
  status: string;
}

class UpdatePeripheralService {
  async update({ id, uid, vendor, status }: IPeripheral) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    const peripheral = await peripheralRepository
      .createQueryBuilder()
      .update(Peripheral)
      .set({ uid, vendor, status })
      .where("id = :id", { id })
      .execute();

    return peripheral;

  }
}

export { UpdatePeripheralService };