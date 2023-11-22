import { getCustomRepository } from "typeorm";
import { Messages, MessagesGateway } from "../enums";
import { IGateway } from "../interface";
import { GatewayRepository } from "../repositories/GatewayRepository";
import { validateIP } from "../validation/validateIP";

class CreateGatewayService {
  async create({ serial, name, ip }: IGateway) {
    if (!serial || !name || !ip) {
      throw new Error(Messages.FILL_ALL_FIELDS);
    }
    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gatewayserialAlreadyExists = await gatewayRepository.findOne({ serial });
    if (gatewayserialAlreadyExists) {
      throw new Error(MessagesGateway.SERIAL_ALREADY_REGISTERED);
    }

    const gatewaynameAlreadyExists = await gatewayRepository.findOne({ name });
    if (gatewaynameAlreadyExists) {
      throw new Error(MessagesGateway.NAME_ALREADY_REGISTERED);
    }

    const gatewayipAlreadyExists = await gatewayRepository.findOne({ ip });
    if (gatewayipAlreadyExists) {
      throw new Error(MessagesGateway.IP_ALREADY_REGISTERED);
    }

    const isValidIp = validateIP(ip); // Call the validateIP function
    if (!isValidIp) {
      throw new Error(MessagesGateway.INVALID_IP); // Throw an error if the IP address is invalid
    }

    const gateway = gatewayRepository.create({ serial, name, ip });
    await gatewayRepository.save(gateway);
    return gateway;
  }
}

export { CreateGatewayService };