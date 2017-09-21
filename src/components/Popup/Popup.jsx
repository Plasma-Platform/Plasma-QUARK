import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Popup.less';

export default class Popup extends Component {
  static propTypes = {
    onRequestHide: PropTypes.func.isRequired,
    show: PropTypes.bool,
    contentBg: PropTypes.oneOf(['transparent', 'fill']),
    contentPadding: PropTypes.oneOf(['none', 'medium', 'large']),
    showCloseBtn: PropTypes.bool,
    closeBtnTooltip: PropTypes.node,
    closeOnClickOnOverlay: PropTypes.bool,
    hideOnPressEsc: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static defaultProps = {
    show: false,
    contentBg: 'fill',
    contentPadding: 'medium',
    showCloseBtn: true,
    closeOnClickOnOverlay: true,
    closeBtnTooltip: null,
    hideOnPressEsc: true,
    children: null,
    className: null,
  };

  constructor(props) {
    super(props);

    this.openCloseBtnTooltipTimeout = null;
  }

  state = {
    renderContainer: this.props.show,
    showCloseBtnTooltip: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.state.renderContainer) {
      this.setState(() => ({
        renderContainer: true,
      }));
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('tm-quark-popup__document');
  }

  removeContainer = () => {
    this.setState(() => ({
      renderContainer: false,
    }));
  }

  handleAnimationEnd = (event) => {
    if (event.target === this.container) {
      if (this.props.show) {
        document.body.classList.add('tm-quark-popup__document');
      } else {
        document.body.classList.remove('tm-quark-popup__document');
        this.removeContainer();
      }
    }
  }

  handleBlur = (event) => {
    if (
      (event.keyCode === 27 && this.props.hideOnPressEsc)
      && this.container
      && this.content
      && (event.target === this.container || event.target === this.content)
      && this.props.show
      && this.props.onRequestHide
    ) {
      this.props.onRequestHide();
    }
  }

  handleClickOnOverlay = (event) => {
    if (
      this.container
      && event.target === this.container
      && this.props.closeOnClickOnOverlay
      && this.props.onRequestHide
    ) {
      this.props.onRequestHide();
    }
  }

  handleCloseBtnHover = () => {
    this.openCloseBtnTooltipTimeout = setTimeout(() => {
      this.setState(() => ({
        showCloseBtnTooltip: true,
      }));
    }, 200);
  }

  hideCloseTooltip = () => {
    clearTimeout(this.openCloseBtnTooltipTimeout);

    this.setState(() => ({
      showCloseBtnTooltip: false,
    }));
  }

  render() {
    const {
      show,
      onRequestHide,
      contentBg,
      contentPadding,
      showCloseBtn,
      children,
      className,
      hideOnPressEsc,
      closeOnClickOnOverlay,
      closeBtnTooltip,
      ...popupProps
    } = this.props;

    const popupStateClassName = `tm-quark-popup_${show ? 'visible' : 'hidden'}`;

    const popupContentBgClassName = `tm-quark-popup__content_bg_${contentBg}`;
    const popupContentPaddingClassName = `tm-quark-popup__content_padding_${contentPadding}`;

    return (
      this.state.renderContainer ? (
        <div
          {...popupProps}
          className={`tm-quark-popup ${popupStateClassName} ${className}`}
          tabIndex="-1"
          role="presentation"
          onAnimationEnd={this.handleAnimationEnd}
          onKeyDown={this.handleBlur}
          onClick={this.handleClickOnOverlay}
          ref={(ref) => { this.container = ref; }}
        >
          <div
            className={`tm-quark-popup__content ${popupContentBgClassName} ${popupContentPaddingClassName}`}
            ref={(ref) => { this.content = ref; }}
          >
            {showCloseBtn && (
              <span
                className="tm-quark-popup__close-btn"
                role="button"
                tabIndex="0"
                onClick={onRequestHide}
                onMouseEnter={this.handleCloseBtnHover}
                onMouseLeave={this.hideCloseTooltip}
                onTouchStart={this.handleCloseBtnHover}
                onTouchEnd={this.hideCloseTooltip}
              >
                {closeBtnTooltip}
              </span>
            )}

            {children}
          </div>
        </div>
      ) : (
        null
      )
    );
  }
}
