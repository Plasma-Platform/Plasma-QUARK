import React from 'react';

import './Button.less';

export default class Button extends React.Component {
  static propTypes = {
    widthType   : React.PropTypes.oneOf(['square', 'auto', 'full']).isRequired,
    heightType  : React.PropTypes.oneOf(['medium', 'large']).isRequired,
    roundedType : React.PropTypes.oneOf(['all', 'bottom']).isRequired,
    bgType      : React.PropTypes.oneOf(['facebook', 'twitter', 'google-plus', 'pinterest', 'vk', '1', '2', '3']).isRequired,
    icon        : React.PropTypes.string,
    className   : React.PropTypes.string,
    type        : React.PropTypes.oneOf(['button', 'submit', 'reset', 'link', 'text']),
    isLoading   : React.PropTypes.bool
  }

  static defaultProps = {
    type      : 'button',
    isLoading : false
  }

  render () {
    const {widthType, heightType, roundedType, bgType, icon, className, type, isLoading, ...props} = this.props;

    const widthClassName   = ` button_width_${widthType}`;
    const heightClassName  = ` button_height_${heightType}`;
    const roundClassName   = ` button_rounded_${roundedType}`;
    const bgClassName      = this.props.disabled ? '' : ` button_bg_${bgType}`;
    const loadingClassName = isLoading ? ' button_loading' : '';
    const addClassName     = className ? ` ${className}` : '';
    const buttonClassName  = `button${widthClassName}${heightClassName}${roundClassName}${bgClassName}${loadingClassName}${addClassName}`;
    const iconClassName    = icon ? ` button__icon button__icon-${icon} icon icon-${icon}` : '';

    if (type === 'link') {
      return (
        <a
          {...props}
          className = {buttonClassName}
          ref       = {ref => { this.button = ref; }}
        >
          {this.isLoading !== true && iconClassName.length > 0 &&
            <i className={iconClassName}></i>
          }
          {this.props.children}
        </a>
      );
    } else if (type === 'text') {
      return (
        <span
          {...props}
          className = {buttonClassName}
          ref       = {ref => { this.button = ref; }}
        >
          {this.isLoading !== true && iconClassName.length > 0 &&
            <i className={iconClassName}></i>
          }
          {this.props.children}
        </span>
      );
    } else {
      return (
        <button
          {...props}
          type      = {type}
          className = {buttonClassName}
          ref       = {ref => { this.button = ref; }}
        >
          {this.isLoading !== true && iconClassName.length > 0 &&
            <i className={iconClassName}></i>
          }
          {this.props.children}
        </button>
      );
    }
  }
}
