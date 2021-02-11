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
      description: 'Lemon soybay flavoured with a lime ripple.',
      price: 3
    },
    {
      id: 5,
      name: 'Mango',
      description: 'Mango flavoured frozen yoghurt with a mango ripple.',
      price: 3
    },
    {
      id: 5,
      name: 'Mint Choc',
      description: 'Mint flavoured frozen ice cream with a mango ripple.',
      price: 3
    },
    {
      id: 5,
      name: 'Raspberry',
      description: 'Raspberry flavoured frozen ice cream.',
      price: 3
    },
    {
      id: 6,
      name: 'Rum raisin',
      description: 'Rum flavoured frozen ice cream with dipped raisins.',
      price: 3
    },
    {
      id: 6,
      name: 'Strawberry',
      description: 'A summer fav frozen ice cream made with fresh strawberry.',
      price: 3
    },
    {
      id: 7,
      name: 'Vanilla',
      description: 'A New Zealand classic flavoure we all know and love, the taste of summer and birthdays.',
      price: 3
    }
  ])
}
