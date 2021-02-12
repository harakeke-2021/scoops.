const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getOrders()
    .then((result) => {
      res.json(result)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})
