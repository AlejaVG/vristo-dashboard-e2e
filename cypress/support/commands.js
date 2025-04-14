// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*cy.matchImage({
    // screenshot configuration, passed directly to the the Cypress screenshot method: https://docs.cypress.io/api/cypress-api/screenshot-api#Arguments
    // default: { }
    screenshotConfig: {
      blackout: ['.element-to-be-blackouted']
    },
    // pixelmatch options, see: https://www.npmjs.com/package/pixelmatch#pixelmatchimg1-img2-output-width-height-options
    // default: { includeAA: true }
    diffConfig: {
      threshold: 0.01,
    },
    // whether to create missing baseline images automatically
    // default: true
    createMissingImages: false,
    // whether to update images automatically, without making a diff - useful for CI
    // default: false
    updateImages: true,
    // directory path in which screenshot images will be stored
    // relative path are resolved against project root
    // absolute paths (both on unix and windows OS) supported
    // path separators will be normalised by the plugin depending on OS, you should always use / as path separator, e.g.: C:/my-directory/nested for windows-like drive notation
    // There are one special variable available to be used in the path:
    // - {spec_path} - relative path leading from project root to the current spec file directory (e.g. `/src/components/my-tested-component`)
    // default: '{spec_path}/__image_snapshots__'
    imagesPath: 'this-might-be-your-custom/maybe-nested-directory',
    // maximum threshold above which the test should fail
    // default: 0.01
    maxDiffThreshold: 0.1,
    // forces scale factor to be set as value "1"
    // helps with screenshots being scaled 2x on high-density screens like Mac Retina
    // default: true
    forceDeviceScaleFactor: false,
    // title used for naming the image file
    // default: Cypress.currentTest.titlePath (your test title)
    title: `${Cypress.currentTest.titlePath.join(' ')} (${Cypress.browser.displayName})`,
    // pass a path to custom image that should be used for comparison
    // instead of checking against the image from previous run
    // default: undefined
    matchAgainstPath: '/path/to/reference-image.png'
  })*/