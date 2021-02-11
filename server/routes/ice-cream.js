const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
// need function that pulls data from database
// then return it as json for react components
  db.listAllProducts()
    .then((result) => {
      res.json(result)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})
