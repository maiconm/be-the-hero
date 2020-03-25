const express = require('express')

const routes = express.Router()

routes.get('/users', (request, response) => {
  return response.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Maicon Andraski'
  })
})

module.exports = routes