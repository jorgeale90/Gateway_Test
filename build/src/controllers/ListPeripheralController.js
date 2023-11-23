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
exports.ListPeripheralController = void 0;
const ListPeripheralService_1 = require("../services/ListPeripheralService");
class ListPeripheralController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPeripheralService = new ListPeripheralService_1.ListPeripheralService();
            const peripheral = yield listPeripheralService.list();
            return response.render("listPeripheral", { peripheral });
        });
    }
}
exports.ListPeripheralController = ListPeripheralController;
