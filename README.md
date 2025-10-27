# Cypress API Tests

> Testes automatizados de APIs usando Cypress (Exercício 1)

**Autora:** Lilian Kasprzak  
**Função:** Analista de QA  
**Data:** Outubro 2025

---

## Sobre o Projeto

Este repositório contém apenas os testes de API do Exercício 1, organizados por cenários e specs. Os testes utilizam o serviço público JSONPlaceholder (GET/POST/PUT/PATCH/DELETE) e validam status, tempo de resposta e estrutura básica do payload.

### Objetivos
- Validar endpoints REST (CRUD)
- Garantir respostas dentro de tempos aceitáveis
- Manter cenários documentados

---

## Tecnologias Utilizadas

- **Cypress** - Testes de API e E2E
- **JavaScript** - Linguagem de testes
- **Node.js** - Ambiente de execução
- (Opcional) **AJV** - Validação de JSON Schema para contratos

---

## Estrutura do Projeto

```
cypress-api-tests/
├── cypress/
│   ├── e2e/
│   │   ├── exercicio1_APIs_cenarios/   # Cenários Gherkin salvos em .txt
│   │   └── exercicio1_APIs_tests/      # Especificações (.cy.js)
│   ├── fixtures/
│   │   └── schemas/                    # (Opcional) JSON Schemas para contratos
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
git clone <url-do-repositorio>

# 2. Entre na pasta do projeto
cd cypress-api-tests

# 3. Instale as dependências
npm install
```

---

## Execução

### Modo Interativo (UI do Cypress)
```bash
npm run cypress:open
```

### Modo Headless (CLI)
```bash
# Executar apenas os testes de API do Exercício 1
npm run test:api

# Executar um arquivo específico (exemplo)
npx cypress run --spec "cypress/e2e/exercicio1_APIs_tests/1-get-posts.cy.js"
```

---

 

## Contato

**Lilian Kasprzak**  
Analista de QA

---

## Licença

Uso educacional e demonstração de automação de testes.

---

**Última atualização:** 26/10/2025