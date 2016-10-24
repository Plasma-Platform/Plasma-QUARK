import React                   from 'react';

import './Popup.less';

export default class Popup extends React.Component {
  static propTypes = {
    open           : React.PropTypes.bool.isRequired,
    bg             : React.PropTypes.oneOf(['transparent', 'fill']).isRequired,
    padding        : React.PropTypes.oneOf(['medium', 'large']).isRequired,
    closeText      : React.PropTypes.string.isRequired,
    onRequestClose : React.PropTypes.func.isRequired,
    className      : React.PropTypes.string,
    id             : React.PropTypes.string
  }

  constructor (props) {
    super(props);

    this.renderContent    = this.renderContent.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.hideContent      = this.hideContent.bind(this);
  }

  handleCloseClick = () => {
    this.content.classList.add('popup__content_animate_hide');
    this.content.addEventListener('animationend', this.hideContent);
  }

  hideContent = () => {
    document.body.style.overflow = null;
    this.content.removeEventListener('animationend', this.hideContent);
    this.props.onRequestClose();
  }

  componentDidMount () {
    document.body.style.overflow = 'hidden';
  }

  renderContent = () => {
    const popupClassName = `popup${this.props.className ? ' ' + this.props.className : ''}`;

    const contentBgClassName      = ` popup__content_bg_${this.props.bg}`;
    const contentPaddingClassName = ` popup__content_padding_${this.props.padding}`;
    const contentClassName        = `popup__content popup__content_animate_show${contentPaddingClassName}${contentBgClassName}`;

    const closeBtnClassName = `popup__close-btn popup__close-btn_bg_${this.props.bg}`;

    const closeCrossClassName = `popup__close-cross popup__close-cross_bg_${this.props.bg}`;

    return (
      <div
        className = {popupClassName}
        id        = {this.props.id ? this.props.id : null}
        role      = "dialog"
        ref       = {ref => { this.container = ref; }}
      >
        <div
          className = "popup__bg"
          onClick   = {this.handleCloseClick}
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
            onClick    = {this.handleCloseClick}
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
