exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('flavours').insert([
    {
      id: 1,
      name: 'Chocolate',
      description: 'A New Zealands classic. A rich flavoured ice cream.',
      price: 3
    },
    {
      id: 2,
      name: 'Choc Salted Caramel',
      description: 'Caramel flavoured ice cream with a chocolate saulted ripple.',
      price: 3
    },
    {
      id: 3,
      name: 'Hazelnut',
      description: 'The winner of the Best of Nuts category.',
      price: 3
    },
    {
      id: 4,
      name: 'Lemon Lime',
      description: 'Lemon flavoured with a lime ripple.',
      price: 3
    },
    {
      id: 5,
      name: 'Mango',
      description: 'Mango flavoured frozen yoghurt with a mango ripple.',
      price: 3
    }

  ])
}
