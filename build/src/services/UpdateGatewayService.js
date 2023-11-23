"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGatewayService = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const GatewayRepository_1 = require("../repositories/GatewayRepository");
const validateIP_1 = require("../validation/validateIP");
class UpdateGatewayService {
    update({ id, serial, name, ip }) {
        return __awaiter(this, void 0, void 0, function* () {
            const gatewayRepository = typeorm_1.getCustomRepository(GatewayRepository_1.GatewayRepository);
            const gatewayserialAlreadyExists = yield gatewayRepository.findOne({ serial });
            if (gatewayserialAlreadyExists) {
                throw new Error("The Serial is already registered" /* SERIAL_ALREADY_REGISTERED */);
            }
            const gatewayipAlreadyExists = yield gatewayRepository.findOne({ ip });
            if (gatewayipAlreadyExists) {
                throw new Error("The IP is already registered" /* IP_ALREADY_REGISTERED */);
            }
            const isValidIp = validateIP_1.validateIP(ip); // Validate the IP address
            if (!isValidIp) {
                throw new Error("IP invalid" /* INVALID_IP */); // Throw an error if the IP address is invalid
            }
            return yield gatewayRepository
                .createQueryBuilder()
                .update(entities_1.Gateway)
                .set({ serial, name, ip })
                .where("id = :id", { id })
                .execute();
        });
    }
    updateById({ id, serial, name, ip }) {
        return __awaiter(this, void 0, void 0, function* () {
            const gatewayRepository = typeorm_1.getCustomRepository(GatewayRepository_1.GatewayRepository);
            const property = yield gatewayRepository.findOne({ where: { id } });
            return gatewayRepository.save(Object.assign(Object.assign({}, property), { serial,
                name,
                ip }));
        });
    }
}
exports.UpdateGatewayService = UpdateGatewayService;
