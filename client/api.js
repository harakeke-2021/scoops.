import request from 'superagent'

export function getProducts () {
  return request.get('/api/v1/ice-cream')
    .then((res) => res.body)
}

export function getFlavours () {
  return request.get('/api/v1/ice-cream/flavours')
    .then((res) => res.body)
}

export function getToppings () {
  return request.get('/api/v1/ice-cream/toppings')
    .then((res) => res.body)
}

export function getCones () {
  return request.get('/api/v1/ice-cream/cones')
    .then((res) => res.body)
}
