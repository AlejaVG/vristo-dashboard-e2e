// Accessibility Tests - Desktop View
describe('Accessibility - Desktop', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080); // Desktop viewport
      cy.visit('/');
      cy.injectAxe(); // Injects axe-core for a11y testing
    });
  
    it('should have no accessibility violations on the full page', () => {
      cy.checkA11y(); // Full-page accessibility check
    });
  
    it('should have no accessibility violations on a specific component', () => {
      cy.get('button.nav-link').first().click();
      cy.get('.menu') //Dropdown dashboard menu a11y validation
        .first()
        .should('be.visible')
        .checkA11y(); // Component-level accessibility check
    });
  });
  
  // Accessibility Tests - Mobile View
  describe('Accessibility - Mobile', () => {
    beforeEach(() => {
      cy.viewport(375, 667); // Mobile viewport (iPhone 6/7/8)
      cy.visit('/');
      cy.injectAxe();
    });
  
    it('should have no accessibility violations on the full page', () => {
      cy.checkA11y();
    });
  
    it('should have no accessibility violations on a specific component', () => {
      cy.get('button.collapse-icon').eq(1).click(); // Click on hamburguer menu
      cy.get('nav.sidebar') //Dropdown dashboard menu a11y validation
        .should('be.visible')
        .checkA11y(); // Component-level accessibility check
    });
  });
  