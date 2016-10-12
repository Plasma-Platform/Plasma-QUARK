import React from 'react'

import Loader from '../Loader.jsx'

export default class L1 extends React.Component {
  render () {
    return (
      <Loader
        {...this.props}
        width  = "full"
        height = "large"
      />
    )
  }
}
