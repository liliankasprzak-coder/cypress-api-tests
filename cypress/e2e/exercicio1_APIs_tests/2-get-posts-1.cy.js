// Testes de API - GET /posts/1

describe('API - GET /posts/1', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const endpoint = '/posts/1';

  it('Valida o status code 200 para GET /posts/1', () => {
    cy.request(baseUrl + endpoint).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Valida o tempo de resposta menor que 500ms', () => {
    const start = Date.now();
    cy.request(baseUrl + endpoint).then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(500);
    });
  });

  it('Valida o corpo de resposta a nível de schema', () => {
    cy.request(baseUrl + endpoint).then((response) => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.all.keys('userId', 'id', 'title', 'body');
    });
  });
});