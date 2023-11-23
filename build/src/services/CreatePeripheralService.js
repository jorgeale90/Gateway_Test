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
exports.CreatePeripheralService = void 0;
const typeorm_1 = require("typeorm");
const GatewayRepository_1 = require("../repositories/GatewayRepository");
const PeripheralRepository_1 = require("../repositories/PeripheralRepository");
class CreatePeripheralService {
    create({ uid, vendor, status, gatewayId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = gatewayId;
            if (!uid || !vendor || !status || !id) {
                throw new Error("Please fill in all fields" /* FILL_ALL_FIELDS */);
            }
            const gatewayRepository = typeorm_1.getCustomRepository(GatewayRepository_1.GatewayRepository);
            const gateway = yield gatewayRepository.findOne({ where: { id } });
            const peripheralRepository = typeorm_1.getCustomRepository(PeripheralRepository_1.PeripheralRepository);
            const peripheraluidAlreadyExists = yield peripheralRepository.findOne({ uid });
            if (peripheraluidAlreadyExists) {
                throw new Error("The Uid is already registered" /* UID_ALREADY_REGISTERED */);
            }
            const peripheralCount = yield peripheralRepository.count({ where: { gateway } });
            if (peripheralCount >= 2) {
                throw new Error("A limit of 10 peripherals has been reached on this Gateway" /* MAX_PERIPHERALS_REACHED */);
            }
            const peripheral = peripheralRepository.create({ uid, vendor, status, gateway });
            yield peripheralRepository.save(peripheral);
            return peripheral;
        });
    }
    createWithGateway({ uid, vendor, status, gateway: { id } }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.create({ uid, vendor, status, gatewayId: id });
        });
    }
}
exports.CreatePeripheralService = CreatePeripheralService;
