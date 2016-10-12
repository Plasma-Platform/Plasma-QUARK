import React                   from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './Popup.less'

export default class Popup extends React.Component {
  static propTypes = {
    open         : React.PropTypes.bool.isRequired,
    bg           : React.PropTypes.oneOf(['transparent', 'fill']).isRequired,
    padding      : React.PropTypes.oneOf(['medium', 'large']).isRequired,
    showCloseBtn : React.PropTypes.bool,
    closeText    : React.PropTypes.string.isRequired,
    className    : React.PropTypes.string,
    id           : React.PropTypes.string
  }

  render () {
    const addClassName     = this.props.className ? ` ${this.props.className}` : ''
    const bgClassName      = ` popup_bg_${this.props.bg}`
    const paddingClassName = ` popup_padding_${this.props.padding}`
    const fullClassName    = `popup${paddingClassName}${bgClassName}${addClassName}`

    const bg = <div
      className = "popup__bg"
      onClick   = {this.props.onRequestClose}
    >
    </div>

    const closeBtn = <button
      className  = "popup__close-btn"
      type       = "button"
      aria-label = {this.props.closeText}
      onClick    = {this.props.onRequestClose}
    >
      <span className="popup__close-text">{this.props.closeText}</span>
    </button>

    const content = <div className="popup__content">
      {this.props.showCloseBtn ? closeBtn : null}
      {this.props.children}
    </div>

    const inner = <div className="popup__inner" role="dialog">
      {bg}
      {content}
    </div>

    return (
      <ReactCSSTransitionGroup
        component              = "div"
        className              = {fullClassName}
        id                     = {this.props.id ? this.props.id : null}
        ref                    = {(ref) => { this.container = ref }}
        transitionAppear       = {false}
        transitionLeave        = {true}
        transitionLeaveTimeout = {0}
        transitionEnter        = {true}
        transitionEnterTimeout = {0}
        transitionName         = "popup-transition"
      >
        {this.props.open === true ? inner : null}
      </ReactCSSTransitionGroup>
    )
  }
}
