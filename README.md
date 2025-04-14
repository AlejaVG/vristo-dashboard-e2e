# 📊 Vristo Dashboard E2E Test Suite

This project is an end-to-end test suite for the **Vristo Sales Dashboard** built with Next.js. It includes Cypress-based automation for:

- Pixel-perfect visual testing
- Accessibility validation using axe-core
- Functional and UI testing (navigation, interactions, responsiveness)


## 🚀 Getting Started

### 1. Clone the Repository and install node modules

```bash
git clone https://github.com/AlejaVG/vristo-dashboard-e2e.git
cd vristo-qa-dashboard-e2e

npm install

```

### 2. Install Cypress and Dendencies for Accessibility and Visual regression
```bash
  "@frsource/cypress-plugin-visual-regression-diff": "^3.3.10",
  "axe-core": "^4.10.3",
  "cypress": "^14.3.0",
  "cypress-axe": "^1.6.0",
  "cypress-xpath": "^2.0.1"
  npm install --save-dev cypress
  npm install --save-dev @frsource/cypress-plugin-visual-regression-diff
  npm install --save-dev axe-core  
  npm install --save-dev cypress-axe 
  npm install --save-dev cypress-xpath
```

## 🧪 Running Tests

### Run Test, Open Cypress GUI - Launch Cypress with interactive interface:

```bash
npx cypress open
```

### Run Tests in Headless Mode
#### Execute all tests in the terminal:

```bash
npx cypress run
```
#### Execute a specific test file:

```bash
npx cypress run --spec "cypress/e2e/calendar-event-validations.cy.js"
npx cypress run --spec "dashboard-accessibility-validation.cy.js"
npx cypress run --spec "dashboard-visual-validation.cy.js"
npx cypress run --spec "vristo-dashboard-ui-validation.cy.js"
```
#### Execute the baseline screenshot for visual validations:

```bash
npx cypress run --headless --env updateSnapshots=true --spec "cypress/e2e/dashboard-visual-validation.cy.js"
```

#### For Visual test Ignore Dynamic Elements (Optional)
##### If you need to ignore specific elements like dynamic graphs or widgets

```bash
cy.get('#dashboard-container').matchImage({
  blackout: ['#dynamic-widget-id']
});
```

## 👥 Contributors
- **Company**: ReflexAI
- **QA Automation Engineer**: Alejandra Villa Giraldo
- **Visual Testing Support**: [@frsource/cypress-plugin-visual-regression-diff](https://github.com/FRSOURCE/cypress-plugin-visual-regression-diff)
- **Accessibility Analysis**: [cypress-axe](https://www.npmjs.com/package/cypress-axe)