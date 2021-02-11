const connection = require('./connection')

module.exports = {
  listAllProducts
}

function listAllProducts (db = connection) {
  return db('products')
    .select()
}
