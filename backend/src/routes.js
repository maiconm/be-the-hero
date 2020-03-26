const express = require('express')

const OngController = require('./controllers/OngControllers')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

module.exports = routes