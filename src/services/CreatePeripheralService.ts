import { getCustomRepository } from "typeorm";
import { Messages, MessagesPeripheral } from "../enums";
import { IPeripheral } from "../interface";
import { GatewayRepository } from "../repositories/GatewayRepository";
import { PeripheralRepository } from "../repositories/PeripheralRepository";

class CreatePeripheralService {
  async create({ uid, vendor, status, gatewayId }: IPeripheral) {

    const id = gatewayId;
    if (!uid || !vendor || !status || !id) {
      throw new Error(Messages.FILL_ALL_FIELDS);
    }

    const gatewayRepository = getCustomRepository(GatewayRepository);
    const gateway = await gatewayRepository.findOne({ where: { id } });

    const peripheralRepository = getCustomRepository(PeripheralRepository);
    const peripheraluidAlreadyExists = await peripheralRepository.findOne({ uid });

    if (peripheraluidAlreadyExists) {
      throw new Error(MessagesPeripheral.UID_ALREADY_REGISTERED);
    }

    const peripheralCount = await peripheralRepository.count({ where: { gateway } });

    if (peripheralCount >= 10) {
      throw new Error(MessagesPeripheral.MAX_PERIPHERALS_REACHED);
    }

    const peripheral = peripheralRepository.create({ uid, vendor, status, gateway });
    await peripheralRepository.save(peripheral);

    return peripheral;
  }

  async createWithGateway({ uid, vendor, status, gateway: { id } }: IPeripheral) {
    return this.create({ uid, vendor, status, gatewayId: id });
  }
}

export { CreatePeripheralService };
