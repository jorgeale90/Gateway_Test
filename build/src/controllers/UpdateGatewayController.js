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
exports.UpdateGatewayController = void 0;
const UpdateGatewayService_1 = require("../services/UpdateGatewayService");
class UpdateGatewayController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, serial, name, ip } = request.body;
            const updateGatewayService = new UpdateGatewayService_1.UpdateGatewayService();
            try {
                yield updateGatewayService.update({ id, serial, name, ip }).then(() => {
                    response.render("message", { message: "Gateway updated with success" /* UPDATE */ });
                });
            }
            catch (err) {
                response.render("message", { message: `${"Error deleting Gateway" /* UPDATE_ERROR */}: ${err.message}` });
            }
        });
    }
}
exports.UpdateGatewayController = UpdateGatewayController;
