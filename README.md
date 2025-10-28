<div align="center">

# 🚀 Cypress API Tests

### Testes automatizados de APIs REST usando Cypress

**Autora:** Lilian Kasprzak  
**Função:** Analista de QA  
**Data:** Outubro 2025

---

[![Cypress](https://img.shields.io/badge/Cypress-15.5.0-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://cypress.io)
[![Node](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen?style=for-the-badge&logo=checkmarx&logoColor=white)](https://github.com/liliankasprzak-coder/cypress-api-tests)
[![API](https://img.shields.io/badge/API-JSONPlaceholder-FF6C37?style=for-the-badge&logo=json&logoColor=white)](https://jsonplaceholder.typicode.com/)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/liliankasprzak-coder/cypress-api-tests/actions)

➡️ **[QUICKSTART - Guia Rápido de 3 Passos](QUICKSTART.md)** ⚡

</div>

---

## 📋 Sobre o Projeto

Este repositório contém **testes automatizados de API REST**, validando endpoints do serviço público **JSONPlaceholder** com validações completas de status, schema e performance.

<div align="center">

### 🎯 O que está incluído

</div>

| Funcionalidade | Descrição |
|:---|:---|
| ✅ **Testes REST** | Cobertura completa (GET/POST/PUT/PATCH/DELETE) |
| ✅ **Status Code** | Validação de todos os códigos HTTP |
| ✅ **Performance** | Tempo de resposta < 500ms |
| ✅ **Schema** | Validação JSON Schema com AJV |
| ✅ **Gherkin** | Cenários BDD documentados |
| ✅ **CI/CD** | GitHub Actions automatizado |

### 🔗 Endpoints Testados

```
GET    /posts           → Listar todos os posts
GET    /posts/{id}      → Buscar post específico
POST   /posts           → Criar novo post
PUT    /posts/{id}      → Atualizar post completo
PATCH  /posts/{id}      → Atualizar post parcialmente
DELETE /posts/{id}      → Deletar post
```

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

| Tecnologia | Versão | Descrição |
|:---:|:---:|:---|
| ![Cypress](https://img.shields.io/badge/Cypress-15.5.0-17202C?logo=cypress&logoColor=white) | `^15.5.0` | Framework de testes E2E |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) | ES6+ | Linguagem de programação |
| ![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white) | 18.x | Runtime JavaScript |
| ![AJV](https://img.shields.io/badge/AJV-8.17.1-23C4DD?logo=json&logoColor=white) | `^8.17.1` | Validação JSON Schema |

</div>

---

## Estrutura do Projeto

```
cypress-api-tests/
├── cypress/
│   ├── e2e/
│   │   ├── exercicio1_APIs_cenarios/   # Cenários Gherkin (.txt)
│   │   └── exercicio1_APIs_tests/      # Specs de teste (.cy.js)
│   ├── fixtures/
│   │   └── schemas/                    # JSON Schemas para validação
│   └── support/
│       └── schema.js                   # Helpers de validação (AJV)
├── cypress.config.js
├── package.json
└── README.md
```

---

## Instalação

### Pré-requisitos
- Node.js 18+ (recomendado)
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/liliankasprzak-coder/cypress-api-tests.git

# 2. Entre na pasta do projeto
cd cypress-api-tests

# 3. Instale as dependências
npm install
```

---

## Execução dos Testes

### Modo Interativo (UI do Cypress)
```bash
npm run cypress:open
```

### Executar TODOS os testes de API
```bash
npm run test:api
# ou
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/**/*.cy.js"
```

### Executar um arquivo específico
```bash
# GET posts
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/1-get-posts.cy.js"

# POST posts
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/5-post-posts.cy.js"

# PUT posts
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/6-put-posts-1.cy.js"

# PATCH posts
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/7-patch-posts-1.cy.js"

# DELETE posts
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/8-delete-posts-1.cy.js"
```

---

## Estrutura dos Testes

### Exemplo de Teste GET
```javascript
describe('API - GET /posts', () => {
  it('Valida o status code 200 para GET /posts', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});
```

### Exemplo de Teste POST
```javascript
describe('API - POST /posts', () => {
  it('Valida criação de post com status 201', () => {
    const payload = {
      title: 'Título do Post',
      body: 'Conteúdo do post',
      userId: 1
    };
    
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', payload)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
  });
});
```

---

## Validações Implementadas

### 1. Status Code
Valida se o código de status HTTP está correto:
- GET: 200
- POST: 201
- PUT: 200
- PATCH: 200
- DELETE: 200

### 2. Tempo de Resposta
Valida se a API responde em tempo aceitável (< 500ms)

### 3. Estrutura do Payload
Valida se o corpo da resposta contém os campos esperados

### 4. JSON Schema (Opcional)
Valida se a resposta segue o contrato definido no schema

---

## Cenários Gherkin

Todos os cenários estão documentados em `cypress/e2e/exercicio1_APIs_cenarios/`:

- `1-cenario-get-posts.txt` - Cenários GET
- `5-cenario-post-posts.txt` - Cenários POST
- `6-cenario-put-posts-1.txt` - Cenários PUT
- `7-cenario-patch-posts-1.txt` - Cenários PATCH
- `8-cenario-delete-posts-1.txt` - Cenários DELETE

---

## Scripts Disponíveis

```json
{
  "cypress:open": "Abre interface do Cypress",
  "cypress:run": "Executa todos os testes headless",
  "test:api": "Executa apenas testes de API"
}
```

---

## Troubleshooting

### Problema: "Cannot find module"
**Solução:**
```bash
npm install
```

### Problema: Testes não encontrados
**Solução:** Verifique se está na pasta correta:
```bash
pwd  # ou cd no Windows
# Deve estar em: .../cypress-api-tests
```

### Problema: Erro de conexão com API
**Solução:** A API JSONPlaceholder é pública e deve estar sempre disponível. Verifique sua conexão de internet.

---

## Resultados Esperados

Ao executar `npm run test:api`, você deve ver:

```
  ✓ Testes de GET /posts
  ✓ Testes de GET /posts/{id}
  ✓ Testes de POST /posts
  ✓ Testes de PUT /posts/{id}
  ✓ Testes de PATCH /posts/{id}
  ✓ Testes de DELETE /posts/{id}
  
  X passing (Xs)
```

---

## Repositórios Relacionados

Este projeto faz parte de uma série de repositórios de testes automatizados:

- **[cypress-api-tests](https://github.com/liliankasprzak-coder/cypress-api-tests)** ← Você está aqui
- **[cypress-api-tests-patterns](https://github.com/liliankasprzak-coder/cypress-api-tests-patterns)** - Versão com Design Patterns
- **[cypress-commitquality-tests](https://github.com/liliankasprzak-coder/cypress-commitquality-tests)** - Testes de UI
- **[cypress-commitquality-tests-patterns](https://github.com/liliankasprzak-coder/cypress-commitquality-tests-patterns)** - UI com Patterns

---

## Contato

**Lilian Kasprzak**  
Analista de QA

---

## Licença

MIT License - Uso educacional e demonstração de automação de testes.

---

**Última atualização:** 27/10/2025
