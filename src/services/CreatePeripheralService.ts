import { getCustomRepository } from "typeorm";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

interface IPeripheral {
  uid: number;
  vendor: string;
  status: string;
}

class CreatePeripheralService {
  async create({ uid, vendor, status }: IPeripheral) {
    if (!uid || !vendor || !status ) {
      throw new Error("Please fill in all fields");
    }

    const peripheralRepository = getCustomRepository(PeripheralRepository);

    const peripheraluidAlreadyExists = await peripheralRepository.findOne({ uid });

    if (peripheraluidAlreadyExists) {
      throw new Error("The Uid is already registered");
    }

    const peripheral = peripheralRepository.create({ uid, vendor, status });

    await peripheralRepository.save(peripheral);

    return peripheral;

  }
}

export { CreatePeripheralService };