import { getCustomRepository } from "typeorm";
import { Gateway } from "../entities";
import { IGateway } from "../interface";
import { GatewayRepository } from "../repositories/GatewayRepository";
import { MessagesGateway } from "../enums";
import { validateIP } from "../validation/validateIP";

class UpdateGatewayService {
  async update({ id, serial, name, ip }: IGateway) {
    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gatewayserialAlreadyExists = await gatewayRepository.findOne({ serial });
    if (gatewayserialAlreadyExists) {
      throw new Error(MessagesGateway.SERIAL_ALREADY_REGISTERED);
    }

    const gatewayipAlreadyExists = await gatewayRepository.findOne({ ip });
    if (gatewayipAlreadyExists) {
      throw new Error(MessagesGateway.IP_ALREADY_REGISTERED);
    }

    const isValidIp = validateIP(ip); // Validate the IP address
    if (!isValidIp) {
      throw new Error(MessagesGateway.INVALID_IP); // Throw an error if the IP address is invalid
    }

    return await gatewayRepository
        .createQueryBuilder()
        .update(Gateway)
        .set({ serial, name, ip })
        .where("id = :id", { id })
        .execute();

  }

  async updateById({ id, serial, name, ip }: IGateway) {
    const gatewayRepository = getCustomRepository(GatewayRepository);
    const property = await gatewayRepository.findOne({ where: { id } });
    return gatewayRepository.save({
      ...property,
      serial,
      name,
      ip,
    });
  }
}

export { UpdateGatewayService };