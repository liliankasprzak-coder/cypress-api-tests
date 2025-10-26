// Testes de API - DELETE /posts/1

describe('API - DELETE /posts/1', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const endpoint = '/posts/1';

  it('Valida o status code 200 para DELETE /posts/1', () => {
    cy.request('DELETE', baseUrl + endpoint).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Valida o tempo de resposta menor que 500ms', () => {
    const start = Date.now();
    cy.request('DELETE', baseUrl + endpoint).then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(500);
    });
  });

  it('Valida o corpo de resposta a nível de schema (objeto vazio)', () => {
    cy.request('DELETE', baseUrl + endpoint).then((response) => {
      expect(response.body).to.be.an('object');
      expect(Object.keys(response.body)).to.have.length(0); // corpo vazio
    });
  });
});
