import { getCustomRepository } from "typeorm";
import { Peripheral } from "../entities";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class DeletePeripheralService {
  async delete(id: string) {
    const peripheralRepository = getCustomRepository(PeripheralRepository);

    return await peripheralRepository
        .createQueryBuilder()
        .delete()
        .from(Peripheral)
        .where("id = :id", { id })
        .execute();

  }
}

export { DeletePeripheralService };