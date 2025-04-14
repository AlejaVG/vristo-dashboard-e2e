describe('Vristo Dashboard UI Validation', () => {
  // Run before each test to avoid repeating cy.visit
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to the correct login URL', () => {
    // Verifies the user is redirected to the expected base URL
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('should display the Vristo Dashboard container', () => {
    // Ensures the main dashboard container is visible
    cy.get('.vertical').first().should('be.visible');
  });

  it('should display the correct <title> in the document head', () => {
    // Confirms the page title matches the expected value
    cy.title().should(
      'include',
      'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template'
    );
  });

  it('should have consistent font color for "Revenue" and "Sales By Category" section titles', () => {
    // Checks that both section titles share the same font color
    cy.xpath('//h5[text()="Revenue"]')
      .should('have.css', 'color', 'rgb(14, 23, 38)');
    cy.xpath('//h5[text()="Sales By Category"]')
      .should('have.css', 'color', 'rgb(14, 23, 38)');
  });

  it('should have the correct background color for the "View Details" button', () => {
    // Validates the background color of the "View Details" button
    cy.xpath('//button[text()="View Details"]')
      .should('have.css', 'background-color', 'rgb(128, 93, 202)');
  });
});

  