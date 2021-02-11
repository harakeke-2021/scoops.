exports.up = function (knex) {
  return knex.schema.createTable('cones_cups', table => {
    table.increments('id')
    table.string('name')
    table.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cones_cups')
}
