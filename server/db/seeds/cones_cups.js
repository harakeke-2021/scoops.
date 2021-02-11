exports.seed = function (knex) {
  return knex('cones_cups').insert([
    {
      id: 1,
      name: 'cone',
      price: 1
    },
    {
      id: 2,
      name: 'waffle cone',
      price: 2
    },
    {
      id: 3,
      name: 'cup',
      price: 1.50
    }
  ])
}
