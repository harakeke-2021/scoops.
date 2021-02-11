import request from 'superagent'

export function getFlavours () {
  return request.get('/api/v1/ice-cream')
    .then((res) => {
      return res.body.filter((product) => {
        return product.category === 'flavours'
      })
    })
}

export function getToppings () {
  return request.get('/api/v1/ice-cream')
    .then((res) => {
      return res.body.filter((product) => {
        return product.category === 'toppings'
      })
    })
}

export function getCones () {
  return request.get('/api/v1/ice-cream')
    .then((res) => {
      return res.body.filter((product) => {
        return product.category === 'cones'
      })
    })
}
