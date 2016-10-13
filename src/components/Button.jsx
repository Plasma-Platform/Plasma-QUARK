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
    type        : React.PropTypes.oneOf(['button', 'submit', 'reset', 'link', 'text'])
  }

  static defaultProps = {
    type: 'button'
  }

  render () {
    const {widthType, heightType, roundedType, bgType, icon, className, type, ...props} = this.props;

    const widthClassName  = ` button_width_${widthType}`;
    const heightClassName = ` button_height_${heightType}`;
    const roundClassName  = ` button_rounded_${roundedType}`;
    const bgClassName     = this.props.disabled ? ' button_bg_disabled' : ` button_bg_${bgType}`;
    const iconClassName   = icon ? ` icon icon-${icon}` : '';
    const addClassName    = className ? ` ${className}` : '';
    const fullClassName   = `button${widthClassName}${heightClassName}${roundClassName}${bgClassName}${iconClassName}${addClassName}`;

    if (type === 'link') {
      return (
        <a
          {...props}
          className = {fullClassName}
          ref       = {ref => { this.button = ref; }}
        >
          {this.props.children}
        </a>
      );
    } else if (type === 'text') {
      return (
        <span
          {...props}
          className = {fullClassName}
          ref       = {ref => { this.button = ref; }}
        >
          {this.props.children}
        </span>
      );
    } else {
      return (
        <button
          {...props}
          type      = {type}
          className = {fullClassName}
          ref       = {ref => { this.button = ref; }}
        >
          {this.props.children}
        </button>
      );
    }
  }
}
