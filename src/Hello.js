import React from 'react'
import store from './store'
import wrap  from './Wrapper'

const Hello = ({ name }) =>
  <h1>Hello {name}!</h1>

var result = wrap(Hello, {
  name: 'name',
})

export default result
