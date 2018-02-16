import React from 'react'
import store from './store'

const wrap = (WrappedComponent, propertyMap) =>
  class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {}
    }

    componentWillMount () {
      this.cancels = Object.keys(propertyMap).map(property =>
        store.addListener(property, value =>
          this.setState(propertyMap[property], value)
        )
      )
    }

    render () {
      var reducer = (acc, property) => {
        var propName = propertyMap[property]
        ,   value    = this.state[propName]

        acc[propName] = value
        return acc
      }

      return <WrappedComponent {
        ...Object.keys(propertyMap).reduce(reducer, {})
      } />
    }
  }

export default wrap
