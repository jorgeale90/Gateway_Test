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
      throw new Error("Por favor preencha todos os campos");
    }

    const gatewayRepository = getCustomRepository(GatewayRepository);

    const gatewayserialAlreadyExists = await gatewayRepository.findOne({ serial });

    if (gatewayserialAlreadyExists) {
      throw new Error("Username já está cadastrado");
    }

    const gatewaynameAlreadyExists = await gatewayRepository.findOne({ name });

    if (gatewaynameAlreadyExists) {
      throw new Error("Email já está cadastrado");
    }

    const gatewayipAlreadyExists = await gatewayRepository.findOne({ ip });

    if (gatewayipAlreadyExists) {
      throw new Error("Email já está cadastrado");
    }

    const gateway = gatewayRepository.create({ serial, name, ip });

    await gatewayRepository.save(gateway);

    return gateway;

  }
}

export { CreateGatewayService };