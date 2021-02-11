exports.up = (knex) => {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('category')
    table.string('description')
    table.integer('price')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
