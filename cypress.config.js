const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Executar apenas os testes de API do Exercício 1
    specPattern: 'cypress/e2e/exercicio1_APIs_tests/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
