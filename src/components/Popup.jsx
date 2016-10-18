import React                   from 'react';

import './Popup.less';

export default class Popup extends React.Component {
  static propTypes = {
    open           : React.PropTypes.bool.isRequired,
    bg             : React.PropTypes.oneOf(['transparent', 'fill']).isRequired,
    padding        : React.PropTypes.oneOf(['medium', 'large']).isRequired,
    closeText      : React.PropTypes.string.isRequired,
    onRequestClose : React.PropTypes.func.isRequired,
    showCloseBtn   : React.PropTypes.bool,
    className      : React.PropTypes.string,
    id             : React.PropTypes.string
  }

  renderBg = () => {
    return (
      <div
        className = "popup__bg"
        onClick   = {this.handleCloseClick}
      >
      </div>
    );
  }

  renderCloseBtn = () => {
    return (
      this.props.showCloseBtn ? (
        <button
          className  = "popup__close-btn"
          type       = "button"
          aria-label = {this.props.closeText}
          onClick    = {this.handleCloseClick}
        >
          <span className="popup__close-text">{this.props.closeText}</span>
        </button>
      ) : null
    );
  }

  renderContent = () => {
    return (
      <div className="popup__content">
        {this.renderCloseBtn()}
        {this.props.children}
      </div>
    );
  }

  handleCloseClick = () => {
    this.container.classList.add('popup_closed');
    this.container.addEventListener('animationend', this.hide);
  }

  hide = () => {
    this.container.removeEventListener('animationend', this.hide);
    this.props.onRequestClose();
  }

  render () {
    const bgClassName      = ` popup_bg_${this.props.bg}`;
    const paddingClassName = ` popup_padding_${this.props.padding}`;
    const addClassName     = this.props.className ? ` ${this.props.className}` : '';
    const fullClassName    = `popup popup_open${paddingClassName}${bgClassName}${addClassName}`;

    return (
      this.props.open === true ? (
        <div
          className      = {fullClassName}
          id             = {this.props.id ? this.props.id : null}
          role           = "dialog"
          ref            = {(ref) => { this.container = ref; }}
        >
          {this.renderBg()}
          {this.renderContent()}
        </div>
      ) : null
    );
  }
}
