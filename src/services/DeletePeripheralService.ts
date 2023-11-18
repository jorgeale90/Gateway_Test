import { getCustomRepository } from "typeorm";
import { Peripheral } from "../entities/Peripheral";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class DeletePeripheralService {
  async delete(id: string) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    const peripheral = await peripheralRepository
      .createQueryBuilder()
      .delete()
      .from(Peripheral)
      .where("id = :id", { id })
      .execute();

    return peripheral;

  }
}

export { DeletePeripheralService };