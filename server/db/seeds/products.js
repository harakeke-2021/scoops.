exports.seed = (knex) => {
  return knex('products').del()
    .then(() => {
      return knex('products').insert([
        {
          id: 1,
          name: 'Basic Cone',
          category: 'cones',
          description: 'Standard ice cream cone',
          price: 1,
          image: 'images/cones.jpg'
        },
        {
          id: 2,
          name: 'Waffle Cone',
          category: 'cones',
          description: 'Its all about the upgrades',
          price: 2,
          image: 'images/waffle-cone.jpg'
        },
        {
          // need to find an image for cup
          id: 3,
          name: 'Cup',
          category: 'cones',
          description: 'No limits here, put everything in a mini bowl',
          price: 1.50,
          image: ''
        },
        {
          id: 4,
          name: 'Chocolate',
          category: 'flavours',
          description: 'A New Zealands classic. A rich flavoured ice cream.',
          price: 6,
          image: 'images/chocolate.png'
        },
        {
          id: 5,
          name: 'Choc Salted Caramel',
          category: 'flavours',
          description: 'Caramel flavoured ice cream with a chocolate saulted ripple.',
          price: 7,
          image: 'images/chocolate-salted-caramel.png'
        },
        {
          id: 6,
          name: 'Hazelnut',
          category: 'flavours',
          description: 'The winner of the Best of Nuts category.',
          price: 3,
          image: 'images/hazelnut.png'
        },
        {
          id: 7,
          name: 'Lemon Lime',
          category: 'flavours',
          description: 'Lemon sorbet flavoured with a lime ripple.',
          price: 5,
          image: 'images/lemon-lime.png'
        },
        {
          id: 8,
          name: 'Mango',
          category: 'flavours',
          description: 'Mango flavoured sorbet with a mango ripple.',
          price: 7,
          image: 'images/mango.png'
        },
        {
          id: 9,
          name: 'Mint Choc',
          category: 'flavours',
          description: 'Mint flavoured frozen ice cream with a mango ripple.',
          price: 6,
          image: 'images/mint-chocolate.png'
        },
        {
          id: 10,
          name: 'Raspberry',
          category: 'flavours',
          description: 'Raspberry sorbet flavoured frozen ice cream.',
          price: 6,
          image: 'images/raspberry.png'
        },
        {
          id: 11,
          name: 'Rum Raisin',
          category: 'flavours',
          description: 'Rum flavoured frozen ice cream with dipped raisins.',
          price: 3,
          image: 'images/rum-raisin.png'
        },
        {
          id: 12,
          name: 'Strawberry',
          category: 'flavours',
          description: 'A summer fav frozen ice cream made with fresh strawberry.',
          price: 4,
          image: 'images/strawberry.png'
        },
        {
          id: 13,
          name: 'Vanilla',
          category: 'flavours',
          description: 'A New Zealand classic flavour we all know and love, the taste of summer and birthdays.',
          price: 4,
          image: 'images/vanilla.png'
        },
        {
          id: 14,
          name: 'Cherry',
          category: 'toppings',
          description: "Only pick this if it's for insta or something",
          price: 0.5,
          image: 'images/cherry.jpg'
        },
        {
          id: 15,
          name: 'Chopped Walnuts',
          category: 'toppings',
          description: "Let people know you're on a diet",
          price: 0.5,
          image: 'images/chopped-walnuts.jpg'
        },
        {
          id: 16,
          name: 'Sprinkles',
          category: 'toppings',
          description: 'Sprinkles, what else can I say',
          price: 0.25,
          image: 'images/sprinkles.jpg'
        },
        {
          id: 17,
          name: 'Chocolate Chips',
          category: 'toppings',
          description: "Can't go wrong with chocolate chip.",
          price: 0.5,
          image: 'images/choc-chips.jpg'
        }
      ])
    })
}
