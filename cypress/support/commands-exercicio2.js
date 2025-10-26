// Comandos customizados para os testes do CommitQuality
// Criado em: 21/10/2025
// Autor: Lilian

const { faker } = require('@faker-js/faker');

// Configurar locale para português brasileiro
faker.locale = 'pt_BR';

Cypress.Commands.add('visitCommitQuality', (path = '') => {
  const baseUrl = 'https://commitquality.com';
  cy.visit(`${baseUrl}${path}`);
});

// Comandos para preenchimento com dados fake

// Comando para gerar e preencher email
Cypress.Commands.add('preencherEmailFaker', (selector) => {
  const emailFake = faker.internet.email();
  cy.log(`Email gerado: ${emailFake}`);
  cy.get(selector).clear().type(emailFake);
  return cy.wrap(emailFake);
});

// Comando para gerar e preencher senha
Cypress.Commands.add('preencherSenhaFaker', (selector) => {
  const senhaFake = faker.internet.password(12);
  cy.log(`Senha gerada: ${senhaFake}`);
  cy.get(selector).clear().type(senhaFake);
  return cy.wrap(senhaFake);
});

// Comando para gerar e preencher nome completo
Cypress.Commands.add('preencherNomeFaker', (selector) => {
  const nomeFake = faker.person.fullName();
  cy.log(`Nome gerado: ${nomeFake}`);
  cy.get(selector).clear().type(nomeFake);
  return cy.wrap(nomeFake);
});

// Comando para gerar e preencher usuário fake
Cypress.Commands.add('preencherUsuarioFaker', (selector) => {
  const usuarioFake = faker.internet.username();
  cy.log(`Usuário gerado: ${usuarioFake}`);
  cy.get(selector).clear().type(usuarioFake);
  return cy.wrap(usuarioFake);
});

// Comando para gerar e preencher telefone fake
Cypress.Commands.add('preencherTelefoneFaker', (selector) => {
  const telefoneFake = faker.phone.number('(##) #####-####');
  cy.log(`Telefone gerado: ${telefoneFake}`);
  cy.get(selector).clear().type(telefoneFake);
  return cy.wrap(telefoneFake);
});

// Comando para gerar e preencher CPF fake
Cypress.Commands.add('preencherCpfFaker', (selector) => {
  const cpfFake = faker.string.numeric('###.###.###-##');
  cy.log(`CPF gerado: ${cpfFake}`);
  cy.get(selector).clear().type(cpfFake);
  return cy.wrap(cpfFake);
});

// Comando para gerar e preencher endereço fake
Cypress.Commands.add('preencherEnderecoFaker', (selector) => {
  const enderecoFake = faker.location.streetAddress();
  cy.log(`Endereço gerado: ${enderecoFake}`);
  cy.get(selector).clear().type(enderecoFake);
  return cy.wrap(enderecoFake);
});

// Comando para gerar e preencher cidade fake
Cypress.Commands.add('preencherCidadeFaker', (selector) => {
  const cidadeFake = faker.location.city();
  cy.log(`Cidade gerada: ${cidadeFake}`);
  cy.get(selector).clear().type(cidadeFake);
  return cy.wrap(cidadeFake);
});

// Comando para gerar e preencher empresa fake
Cypress.Commands.add('preencherEmpresaFaker', (selector) => {
  const empresaFake = faker.company.name();
  cy.log(`Empresa gerada: ${empresaFake}`);
  cy.get(selector).clear().type(empresaFake);
  return cy.wrap(empresaFake);
});

// Comando para gerar e preencher texto fake
Cypress.Commands.add('preencherTextoFaker', (selector, tipo = 'paragraph') => {
  let textoFake;
  switch (tipo) {
    case 'sentence':
      textoFake = faker.lorem.sentence();
      break;
    case 'word':
      textoFake = faker.lorem.word();
      break;
    default:
      textoFake = faker.lorem.paragraph();
  }
  cy.log(`Texto gerado: ${textoFake}`);
  cy.get(selector).clear().type(textoFake);
  return cy.wrap(textoFake);
});

