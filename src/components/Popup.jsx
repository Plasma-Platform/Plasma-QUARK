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
    this.hide             = this.hide.bind(this);
  }

  handleCloseClick = () => {
    this.container.classList.add('popup_closed');
    this.container.addEventListener('animationend', this.hide);
  }

  hide = () => {
    this.container.removeEventListener('animationend', this.hide);
    this.props.onRequestClose();
  }

  renderContent = () => {
    const bgClassName      = ` popup_bg_${this.props.bg}`;
    const paddingClassName = ` popup_padding_${this.props.padding}`;
    const addClassName     = this.props.className ? ` ${this.props.className}` : '';
    const fullClassName    = `popup popup_open${paddingClassName}${bgClassName}${addClassName}`;

    return (
      <div
        className      = {fullClassName}
        id             = {this.props.id ? this.props.id : null}
        role           = "dialog"
        ref            = {(ref) => { this.container = ref; }}
      >
        <div
          className = "popup__bg"
          onClick   = {this.handleCloseClick}
        >
        </div>

        <div className="popup__content">
          <button
            className  = "popup__close-btn"
            type       = "button"
            aria-label = {this.props.closeText}
            onClick    = {this.handleCloseClick}
          >
            <span className="popup__close-text">{this.props.closeText}</span>
          </button>
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
