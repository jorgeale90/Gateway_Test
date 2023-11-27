describe('List Peripheral API', () => {
  it('Should successfully list peripherals', () => {
    cy.visit('http://127.0.0.1:3000/peripheral')
    cy.request({
      url: '/api/peripheral',
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
      for (const peripheral of response.body.data) {
        expect(peripheral).to.have.property('uid');
        expect(peripheral).to.have.property('vendor');
        expect(peripheral).to.have.property('status');
      }
    });
  });
});

describe('Delete Peripheral API', () => {
  it('Should successfully delete a peripheral', () => {
    cy.visit('http://127.0.0.1:3000/peripheral')
    const validId = 'de30133e-5013-4216-8b80-59292564005d'; // Assume this ID exists in the database
    cy.request({
      url: `/api/peripheral/${validId}`,
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
});