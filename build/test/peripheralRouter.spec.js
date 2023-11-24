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
    }));
    it("post add peripheral", () => __awaiter(void 0, void 0, void 0, function* () {
        const newPeripheral1 = {
            uid: 'DEF456',
            vendor: 'Vendor 1',
            status: 'Online',
            gatewayId: '28767fbb-3314-484e-a06d-69cbd2e85851'
        };
        const newPeripheral2 = {
            uid: 'HIJ789',
            vendor: 'Vendor 2',
            status: 'Offline',
            gatewayId: '28767fbb-3314-484e-a06d-69cbd2e85851'
        };
        const response1 = yield supertest_1.default(server_1.app)
            .post('/api/peripheral')
            .send(newPeripheral1);
        expect(response1.status).toBe(200);
        const response2 = yield supertest_1.default(server_1.app)
            .post('/api/peripheral')
            .send(newPeripheral2);
        expect(response2.status).toBe(200);
    }));
    afterAll(() => {
        server_1.server.close(); // Shut down the server after all tests have finished
    });
});
