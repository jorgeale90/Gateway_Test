import { getCustomRepository } from "typeorm";
import { GatewayRepository } from "../repositories/GatewayRepository";

interface IGateway {
  serial: string;
  name: string;
  ip: string;
}

class CreateGatewayService {
  async create({ serial, name, ip }: IGateway) {
    if (!serial || !name || !ip ) {
      throw new Error("Please fill in all fields");
    }

    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gatewayserialAlreadyExists = await gatewayRepository.findOne({ serial });

    if (gatewayserialAlreadyExists) {
      throw new Error("The Serial is already registered");
    }

    const gatewaynameAlreadyExists = await gatewayRepository.findOne({ name });

    if (gatewaynameAlreadyExists) {
      throw new Error("The Name is already registered");
    }

    const gatewayipAlreadyExists = await gatewayRepository.findOne({ ip });

    if (gatewayipAlreadyExists) {
      throw new Error("The IP is already registered");
    }

    const gateway = gatewayRepository.create({ serial, name, ip });

    await gatewayRepository.save(gateway);

    return gateway;

  }
}

export { CreateGatewayService };