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
exports.CreateGatewayService = void 0;
const typeorm_1 = require("typeorm");
const GatewayRepository_1 = require("../repositories/GatewayRepository");
const validateIP_1 = require("../validation/validateIP");
class CreateGatewayService {
    create({ serial, name, ip }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!serial || !name || !ip) {
                throw new Error("Please fill in all fields" /* FILL_ALL_FIELDS */);
            }
            const gatewayRepository = typeorm_1.getCustomRepository(GatewayRepository_1.GatewayRepository);
            const gatewayserialAlreadyExists = yield gatewayRepository.findOne({ serial });
            if (gatewayserialAlreadyExists) {
                throw new Error("The Serial is already registered" /* SERIAL_ALREADY_REGISTERED */);
            }
            const gatewaynameAlreadyExists = yield gatewayRepository.findOne({ name });
            if (gatewaynameAlreadyExists) {
                throw new Error("The Name is already registered" /* NAME_ALREADY_REGISTERED */);
            }
            const gatewayipAlreadyExists = yield gatewayRepository.findOne({ ip });
            if (gatewayipAlreadyExists) {
                throw new Error("The IP is already registered" /* IP_ALREADY_REGISTERED */);
            }
            const isValidIp = validateIP_1.validateIP(ip); // Call the validateIP function
            if (!isValidIp) {
                throw new Error("IP invalid" /* INVALID_IP */); // Throw an error if the IP address is invalid
            }
            const gateway = gatewayRepository.create({ serial, name, ip });
            yield gatewayRepository.save(gateway);
            return gateway;
        });
    }
}
exports.CreateGatewayService = CreateGatewayService;
