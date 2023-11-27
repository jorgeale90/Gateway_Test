describe('template spec', () => {
  it('LIST', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.request({
      url: '/api/gateway',
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');
      expect(response.body.data.length).to.be.greaterThan(0);
    });
  })

  it('Should successfully search gateways by IP', () => {
    cy.visit('http://127.0.0.1:3000/')
    const ip = '127.0.0.3';
    cy.request({
      url: `/api/gateway/search?ip=${ip}`,
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');
    });
  });

  it('Should successfully search gateways by serial', () => {
    cy.visit('http://127.0.0.1:3000/')
    const serial = '123456';
    cy.request({
      url: `/api/gateway/search?serial=${serial}`,
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');
    });
  });

  it('Should successfully search gateways by name', () => {
    cy.visit('http://127.0.0.1:3000/')
    const name = 'Audi';
    cy.request({
      url: `/api/gateway/search?name=${name}`,
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');
    });
  });

  it('Should successfully retrieve gateway data and associated peripherals by serial', () => {
    cy.visit('http://127.0.0.1:3000/')
    const serial = '90062645';
    cy.request({
      url: `/api/gateway/serial/${serial}`,
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('gateway');
      expect(response.body.data.gateway).to.have.property('id');
      expect(response.body.data.gateway).to.have.property('ip');
      expect(response.body.data.gateway).to.have.property('serial');
      expect(response.body.data.gateway).to.have.property('name');
      expect(response.body.data).to.have.property('peripherals');
      expect(response.body.data.peripherals).to.be.an('array');
      expect(response.body.data.peripherals.length).to.be.greaterThan(0);
      for (const peripheral of response.body.data.peripherals) {
        expect(peripheral).to.have.property('id');
        expect(peripheral).to.have.property('uid');
        expect(peripheral).to.have.property('vendor');
        expect(peripheral).to.have.property('status');
      }
    });
  });
})

describe('Delete Gateway API', () => {
  it('Should successfully delete an existing gateway', () => {
    cy.visit('http://127.0.0.1:3000/')
    const validId = 'd8dad20c-4a9a-46ca-86cc-fa13dc72c3c7'; // Assume this ID exists in the database
    cy.request({
      url: `/api/gateway/${validId}`,
      method: 'DELETE',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      expect(response.body).to.have.property('data');
    });
  });

  it('Should return 404 error for an invalid gateway ID', () => {
    cy.visit('http://127.0.0.1:3000/')
    const invalidId = '999999'; // Assume this ID does not exist in the database
    cy.request({
      url: `/api/gateway/${invalidId}`,
      method: 'DELETE',
      headers: {
        Accept: 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.body).to.have.property('message');
    });
  });
});