// Testes de API - GET /posts/1/comments

describe('API - GET /posts/1/comments', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const endpoint = '/posts/1/comments';

  it('Valida o status code 200 para GET /posts/1/comments', () => {
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
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.all.keys('postId', 'id', 'name', 'email', 'body');
    });
  });
});
