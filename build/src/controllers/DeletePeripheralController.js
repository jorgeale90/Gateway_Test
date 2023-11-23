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
exports.DeletePeripheralController = void 0;
const DeletePeripheralService_1 = require("../services/DeletePeripheralService");
class DeletePeripheralController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const deletePeripheralService = new DeletePeripheralService_1.DeletePeripheralService();
            try {
                yield deletePeripheralService.delete(id).then(() => {
                    response.render("message", { message: "Peripheral deleted with success" /* DELETE */ });
                });
            }
            catch (err) {
                response.render("message", {
                    message: `${"Error deleting Peripheral" /* DELETE_ERROR */}: ${err.message}`,
                });
            }
        });
    }
}
exports.DeletePeripheralController = DeletePeripheralController;
