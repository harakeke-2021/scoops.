exports.up = function (knex) {
  return knex.schema.createTable('toppings', table => {
    table.increments('id')
    table.string('name')
    table.integer('price')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('toppings')
}
