// Utilitário de validação de schemas JSON
// Criado em: 21/10/2025
// Autor: Lilian

const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, strict: false })

function validate(schema, data) {
  const ok = ajv.validate(schema, data)
  if (!ok) {
    const msg = ajv.errorsText(ajv.errors, { separator: '\n' })
    throw new Error(`Schema validation failed:\n${msg}`)
  }
}

function validateArray(schema, arr) {
  expect(arr, 'response should be an array').to.be.an('array')
  arr.forEach((item, i) => {
    try {
      validate(schema, item)
    } catch (e) {
      throw new Error(`Item index ${i} invalid: ${e.message}`)
    }
  })
}

module.exports = { validate, validateArray }
