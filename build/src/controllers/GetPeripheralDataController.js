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
exports.GetPeripheralDataController = void 0;
const GetPeripheralDataService_1 = require("../services/GetPeripheralDataService");
class GetPeripheralDataController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = request.query;
            id = id.toString();
            const getPeripheralDataService = new GetPeripheralDataService_1.GetPeripheralDataService();
            const peripheral = yield getPeripheralDataService.getData(id);
            return response.render("editPeripheral", { peripheral });
        });
    }
}
exports.GetPeripheralDataController = GetPeripheralDataController;
