const express = require('express')

const app = express()

app.use(express.json())

app.get('/users', (request, response) => {
  return response.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Maicon Andraski'
  })
})

app.listen(3333)
