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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../src/server"); // Import the server from the main application file
const supertest_1 = __importDefault(require("supertest"));
describe("test peripheral endpoints", () => {
    it("test get all peripherals", () => __awaiter(void 0, void 0, void 0, function* () {
        const value = 3;
        expect(value * 2).toBe(6);
        const res = yield supertest_1.default(server_1.app)
            .get('/api/peripheral');
        expect(res.body).not.toEqual({});
    }));
    it("post add peripheral", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield supertest_1.default(server_1.app)
                .post('/api/peripheral')
                .send({
                uid: "652021",
                vendor: "Vendor12",
                status: "Online",
                gatewayId: "e8d679fe-489f-4e22-b83e-5773ad47c94d"
            });
            expect(res.status).toBe(200); // Verify that a 200 status code is received
            expect(res.body).not.toEqual({}); // Check that the response body is not empty
        }
        catch (error) {
            // If the request fails, display the error
            console.error(error);
        }
    }));
    afterAll(() => {
        server_1.server.close(); // Shut down the server after all tests have finished
    });
});
