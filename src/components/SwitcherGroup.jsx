import React from 'react'

import './SwitcherGroup.less'

export default class Switcher extends React.Component {
  render () {
    return (
      <div className="switcher-group">
        {this.props.children}
      </div>
    )
  }
}
