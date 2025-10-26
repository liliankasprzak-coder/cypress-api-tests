# Cypress API & E2E Tests - CommitQuality

> Projeto de automação de testes E2E usando Cypress para a aplicação CommitQuality

**Autora:** Lilian Kasprzak  
**Função:** Analista de QA  
**Data:** Outubro 2025

---

## Sobre o Projeto

Este projeto contém testes automatizados E2E (End-to-End) para a aplicação [CommitQuality](https://commitquality.com/), desenvolvidos com Cypress.

### Objetivos
- Validar funcionalidades principais da aplicação
- Garantir qualidade através de testes automatizados
- Documentar cenários de teste
- Utilizar dados dinâmicos com Faker.js

---

## Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **Faker.js** (@faker-js/faker) - Geração de dados fake
- **Node.js** - Ambiente de execução

---

## Estrutura do Projeto

```
cypress-api-tests/
├── cypress/
│   ├── downloads/              # Arquivos baixados durante testes
│   │   └── dummy_file.txt
│   ├── e2e/
│   │   ├── exercicio1_APIs/    # Testes de API
│   │   ├── exercicio2_commitquality_cenarios/  # Documentação dos cenários
│   │   │   ├── cenarios-tela-add-product.txt
│   │   │   ├── cenarios-tela-practice-mock-data-layer.txt
│   │   │   └── ... (outros cenários)
│   │   └── exercicio2_commitquality_tests/     # Testes E2E
│   │       ├── tela-add-product.cy.js
│   │       ├── tela-practice-*.cy.js
│   │       └── ... (outros testes)
│   ├── fixtures/
│   │   └── data-testids.json   # Lista de data-testids da aplicação
│   └── support/
│       ├── commands-exercicio2.js  # Comandos customizados
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## Instalação

### Pré-requisitos
- Node.js (v14 ou superior)
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

## Executando os Testes

### Modo Interativo (Cypress UI)
```bash
npm run cypress:open
```

### Modo Headless (CLI)
```bash
# Executar todos os testes
npm run cypress:run

# Executar teste específico
npx cypress run --spec "cypress/e2e/exercicio2_commitquality_tests/tela-add-product.cy.js"

# Executar com browser específico
npx cypress run --browser chrome
```

---

## Testes Implementados

### Tela Add Product (13 testes)
- Validação de acesso à página
- Validação de URL
- Testes de refresh (botão, F5, Ctrl+R)
- Validação de responsividade
- Validação de layout
- Adicionar produto com sucesso
- Validação de campos obrigatórios
- Validação de botão Cancel

**Status:** 13/13 passando

### Tela Practice Mock Data Layer (10 testes)
- Validação de estrutura da datalayer
- Validação de eventos
- Validação de propriedades
- Validação de formato dos dados mockados

**Status:** 10/10 passando

### Outros Testes Practice
- File Download
- File Upload
- Drag & Drop
- Contact Form
- Accordions
- Random Overlay
- iFrame
- API
- Dynamic Text
- Clock
- General Components

---

## Comandos Customizados

O projeto possui comandos customizados em `cypress/support/commands-exercicio2.js`:

### Navegação
```javascript
cy.navegarPara('addproduct')  // Navega para Add Product via navbar
cy.navegarPara('practice')    // Navega para Practice
cy.navegarPara('login')       // Navega para Login
```

### Preenchimento com Faker
```javascript
cy.preencherProdutoFaker(selector)   // Preenche nome de produto
cy.preencherPrecoFaker(selector)     // Preenche preço
cy.preencherEmailFaker(selector)     // Preenche email
cy.preencherNomeFaker(selector)      // Preenche nome
cy.preencherTelefoneFaker(selector)  // Preenche telefone
```

### Validações
```javascript
cy.testarResponsividade(selector)  // Testa em múltiplas resoluções
cy.validarVisivel(selector)        // Valida elemento visível
cy.waitDemo(tempo)                 // Delay visual para demonstração
```

---

## Resultados dos Testes

### Última Execução
- **Total de testes:** 13 (tela-add-product)
- **Passou:** 13
- **Falhou:** 0
- **Duração:** ~20 segundos
- **Browser:** Chrome 141 (headless)

---

## Correções Realizadas

### Problema: Navegação para Add Product falhando
**Causa:** Comando `cy.navegarPara('addproduct')` tentava encontrar card `practice-addproduct` que não existe

**Solução:** Corrigido para clicar no link da navbar `[data-testid="navbar-addproduct"]`

### Problema: Comandos Faker não encontrados
**Causa:** Faltavam comandos `preencherProdutoFaker` e `preencherPrecoFaker`

**Solução:** Adicionados os comandos usando `faker.commerce.productName()` e `faker.commerce.price()`

---

## Documentação

Todos os cenários de teste estão documentados em arquivos `.txt` na pasta:
```
cypress/e2e/exercicio2_commitquality_cenarios/
```

Cada arquivo contém:
- Objetivos do teste
- Pré-condições
- Passos detalhados
- Resultados esperados
- Status de execução

---

## Configuração

### cypress.config.js
```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://commitquality.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
  },
});
```

---

## Dependências Principais

```json
{
  "devDependencies": {
    "@faker-js/faker": "^x.x.x",
    "cypress": "^13.x.x"
  }
}
```

---

## Contribuindo

1. Crie testes seguindo o padrão existente
2. Documente cenários em arquivos `.txt`
3. Use comandos customizados sempre que possível
4. Execute todos os testes antes de commitar

---

## Contato

**Lilian Kasprzak**  
Analista de QA

---

## Licença

Este projeto é de uso educacional e para fins de demonstração de automação de testes.

---

**Última atualização:** 26/10/2025