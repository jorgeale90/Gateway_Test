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
exports.UpdatePeripheralService = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const GatewayRepository_1 = require("../repositories/GatewayRepository");
const PeripheralRepository_1 = require("../repositories/PeripheralRepository");
class UpdatePeripheralService {
    update({ id, uid, vendor, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const peripheralRepository = typeorm_1.getCustomRepository(PeripheralRepository_1.PeripheralRepository);
            return yield peripheralRepository
                .createQueryBuilder()
                .update(entities_1.Peripheral)
                .set({ uid, vendor, status })
                .where("id = :id", { id })
                .execute();
        });
    }
    updateById({ id, uid, vendor, status, gateway, gatewayId }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!!(gateway === null || gateway === void 0 ? void 0 : gateway.id) || !!gatewayId) {
                const gatewayRepository = typeorm_1.getCustomRepository(GatewayRepository_1.GatewayRepository);
                gateway = yield gatewayRepository.findOne({ where: { id: (_a = gateway === null || gateway === void 0 ? void 0 : gateway.id) !== null && _a !== void 0 ? _a : gatewayId } });
            }
            const peripheralRepository = typeorm_1.getCustomRepository(PeripheralRepository_1.PeripheralRepository);
            const property = yield peripheralRepository.findOne({ where: { id } });
            return peripheralRepository.save(Object.assign(Object.assign({}, property), { uid,
                vendor,
                status,
                gateway }));
        });
    }
}
exports.UpdatePeripheralService = UpdatePeripheralService;
