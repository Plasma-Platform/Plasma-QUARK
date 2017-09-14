import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import isRetina from 'is-retina';
import ColorHash from 'color-hash';
import NearestColor from 'nearest-color';

import './Avatar.less';

const BG_COLORS = {
  1: '#1a76d2',
  2: '#546e7a',
  3: '#e64a19',
  4: '#0b8738',
  5: '#ffa001',
  6: '#996969',
  7: '#42a5f5',
  8: '#243238',
  9: '#006023',
  10: '#ff6f00',
};

export default class Avatar extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string,
    isRounded: PropTypes.bool,
  }

  static defaultProps = {
    src: '',
    email: '',
    name: '',
    size: 60,
    isRounded: false,
    className: '',
  }

  getGravatarRequestUrl = (email) => {
    if (!email) {
      return null;
    }

    const { size } = this.props;

    return `//www.gravatar.com/avatar/${md5(email)}?s=${isRetina()
      ? size * 2
      : size
    }&d=404`;
  }

  getImageClassName = () => (
    `avatar${this.props.isRounded
      ? ' avatar_round'
      : ''}${this.props.className
      ? ` ${this.props.className}`
      : ''
    }`
  )

  handleImageLoadError = () => {
    const {
      src,
      email,
    } = this.props;

    if (this.imageSrc.indexOf(src) >= 0) {
      this.setState(() => ({
        isSrcError: true,
      }));
    } else if (this.imageSrc.indexOf(this.getGravatarRequestUrl(email)) >= 0) {
      this.setState(() => ({
        isGravatarError: true,
      }));
    }
  }

  renderImageByInitials() {
    const {
      name = '',
      email = '',
      size,
    } = this.props;

    const avatarClassName = this.getAvatarClassName();

    const nameParts = name.trim().replace(/\s{2,}/g, ' ').split(' ');
    const emailParts = email.trim().split('');

    const initialsByFirstName = (
      nameParts.length >= 1
      && nameParts[0].split('').length > 1
    )
      ? `${nameParts[0].split('')[0]}${nameParts[0].split('')[1]}`
      : null;

    const initialsByName = (
      nameParts.length >= 2
      && nameParts[0].split('').length > 0
      && nameParts[1].split('').length > 0
    )
      ? `${nameParts[0].split('')[0]}${nameParts[1].split('')[0]}`
      : null;

    const initialsByEmail = emailParts.length >= 2
      ? `${emailParts[0]}${emailParts[1]}`
      : null;

    const initials = (initialsByName || initialsByFirstName || initialsByEmail || 'N/A').toUpperCase();

    const colorHash = new ColorHash();
    const initialsColor = colorHash.hex(initials);
    const nearestColor = NearestColor.from(BG_COLORS);
    const imageBg = nearestColor(initialsColor).value;

    this.imageUrl = null;

    return (
      <svg
        className={avatarClassName}
        height={size}
        width={size}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill={imageBg}
        />

        <text
          x={size / 2}
          y={size / 2}
          fill="#fff"
          fontSize={size / 3}
          textAnchor="middle"
          dy=".3em"
        >
          {initials}
        </text>
      </svg>
    );
  }

  renderImageByURL(url) {
    const {
      src,
      email,
      name,
      className,
      size,
      isRounded,
      ...props
    } = this.props;

    const imageClassName = this.getImageClassName();
    this.imageUrl = url;

    return (
      <img
        className={imageClassName}
        width={size}
        height={size}
        src={url}
        alt={name || email || ''}
        onError={this.handleImageLoadError}
        {...props}
      />
    );
  }

  render() {
    const {
      src,
      email,
      name,
    } = this.props;

    const gravatarRequestUrl = this.getGravatarRequestUrl(email);
    const gravatarUrl = gravatarRequestUrl && !(
      this.state.isSrcError && this.imageUrl === gravatarRequestUrl
    )
      ? gravatarRequestUrl
      : null;
    const srcUrl = src && !(this.state.isSrcError && this.imageUrl === src)
      ? src
      : null;
    const imageUrl = srcUrl || gravatarUrl;

    if (!imageUrl) {
      return this.renderImageByInitials({
        name,
        email,
      });
    }

    return this.renderImageByURL(imageUrl);
  }
}
