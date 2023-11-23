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
exports.DeleteGatewayService = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const GatewayRepository_1 = require("../repositories/GatewayRepository");
class DeleteGatewayService {
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const gatewayRepository = typeorm_1.getCustomRepository(GatewayRepository_1.GatewayRepository);
            return yield gatewayRepository
                .createQueryBuilder()
                .delete()
                .from(entities_1.Gateway)
                .where("id = :id", { id })
                .execute();
        });
    }
}
exports.DeleteGatewayService = DeleteGatewayService;
