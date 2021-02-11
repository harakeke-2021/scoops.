exports.seed = (knex) => {
  return knex('products').del()
    .then(() => {
      return knex('products').insert([
        {
          id: 1,
          name: 'Basic Cone',
          category: 'cones',
          description: '',
          price: 1,
          image: ''
        },
        {
          id: 2,
          name: 'Waffle Cone',
          category: 'cones',
          description: '',
          price: 2,
          image: ''
        },
        {
          id: 3,
          name: 'Cup',
          category: 'cones',
          description: '',
          price: 1.50,
          image: ''
        },
        {
          id: 4,
          name: 'Chocolate',
          category: 'flavours',
          description: 'A New Zealands classic. A rich flavoured ice cream.',
          price: 3,
          image: ''
        },
        {
          id: 5,
          name: 'Choc Salted Caramel',
          category: 'flavours',
          description: 'Caramel flavoured ice cream with a chocolate saulted ripple.',
          price: 3,
          image: ''
        },
        {
          id: 6,
          name: 'Hazelnut',
          category: 'flavours',
          description: 'The winner of the Best of Nuts category.',
          price: 3,
          image: ''
        },
        {
          id: 7,
          name: 'Lemon Lime',
          category: 'flavours',
          description: 'Lemon sorbet flavoured with a lime ripple.',
          price: 3,
          image: ''
        },
        {
          id: 8,
          name: 'Mango',
          category: 'flavours',
          description: 'Mango flavoured sorbet with a mango ripple.',
          price: 3,
          image: ''
        },
        {
          id: 9,
          name: 'Mint Choc',
          category: 'flavours',
          description: 'Mint flavoured frozen ice cream with a mango ripple.',
          price: 3,
          image: ''
        },
        {
          id: 10,
          name: 'Raspberry',
          category: 'flavours',
          description: 'Raspberry sorbet flavoured frozen ice cream.',
          price: 3,
          image: ''
        },
        {
          id: 11,
          name: 'Rum Raisin',
          category: 'flavours',
          description: 'Rum flavoured frozen ice cream with dipped raisins.',
          price: 3,
          image: ''
        },
        {
          id: 12,
          name: 'Strawberry',
          category: 'flavours',
          description: 'A summer fav frozen ice cream made with fresh strawberry.',
          price: 3,
          image: ''
        },
        {
          id: 13,
          name: 'Vanilla',
          category: 'flavours',
          description: 'A New Zealand classic flavour we all know and love, the taste of summer and birthdays.',
          price: 3,
          image: ''
        },
        {
          id: 14,
          name: 'Cherry',
          category: 'toppings',
          description: '',
          price: 0.5,
          image: '/images/cherry.jpg'
        },
        {
          id: 15,
          name: 'Chopped Walnuts',
          category: 'toppings',
          description: '',
          price: 0.5,
          image: '/images/chopped-walnuts.jpg'
        },
        {
          id: 16,
          name: 'Sprinkles',
          category: 'toppings',
          description: '',
          price: 0.25,
          image: '/images/sprinkles.jpg'
        },
        {
          id: 17,
          name: 'Chocolate Chips',
          category: 'toppings',
          description: '',
          price: 0.5,
          image: '/images/choc-chips.jpg'
        }
      ])
    })
}
