// Configuração Cypress - Projeto 100% autoria Lilian Kasprzak
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '8yvjjh',
  e2e: {
    // Base utilizada pelos testes Web; os testes de API usam URLs absolutas.
    baseUrl: 'https://commitquality.com',
    // Considera todos os specs do projeto (APIs e Web)
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
