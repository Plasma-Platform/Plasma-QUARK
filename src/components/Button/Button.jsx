import React from 'react';
import PropTypes from 'prop-types';

import './Button.less';

const Button = ({
  widthType,
  heightType,
  roundedType,
  bgType,
  icon,
  className,
  type,
  disabled,
  children,
  ...props
}) => {
  const widthClassName = `tm-quark-button_width_${widthType}`;
  const heightClassName = `tm-quark-button_height_${heightType}`;
  const roundClassName = `tm-quark-button_rounded_${roundedType}`;
  const bgClassName = disabled ? '' : `tm-quark-button_bg_${bgType}`;
  const buttonClassName = (`tm-quark-button ${widthClassName} ${heightClassName} ${roundClassName} ${bgClassName} ${className}`).trim();
  const iconClassName = icon ? `tm-quark-button__icon tm-quark-button__icon-${icon} icon icon-${icon}` : '';

  const buttonIcon = iconClassName.length > 0
    ? <i className={iconClassName} />
    : null;

  if (type === 'link') {
    return (
      <a
        {...props}
        className={buttonClassName}
      >
        {buttonIcon}
        {children}
      </a>
    );
  } else if (type === 'text') {
    return (
      <span
        {...props}
        className={buttonClassName}
      >
        {buttonIcon}
        {children}
      </span>
    );
  }

  return (
    <button
      {...props}
      type={type}
      className={buttonClassName}
    >
      {buttonIcon}
      {children}
    </button>
  );
};

Button.propTypes = {
  widthType: PropTypes.oneOf(['square', 'auto', 'full']).isRequired,
  heightType: PropTypes.oneOf(['medium', 'large']).isRequired,
  roundedType: PropTypes.oneOf(['all', 'bottom']).isRequired,
  bgType: PropTypes.oneOf(['facebook', 'twitter', 'google-plus', 'pinterest', 'vk', '1', '2', '3']).isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'link', 'text']),
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  icon: '',
  className: '',
  type: 'button',
  disabled: false,
  children: null,
};

export default Button;
