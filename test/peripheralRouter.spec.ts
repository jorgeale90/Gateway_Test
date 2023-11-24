import { app, server } from '../src/server'; // Import the server from the main application file
import request from 'supertest';

describe("test peripheral endpoints",()=>{
    it("test get all peripherals",async()=>{
        const value=3
        expect(value*2).toBe(6)
        const res = await request(app)
            .get('/api/peripheral');

    });

    it("post add peripheral",async()=>{
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

        const response1 = await request(app)
            .post('/api/peripheral')
            .send(newPeripheral1);

        expect(response1.status).toBe(200);

        const response2 = await request(app)
            .post('/api/peripheral')
            .send(newPeripheral2);

        expect(response2.status).toBe(200);
    });

    afterAll(() => {
        server.close(); // Shut down the server after all tests have finished
    });
});
