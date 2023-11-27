describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:3000/peripheral')
  })

  it('Edit an existing peripheral', () => {
    cy.visit('http://127.0.0.1:3000/peripheral')
    // Click the edit button for a gateway
    cy.get('form[action="./editPeripheral"]').first().submit();

    // Verify that the page changes to the gateway edit page
    cy.url().should('include', '/editPeripheral');

    cy.get('input[name="uid"]').clear().type('6852154');
    cy.get('input[name="vendor"]').clear().type('Vendor7');
    cy.get('input[name="status"]').clear().type('Offline');

    // Click the "Save Peripheral" button
    cy.contains('Save Peripheral').click();
  });

})