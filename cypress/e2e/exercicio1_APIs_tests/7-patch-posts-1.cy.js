// Testes de API - PATCH /posts/1

describe('API - PATCH /posts/1', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const endpoint = '/posts/1';
  const payload = {
    title: 'Título alterado via PATCH'
  };

  it('Valida o status code 200 para PATCH /posts/1', () => {
    cy.request('PATCH', baseUrl + endpoint, payload).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Valida o tempo de resposta menor que 500ms', () => {
    const start = Date.now();
    cy.request('PATCH', baseUrl + endpoint, payload).then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(500);
    });
  });

  it('Valida o corpo de resposta a nível de schema', () => {
    cy.request('PATCH', baseUrl + endpoint, payload).then((response) => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.include.all.keys('id', 'title', 'body', 'userId');
      expect(response.body.id).to.eq(1);
      expect(response.body.title).to.eq('Título alterado via PATCH');
    });
  });
});
