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
exports.SearchGatewayController = void 0;
const SearchGatewayService_1 = require("../services/SearchGatewayService");
class SearchGatewayController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { search } = request.query;
            search = search.toString();
            const searchGatewayService = new SearchGatewayService_1.SearchGatewayService();
            try {
                const gateway = yield searchGatewayService.search(search);
                response.render("searchGateway", {
                    gateway,
                    search,
                });
            }
            catch (err) {
                response.render("message", { message: `${"Gateway search error" /* SEARCH_ERROR */}: ${err.message}` });
            }
        });
    }
}
exports.SearchGatewayController = SearchGatewayController;
