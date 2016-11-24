import React from 'react';

import './Popup.less';

export default class Popup extends React.Component {
  static propTypes = {
    open           : React.PropTypes.bool.isRequired,
    bg             : React.PropTypes.oneOf(['transparent', 'fill']).isRequired,
    padding        : React.PropTypes.oneOf(['none', 'medium', 'large']).isRequired,
    closeText      : React.PropTypes.string.isRequired,
    onRequestClose : React.PropTypes.func.isRequired,
    className      : React.PropTypes.string,
    id             : React.PropTypes.string
  }

  constructor (props) {
    super(props);

    this.closePopupOnEsc = this.closePopupOnEsc.bind(this);
    this.animateClose    = this.animateClose.bind(this);
    this.close           = this.close.bind(this);
  }

  close () {
    this.content.removeEventListener('animationend', this.close);
    document.body.style.removeProperty('overflow');
    this.props.onRequestClose();
  }

  animateClose () {
    this.content.classList.add('popup__content_animate_hide');
    this.content.addEventListener('animationend', this.close);
  }

  closePopupOnEsc (event) {
    if (event.keyCode === 27 && this.props.open) {
      this.animateClose();
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }

  componentDidMount () {
    if (this.props.open) {
      document.body.style.overflow = 'hidden';
    }
    document.addEventListener('keydown', this.closePopupOnEsc);
  }

  componentWillUnmount () {
    document.body.style.removeProperty('overflow');
    document.removeEventListener('keydown', this.closePopupOnEsc);
  }

  renderContent () {
    const popupClassName          = `popup${this.props.className ? ' ' + this.props.className : ''}`;
    const contentBgClassName      = ` popup__content_bg_${this.props.bg}`;
    const contentPaddingClassName = ` popup__content_padding_${this.props.padding}`;
    const contentClassName        = `popup__content popup__content_animate_show${contentPaddingClassName}${contentBgClassName}`;
    const closeBtnClassName       = `popup__close-btn popup__close-btn_bg_${this.props.bg}`;
    const closeCrossClassName     = `popup__close-cross popup__close-cross_bg_${this.props.bg}`;

    return (
      <div
        className = {popupClassName}
        id        = {this.props.id ? this.props.id : null}
        role      = "dialog"
        ref       = {ref => { this.container = ref; }}
      >
        <div
          className = "popup__bg"
          onClick   = {this.animateClose}
        >
        </div>

        <div
          className = {contentClassName}
          ref       = {ref => { this.content = ref; }}
        >
          <button
            className  = {closeBtnClassName}
            type       = "button"
            aria-label = {this.props.closeText}
            onClick    = {this.animateClose}
          >
            <span className={closeCrossClassName}></span>
          </button>
          <span className="popup__close-text">{this.props.closeText}</span>
          {this.props.children}
        </div>
      </div>
    );
  }

  render () {
    return (
      this.props.open === true ? this.renderContent() : null
    );
  }
}
