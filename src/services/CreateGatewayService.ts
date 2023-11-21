import { getCustomRepository } from "typeorm";
import { Messages } from "../enums";
import { IGateway } from "../interface";
import { GatewayRepository } from "../repositories/GatewayRepository";

class CreateGatewayService {
  async create({ serial, name, ip }: IGateway) {
    if (!serial || !name || !ip) {
      throw new Error(Messages.FILL_ALL_FIELDS);
    }
    const gatewayRepository = getCustomRepository(GatewayRepository);
    const gatewayserialAlreadyExists = await gatewayRepository.findOne({ serial });
    if (gatewayserialAlreadyExists) {
      throw new Error(Messages.SERIAL_ALREADY_REGISTERED);
    }

    const gatewaynameAlreadyExists = await gatewayRepository.findOne({ name });
    if (gatewaynameAlreadyExists) {
      throw new Error(Messages.NAME_ALREADY_REGISTERED);
    }

    const gatewayipAlreadyExists = await gatewayRepository.findOne({ ip });
    if (gatewayipAlreadyExists) {
      throw new Error(Messages.IP_ALREADY_REGISTERED);
    }

    const gateway = gatewayRepository.create({ serial, name, ip });
    await gatewayRepository.save(gateway);
    return gateway;
  }
}

export { CreateGatewayService };