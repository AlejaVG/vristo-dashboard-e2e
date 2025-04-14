export class CalendarPage {
    visit() {
      cy.visit('/');
      cy.viewport(1280, 800);
    }
  
    goToCalendar() {
      cy.get('a[href="/apps/calendar"]').eq(1).click();
      cy.url().should('include', '/apps/calendar');
    }
  
    clickCreateEventButton() {
      cy.get('button.btn-primary').first().click(); 
    }
  
    fillEventForm(title, start, end, description) {
      cy.get('#title').type(title);
      cy.get('#start').type(start);
      cy.get('#end').type(end);
      cy.get('#description').type(description);
    }
  
    submitEvent() {
      cy.get('.button.btn-primary').eq(1).click();
    }
  
    verifyEventExists(timeLabel, title) {
      cy.contains(timeLabel).should('be.visible');
      cy.contains(title).should('be.visible');
    }
  }