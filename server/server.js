const path = require('path')
const express = require('express')

const iceCream = require('./routes/ice-cream')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/ice-cream', iceCream)

module.exports = server
