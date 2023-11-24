import { app, server } from '../src/server'; // Import the server from the main application file
import request from 'supertest';

describe("test gateway endpoints",()=>{
    it("test get all gateways",async()=>{
        const value=3
        expect(value*2).toBe(6)
        const res = await request(app)
            .get('/api/gateway');

    });

    it('test add gateways', async () => {
        const newGateway1 = {
            serial: 'ABC123',
            name: 'Gateway 1',
            ip: '192.168.1.1'
        };

        const newGateway2 = {
            serial: 'ABC456',
            name: 'Gateway 2',
            ip: '192.168.1.2'
        };

        // Send the first gateway
        const response1 = await request(app)
            .post('/api/gateway')
            .send(newGateway1);

        expect(response1.status).toBe(200);

        // Send the second gateway
        const response2 = await request(app)
            .post('/api/gateway')
            .send(newGateway2);

        expect(response2.status).toBe(200);
    });

    afterAll(() => {
        server.close(); // Shut down the server after all tests have finished
    });
});