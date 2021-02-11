exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('toppings').insert([
    {
      id: 1,
      name: 'cherry',
      price: 0.5,
      imgage: '/images/cherry.jpg' 
    },
    {
      id: 2,
      name: 'chopped walnuts',
      price: 0.5,
      image: '/images/chopped-walnuts.jpg'
    },
    {
      id: 3,
      name: 'sprinkles',
      price: 0.25,
      image: '/images/sprinkles.jpg'
    },
    {
      id: 4,
      name: 'chocolate chips',
      price: 0.5,
      image: '/images/choc-chips.jpg'
    }
  ])
}
