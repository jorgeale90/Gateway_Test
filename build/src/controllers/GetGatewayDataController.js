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
exports.GetGatewayDataController = void 0;
const GetGatewayDataService_1 = require("../services/GetGatewayDataService");
class GetGatewayDataController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = request.query;
            id = id.toString();
            const getGatewayDataService = new GetGatewayDataService_1.GetGatewayDataService();
            const gateway = yield getGatewayDataService.getData(id);
            return response.render("editGateway", { gateway });
        });
    }
}
exports.GetGatewayDataController = GetGatewayDataController;
