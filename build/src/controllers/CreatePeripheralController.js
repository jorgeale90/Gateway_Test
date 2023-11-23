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
exports.CreatePeripheralController = void 0;
const CreatePeripheralService_1 = require("../services/CreatePeripheralService");
class CreatePeripheralController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uid, vendor, status, gatewayId } = request.body;
            const createPeripheralService = new CreatePeripheralService_1.CreatePeripheralService();
            try {
                yield createPeripheralService.create({
                    uid,
                    vendor,
                    status,
                    gatewayId,
                }).then(() => {
                    response.render("message", { message: "Registered Peripheral with success" /* REGISTER */ });
                });
            }
            catch (err) {
                response.render("message", {
                    message: `${"Error in Peripheral registration" /* REGISTER_ERROR */}: ${err.message}`,
                });
            }
        });
    }
}
exports.CreatePeripheralController = CreatePeripheralController;
