const path = require('path')
const express = require('express')

const iceCream = require('./routes/ice-cream')
const orders = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/ice-cream', iceCream)
server.use('/api/v1/orders', orders)

module.exports = server
