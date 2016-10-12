import React from 'react'

import './Loader.less'

export default class Loader extends React.Component {
  static propTypes = {
    width     : React.PropTypes.oneOf(['fixed', 'full']).isRequired,
    height    : React.PropTypes.oneOf(['medium', 'large']).isRequired,
    className : React.PropTypes.string
  }

  render () {
    const addClassName    = this.props.className ? ` ${this.props.className}` : ''
    const widthClassName  = ` loader_width_${this.props.width}`
    const heightClassName = ` loader_height_${this.props.height}`
    const fullClassName   = `loader${widthClassName}${heightClassName}${addClassName}`

    return (
      <span className={fullClassName}>
        <span className="loader__line"></span>
        <span className="loader__line"></span>
        <span className="loader__line"></span>
      </span>
    )
  }
}
