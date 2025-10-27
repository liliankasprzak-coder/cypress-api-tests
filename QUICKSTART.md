# Guia Rápido - Cypress API Tests

**3 passos para executar os testes:**

## 1. Clone e Instale
```bash
git clone https://github.com/liliankasprzak-coder/cypress-api-tests.git
cd cypress-api-tests
npm install
```

## 2. Execute os Testes
```bash
npm run test:api
```

## 3. Resultado Esperado
```
✓ Testes de API REST (GET/POST/PUT/PATCH/DELETE)
✓ Todos devem passar
```

---

## Comandos Úteis

```bash
# Modo interativo
npm run cypress:open

# Teste específico
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/1-get-posts.cy.js"
```

---

**Data:** 27/10/2025
