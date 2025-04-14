//This test is to show how to use abstraction with Page Object Model
import { CalendarPage } from '../support/pages/calendarPage';

const calendar = new CalendarPage();

describe('Calendar App - Event Creation Flow', () => {

  beforeEach(() => {
    calendar.visit();
  });

  it('should navigate to Calendar, create an event, and validate its creation', () => {
    calendar.goToCalendar();
    calendar.clickCreateEventButton();
    calendar.fillEventForm(
      'Test Event',
      '2025-04-15T15:00',
      '2025-04-15T15:30',
      'Test interview'
    );
    calendar.submitEvent();
    calendar.verifyEventExists('3p', 'Test Event');
  });

});
  