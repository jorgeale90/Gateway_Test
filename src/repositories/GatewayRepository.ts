import { Repository, EntityRepository } from "typeorm";
import { Gateway } from "../entities/Gateway";

@EntityRepository(Gateway)
class GatewayRepository extends Repository<Gateway>{ }

export { GatewayRepository };