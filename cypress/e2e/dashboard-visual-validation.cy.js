describe('Visual Regression Tests - Desktop Viewport', () => {

  // Run once before all tests in this suite
  beforeEach(() => {
    cy.viewport(1920, 1080);  
    cy.visit('/');               
  });

  it('should match the baseline for the entire desktop page', () => {
    // Ensure the main logo is visible before comparing
    cy.get('.main-logo')
      .first()
      .should('be.visible', { timeout: 10000 });

    // Compare full dahboard page with baseline image
    cy.get('body').matchImage({ fullPage: true });
  });

  it('should match the baseline for Vristo button only', () => {
    // Wait for the Vristo button
    cy.get('.main-logo')
      .first() // 0-based index, so this is the 7th panel
      .should('be.visible', { timeout: 10000 });

    // Compare only Vristo button with the baseline image
    cy.get('.main-logo')
      .first()
      .matchImage();
  });

});



