import { app, server } from '../src/server'; // Import the server from the main application file
import request from 'supertest';

describe("test gateway endpoints",()=>{
    it("test get all gateways",async()=>{
        const value=3
        expect(value*2).toBe(6)
        const res = await request(app)
            .get('/api/gateway');

        expect(res.body).not.toEqual({});
    });

    it("post add gateway",async()=>{
        try {
            const res = await request(app)
                .post('/api/gateway')
                .send({
                    serial:"90062649",
                    name:"Ferrari",
                    ip:"127.0.0.9"
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
