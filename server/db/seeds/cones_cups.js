exports.seed = function (knex) {
  return knex('cones_cups').insert([
    {
      id: 1,
      name: 'bruh',
      description: 'lkfd',
      price: 3
    }
  ])
}
