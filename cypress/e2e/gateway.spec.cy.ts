describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:3000/')

    cy.visit('http://127.0.0.1:3000/gateway')

    cy.visit('http://127.0.0.1:3000/peripheral')
  })

  it('Add a new gateway', () => {
    cy.visit('http://127.0.0.1:3000/')
    // Click the "Add Gateway" button
    cy.contains('Add Gateway').click();

    // Verify that the page changes to the add gateway page
    cy.url().should('include', '/addGateway');

    // Verify that the page title is "Add Gateway"
    cy.get('h2').should('contain', 'Add Gateway');

    // Verify that the edit form is present
    cy.get('form[action="./addGateway"]').should('exist');

    // Verify that the serial, name and ip fields are present and editable
    cy.get('input[name="serial"]').should('exist').should('be.enabled');
    cy.get('input[name="name"]').should('exist').should('be.enabled');
    cy.get('input[name="ip"]').should('exist').should('be.enabled');

    // Verify that the "List Gateway" and "Add Gateway" buttons are present
    cy.contains('List Gateway').should('exist');
    cy.contains('Add Gateway').should('exist');
  });

  it('Add a new gateway New 1', () => {
    cy.visit('http://127.0.0.1:3000/')
    // Click the "Add Gateway" button
    cy.contains('Add Gateway').click();

    // Simulate the editing of the serial, name and ip fields
    cy.get('input[name="serial"]').clear().type('90062645');
    cy.get('input[name="name"]').clear().type('Ford');
    cy.get('input[name="ip"]').clear().type('127.0.0.1');

    // Click the "Add Gateway" button
    cy.get('.float-end > .btn').click();
  });

  it('Add a new gateway New 2', () => {
    cy.visit('http://127.0.0.1:3000/')
    // Click the "Add Gateway" button
    cy.contains('Add Gateway').click();

    // Simulate the editing of the serial, name and ip fields
    cy.get('input[name="serial"]').clear().type('90062646');
    cy.get('input[name="name"]').clear().type('Tesla');
    cy.get('input[name="ip"]').clear().type('127.0.0.2');

    // Click the "Add Gateway" button
    cy.get('.float-end > .btn').click();
  });

  it('Add a new gateway New 3', () => {
    cy.visit('http://127.0.0.1:3000/')
    // Click the "Add Gateway" button
    cy.contains('Add Gateway').click();

    // Simulate the editing of the serial, name and ip fields
    cy.get('input[name="serial"]').clear().type('90062647');
    cy.get('input[name="name"]').clear().type('Audi');
    cy.get('input[name="ip"]').clear().type('127.0.0.3');

    // Click the "Add Gateway" button
    cy.get('.float-end > .btn').click();
  });

  it('Access the page and verify elements', () => {
    cy.visit('http://127.0.0.1:3000/')

    // Verify that the page title is "Table Gateway"
    cy.get('h2').should('contain', 'Table Gateway');

    // Verify that the gateway table is present
    cy.get('table').should('exist');

    // Verificar que la tabla tenga al menos una fila
    cy.get('table tbody tr').should('have.length.greaterThan', 0);

    // Verify that the "Add Gateway" button is present
    cy.contains('Add Gateway').should('exist');
  });

  it('Edit an existing gateway', () => {
    cy.visit('http://127.0.0.1:3000/')
    // Click the edit button for a gateway
    cy.get('form[action="./editGateway"]').first().submit();

    // Verify that the page changes to the gateway edit page
    cy.url().should('include', '/editGateway');

    cy.get('input[name="serial"]').clear().type('90062647');
    cy.get('input[name="name"]').clear().type('Chevrolet');
    cy.get('input[name="ip"]').clear().type('127.0.0.4');

    // Click the "Save Gateway" button
    cy.contains('Save Gateway').click();
  });

  it('Delete an existing gateway', () => {
    cy.visit('http://127.0.0.1:3000/')
    // Click the delete button for a gateway
    cy.get('form[action="./delete-gateway"]').first().submit();
  });
})