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
      throw new Error("Por favor preencha todos os campos");
    }

    const peripheralRepository = getCustomRepository(PeripheralRepository);

    const peripheraluidAlreadyExists = await peripheralRepository.findOne({ uid });

    if (peripheraluidAlreadyExists) {
      throw new Error("Username já está cadastrado");
    }

    const peripheralvendorAlreadyExists = await peripheralRepository.findOne({ vendor });

    if (peripheralvendorAlreadyExists) {
      throw new Error("Email já está cadastrado");
    }

    const peripheralstatusAlreadyExists = await peripheralRepository.findOne({ status });

    if (peripheralstatusAlreadyExists) {
      throw new Error("Email já está cadastrado");
    }

    const peripheral = peripheralRepository.create({ uid, vendor, status });

    await peripheralRepository.save(peripheral);

    return peripheral;

  }
}

export { CreatePeripheralService };