// Comando para gerar e preencher nome de produto fake
Cypress.Commands.add('preencherProdutoFaker', (selector) => {
  const produtoFake = faker.commerce.productName();
  cy.log(`Produto gerado: ${produtoFake}`);
  cy.get(selector).clear().type(produtoFake);
  return cy.wrap(produtoFake);
});

// Comando para gerar e preencher preço fake
Cypress.Commands.add('preencherPrecoFaker', (selector) => {
  const precoFake = faker.commerce.price({ min: 10, max: 1000, dec: 2 });
  cy.log(`Preço gerado: ${precoFake}`);
  cy.get(selector).clear().type(precoFake);
  return cy.wrap(precoFake);
});

// COMANDO UNIVERSAL PARA LOGIN COM FAKER
Cypress.Commands.add('loginComFaker', () => {
  const dadosLogin = {
    email: faker.internet.email(),
    senha: faker.internet.password(12),
    usuario: faker.internet.username()
  };
  
  cy.log('Realizando login com dados faker...');
  cy.log(`Email: ${dadosLogin.email}`);
  cy.log(`Usuário: ${dadosLogin.usuario}`);
  
  // Procurar campos de login na página
  cy.get('body').then($body => {
    // Campo de email/usuário
    const campoEmail = $body.find('input[type="email"], input[name*="email"], input[placeholder*="email"], input[name*="user"], input[placeholder*="user"]');
    if (campoEmail.length > 0) {
      cy.wrap(campoEmail.first()).clear().type(dadosLogin.email);
    }
    
    // Campo de senha
    const campoSenha = $body.find('input[type="password"], input[name*="password"], input[placeholder*="senha"]');
    if (campoSenha.length > 0) {
      cy.wrap(campoSenha.first()).clear().type(dadosLogin.senha);
    }
  });
  
  return cy.wrap(dadosLogin);
});

Cypress.Commands.add('checkTableStructure', () => {
  cy.get('table').should('be.visible');
  cy.get('table tr').should('have.length.at.least', 1);
});

Cypress.Commands.add('checkNavigation', () => {
  cy.contains('Add Product').should('be.visible');
  cy.contains('Practice').should('be.visible');
  cy.contains('Login').should('be.visible');
});

// COMANDOS PARA APRESENTAÇÃO VISUAL

// Comando para apresentação - adiciona delay visual
Cypress.Commands.add('apresentacao', (acao, tempo = 2000) => {
  cy.log(`${acao}`);
  cy.wait(tempo);
});

// Comando para destacar elemento antes de clicar
Cypress.Commands.add('clickApresentacao', (selector, descricao = '') => {
  cy.log(`Clicando em: ${descricao || selector}`);
  cy.get(selector).should('be.visible')
    .then($el => {
      // Destacar elemento com borda
      $el.css('border', '3px solid #ff6b6b');
      $el.css('background-color', '#fff3cd');
    });
  cy.wait(1500); // Pausa para visualizar
  cy.get(selector).click();
  cy.wait(1000); // Pausa após clique
});

// Comando para verificação com destaque visual
Cypress.Commands.add('verificarApresentacao', (selector, texto = '') => {
  cy.log(`Verificando: ${texto || selector}`);
  cy.get(selector).should('be.visible')
    .then($el => {
      // Destacar elemento verificado
      $el.css('border', '2px solid #28a745');
    });
  cy.wait(1000);
});

Cypress.Commands.add('checkResponsiveness', (viewports) => {
  viewports.forEach(viewport => {
    cy.viewport(viewport.width, viewport.height);
    cy.log(`Testing ${viewport.name} - ${viewport.width}x${viewport.height}`);
    cy.get('body').should('be.visible');
  });
});

Cypress.Commands.add('measureLoadTime', (maxTime = 3000) => {
  const startTime = Date.now();
  return cy.window().then(() => {
    const loadTime = Date.now() - startTime;
    expect(loadTime).to.be.lessThan(maxTime);
    return cy.wrap(loadTime);
  });
});

Cypress.Commands.add('checkAccessibility', () => {
  // Verificar título
  cy.title().should('not.be.empty');
  
  // Verificar navegação por teclado
  cy.get('a, button, input').first().then($el => {
    if ($el.length > 0) {
      cy.wrap($el).focus();
      cy.focused().should('exist');
    }
  });
});

