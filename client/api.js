import request from 'superagent'

export function getAll () {
  return request.get('/api/v1/ice-cream')
  .then(res => {
    const all = res.body
    return {
      flavours: getFlavours(all),
      toppings: getToppings(all),
      cones: getCones(all)
    }
  })
}


function getFlavours (all) {
  return all.filter((product) => {
    return product.category === 'flavours'
  })
}

function getTOppings (all) {
  return all.filter((product) => {
    return product.category === 'toppings'
  })
}


function getFlavours(all) {
  return all.filter((product) => {
    return product.category === 'cones'
  })
}
