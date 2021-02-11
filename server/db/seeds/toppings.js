exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('toppings').insert([
    {
      id: 1,
      name: 'rowValue1',
      description: 'asdflkj',
      price: 2
    }
  ])
}