// Comando para tab navigation
Cypress.Commands.add('tab', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).trigger('keydown', { key: 'Tab' });
  return cy.focused();
});

// COMANDOS PARA TESTES RÁPIDOS (sem delays)

// Comando para click rápido
Cypress.Commands.add('clickRapido', (selector, descricao = '') => {
  if (descricao) cy.log(`Clicando em: ${descricao}`);
  cy.get(selector).should('be.visible').click();
});

// Comando para verificação rápida
Cypress.Commands.add('verificarRapido', (selector, texto = '') => {
  if (texto) cy.log(`Verificando: ${texto}`);
  cy.get(selector).should('be.visible');
  if (texto) {
    cy.get(selector).should('contain.text', texto);
  }
});

// COMANDOS ESSENCIAIS PARA OS TESTES

// Comando getFlexivel - busca elemento de forma flexível
Cypress.Commands.add('getFlexivel', (...selectors) => {
  cy.log(`Buscando elemento com opções: ${selectors.join(', ')}`);
  
  // Tentar cada seletor em sequência
  for (const selector of selectors) {
    // Tentar por data-testid
    const resultado = Cypress.$(`[data-testid="${selector}"]`);
    if (resultado.length > 0) {
      cy.log(`Encontrado por data-testid: ${selector}`);
      return cy.get(`[data-testid="${selector}"]`);
    }
    
    // Tentar por texto
    const resultadoTexto = Cypress.$(`*:contains("${selector}")`);
    if (resultadoTexto.length > 0) {
      cy.log(`Encontrado por texto: ${selector}`);
      return cy.contains(selector);
    }
    
    // Tentar por seletor CSS direto
    const resultadoCss = Cypress.$(selector);
    if (resultadoCss.length > 0) {
      cy.log(`Encontrado por CSS: ${selector}`);
      return cy.get(selector);
    }
  }
  
  // Se não encontrou nada, tentar o primeiro seletor
  cy.log(`Usando primeiro seletor como fallback: ${selectors[0]}`);
  return cy.get(`[data-testid="${selectors[0]}"]`);
});

// Comando para navegar para uma página específica
Cypress.Commands.add('navegarPara', (pagina) => {
  cy.log(`Navegando para: ${pagina}`);
  
  // Tratamento especial para páginas que não estão em /practice
  if (pagina === 'login') {
    // Clicar no link Login na navbar
    cy.contains('a', 'Login').click();
    cy.wait(500);
  } else if (pagina === 'practice') {
    // Clicar no link Practice na navbar
    cy.contains('a', 'Practice').click();
    cy.wait(500);
  } else if (pagina === 'addproduct') {
    // Add Product tem link direto na navbar
    cy.get('[data-testid="navbar-addproduct"]').click();
    cy.wait(500);
  } else {
    // Para outras páginas, primeiro garantir que estamos em /practice
    cy.url().then(url => {
      if (!url.includes('/practice')) {
        cy.contains('a', 'Practice').click();
        cy.wait(500);
      }
    });
    
    // Agora clicar no card de prática específico
    const selector = `div[data-testid="practice-${pagina}"]`;
    cy.get(selector).should('exist').within(() => {
      cy.contains('Click here to practice').click();
    });
    cy.wait(500);
  }
});

// Comando para adicionar delay visual nos testes
Cypress.Commands.add('waitDemo', (tempo = 500) => {
  cy.wait(tempo);
});

// Comando para testar responsividade
Cypress.Commands.add('testarResponsividade', (selector) => {
  const viewports = [
    { width: 1920, height: 1080, name: 'Desktop' },
    { width: 1366, height: 768, name: 'Laptop' },
    { width: 768, height: 1024, name: 'Tablet' },
    { width: 375, height: 667, name: 'Mobile' }
  ];
  
  viewports.forEach(viewport => {
    cy.viewport(viewport.width, viewport.height);
    cy.log(`Testando ${viewport.name} (${viewport.width}x${viewport.height})`);
    cy.get(selector).should('be.visible');
  });
});

// Comando para validar elemento visível
Cypress.Commands.add('validarVisivel', (selector, descricao = '') => {
  if (descricao) cy.log(`Validando: ${descricao}`);
  cy.get(`[data-testid="${selector}"]`).should('be.visible');
});
