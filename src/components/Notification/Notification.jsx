import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Notification.less';

export default class Notification extends Component {
  static propTypes = {
    onRequestHide: PropTypes.func,
    position: PropTypes.oneOf([
      'absolute',
      'fixed',
      'relative']).isRequired,
    placement: PropTypes.oneOf([
      'bottom',
      'left',
      'top',
      'right',
      'static',
      'document-top',
      'document-right',
    ]).isRequired,
    height: PropTypes.oneOf([
      'auto',
      'fixed-small',
      'fixed-medium',
    ]).isRequired,
    width: PropTypes.oneOf([
      'auto',
      'full',
    ]).isRequired,
    type: PropTypes.oneOf([
      'default',
      'success',
      'warning',
      'error',
    ]).isRequired,
    show: PropTypes.bool,
    className: PropTypes.string,
    showArrow: PropTypes.bool,
    arrowPlacement: PropTypes.oneOf([
      'bottom',
      'left',
      'top',
      'right',
    ]).isRequired,
    showCloseBtn: PropTypes.bool,
    hideOnClickOutside: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    onRequestHide: () => {},
    show: false,
    showArrow: true,
    showCloseBtn: false,
    hideOnClickOutside: true,
    className: '',
    children: null,
  }

  state = {
    renderContainer: this.props.show,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.state.renderContainer) {
      this.setState({
        renderContainer: true,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleAnimationEnd = (event) => {
    if (event.target === this.container && !this.props.show) {
      window.removeEventListener('click', this.handleClickOutside);

      this.removeContainer();
    } else {
      window.addEventListener('click', this.handleClickOutside);
    }
  }

  handleClickOutside = (event) => {
    if (
      this.props.hideOnClickOutside
      && this.container
      && event.target !== this.container
      && !this.container.contains(event.target)
      && this.props.show
    ) {
      this.props.onRequestHide();
    }
  }

  removeContainer = () => {
    this.setState({
      renderContainer: false,
    });
  }

  render() {
    const {
      onRequestHide,
      position,
      placement,
      height,
      width,
      type,
      showArrow,
      arrowPlacement,
      showCloseBtn,
      className,
      hideOnClickOutside,
      show,
      children,
      ...notificationProps
    } = this.props;

    const notificationPositionClassName = `tm-quark-notification_position_${position}`;
    const notificationShowAtClassName = `tm-quark-notification_placement_${placement}`;
    const notificationHeightClassName = `tm-quark-notification_height_${height}`;
    const notificationWidthClassName = `tm-quark-notification_width_${width}`;
    const notificationTypeClassName = `tm-quark-notification_type_${type}`;
    const notificationArrowClassName = showArrow ? `tm-quark-notification_arrow-placement_${arrowPlacement}` : '';
    const notificationStateClassName = `tm-quark-notification_${show ? 'visible' : 'hidden'}`;

    return (
      this.state.renderContainer ? (
        <div
          {...notificationProps}
          className={`tm-quark-notification ${notificationPositionClassName} ${notificationShowAtClassName} ${notificationHeightClassName} ${notificationWidthClassName} ${notificationTypeClassName} ${notificationArrowClassName} ${notificationStateClassName} ${className}`}
          onAnimationEnd={this.handleAnimationEnd}
          role="alert"
          ref={(ref) => { this.container = ref; }}
        >
          {showCloseBtn && (
            <button
              className="tm-quark-notification__close-btn"
              type="button"
              aria-label="Close"
              onClick={onRequestHide}
            />
          )}

          <div className="tm-quark-notification__content">
            {children}
          </div>
        </div>
      ) : (
        null
      )
    );
  }
}
