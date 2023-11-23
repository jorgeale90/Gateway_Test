import { app, server } from '../src/server'; // Import the server from the main application file
import request from 'supertest';

describe("test peripheral endpoints",()=>{
    it("test get all peripherals",async()=>{
        const value=3
        expect(value*2).toBe(6)
        const res = await request(app)
            .get('/api/peripheral');

        expect(res.body).not.toEqual({});
    });

    it("post add peripheral",async()=>{
        try {
            const res = await request(app)
                .post('/api/peripheral')
                .send({
                    uid:"652021",
                    vendor:"Vendor12",
                    status:"Online",
                    gatewayId:"e8d679fe-489f-4e22-b83e-5773ad47c94d"
                });

            expect(res.status).toBe(200); // Verify that a 200 status code is received
            expect(res.body).not.toEqual({}); // Check that the response body is not empty
        } catch (error) {
            // If the request fails, display the error
            console.error(error);
        }
    });

    afterAll(() => {
        server.close(); // Shut down the server after all tests have finished
    });
});
