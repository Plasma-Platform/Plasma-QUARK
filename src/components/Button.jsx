import React from 'react';
import PropTypes from 'prop-types';
import L1 from './loaders/L1';

import './Button.less';

const Button = ({
  widthType,
  heightType,
  roundedType,
  bgType,
  icon,
  className,
  type,
  isLoading,
  disabled,
  children,
  ...props
}) => {
  const widthClassName = ` button_width_${widthType}`;
  const heightClassName = ` button_height_${heightType}`;
  const roundClassName = ` button_rounded_${roundedType}`;
  const bgClassName = disabled ? '' : ` button_bg_${bgType}`;
  const loadingClassName = isLoading ? ' button_loading' : '';
  const addClassName = className ? ` ${className}` : '';
  const buttonClassName = `button${widthClassName}${heightClassName}${roundClassName}${bgClassName}${loadingClassName}${addClassName}`;
  const iconClassName = icon ? ` button__icon button__icon-${icon} icon icon-${icon}` : '';

  const buttonIcon = !isLoading && iconClassName.length > 0
    ? <i className={iconClassName} />
    : null;
  const buttonChildren = isLoading ? (
    <L1 />
  ) : (
    buttonIcon && children
  );

  if (type === 'link') {
    return (
      <a
        {...props}
        className={buttonClassName}
      >
        {buttonChildren}
      </a>
    );
  } else if (type === 'text') {
    return (
      <span
        {...props}
        className={buttonClassName}
      >
        {buttonChildren}
      </span>
    );
  }

  return (
    <button
      {...props}
      type={type}
      className={buttonClassName}
    >
      {buttonChildren}
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
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  icon: '',
  className: '',
  type: 'button',
  isLoading: false,
  disabled: false,
  children: null,
};

export default Button;
