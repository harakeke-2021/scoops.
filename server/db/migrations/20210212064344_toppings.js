exports.up = function (knex) {
  return knex.schema.createTable('toppings', table => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('toppings')
}
