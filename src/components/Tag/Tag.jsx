import React from 'react';
import PropTypes from 'prop-types';

import './Tag.less';

const Tag = ({
  className,
  type,
  size,
  disabled,
  showCross,
  colorScheme,
  children,
  ...props
}) => {
  if (type === 'button') {
    return (
      <button
        className={`tm-quark-tag tm-quark-tag_type_button tm-quark-tag_size_${size} ${disabled ? 'tm-quark-tag_disabled' : ''} tm-quark-tag_color-scheme_${colorScheme} ${className}`}
        type="button"
        {...props}
      >
        <span className="tm-quark-tag__content">
          {children}
        </span>

        {showCross && (
          <i className="tm-quark-tag__cross" />
        )}
      </button>
    );
  } else if (type === 'text') {
    return (
      <span
        className={`tm-quark-tag tm-quark-tag_type_text tm-quark-tag_size_${size} ${disabled ? 'tm-quark-tag_disabled' : ''} tm-quark-tag_color-scheme_${colorScheme} ${className}`}
        {...props}
      >
        <span className="tm-quark-tag__content">
          {children}
        </span>

        {showCross && (
          <i className="tm-quark-tag__cross" />
        )}
      </span>
    );
  } else if (type === 'link') {
    return (
      <a
        className={`tm-quark-tag tm-quark-tag_type_link tm-quark-tag_size_${size} ${disabled ? 'tm-quark-tag_disabled' : ''} tm-quark-tag_color-scheme_${colorScheme} ${className}`}
        {...props}
      >
        <span className="tm-quark-tag__content">
          {children}
        </span>

        {showCross && (
          <i className="tm-quark-tag__cross" />
        )}
      </a>
    );
  }

  return null;
};

Tag.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'link',
    'button',
    'text',
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
  ]).isRequired,
  disabled: PropTypes.bool,
  showCross: PropTypes.bool,
  colorScheme: PropTypes.oneOf([
    'blue',
    'red',
  ]),
  children: PropTypes.node,
};

Tag.defaultProps = {
  className: '',
  disabled: false,
  type: 'link',
  showCross: false,
  colorScheme: 'blue',
  children: null,
};

export default Tag;
