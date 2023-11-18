import { Repository, EntityRepository } from "typeorm";
import { Peripheral } from "../entities/Peripheral";

@EntityRepository(Peripheral)
class PeripheralRepository extends Repository<Peripheral>{ }

export { PeripheralRepository };