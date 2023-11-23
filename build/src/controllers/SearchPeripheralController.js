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
exports.SearchPeripheralController = void 0;
const SearchPeripheralService_1 = require("../services/SearchPeripheralService");
class SearchPeripheralController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { search } = request.query;
            search = search.toString();
            const searchPeripheralService = new SearchPeripheralService_1.SearchPeripheralService();
            try {
                const peripheral = yield searchPeripheralService.search(search);
                response.render("searchPeripheral", {
                    peripheral,
                    search,
                });
            }
            catch (err) {
                response.render("message", { message: `${"Peripheral search error" /* SEARCH_ERROR */}: ${err.message}` });
            }
        });
    }
}
exports.SearchPeripheralController = SearchPeripheralController;
