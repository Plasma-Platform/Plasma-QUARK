import React    from 'react';
import md5      from 'md5';
import isRetina from 'is-retina';

import './Avatar.less';

export default class Avatar extends React.Component {
  static propTypes = {
    src       : React.PropTypes.string,
    email     : React.PropTypes.string,
    name      : React.PropTypes.string,
    size      : React.PropTypes.number,
    className : React.PropTypes.string
  }

  static defaultProps = {
    size  : 60,
    name  : '',
    email : ''
  }

  state = {
    avatarSrc         : this.props.src || this.getGravatarUrl(),
    isAvatarLoadError : false
  }

  constructor (props) {
    super(props);

    this.handleAvatarLoadError = this.handleAvatarLoadError.bind(this);

    this.bgColors = [
      '#1a76d2',
      '#546e7a',
      '#e64a19',
      '#0b8738',
      '#ffa001',
      '#996969',
      '#42a5f5',
      '#243238',
      '#006023',
      '#ff6f00'
    ];

    this.avatarClassName = this.props.className ? `avatar ${this.props.className}` : 'avatar';
  }

  getGravatarUrl () {
    return `//www.gravatar.com/avatar/${md5(this.props.email)}?s=${isRetina() ? this.props.size * 2 : this.props.size}&d=404`;
  }

  handleAvatarLoadError () {
    if (this.state.avatarSrc === this.props.src && this.props.email.length > 0) {
      this.setState({
        avatarSrc         : this.getGravatarUrl(),
        isAvatarLoadError : false
      });
    } else if (this.state.avatarSrc === this.getGravatarUrl()) {
      this.setState({
        avatarSrc         : '',
        isAvatarLoadError : true
      });
    }
  }

  renderAvatarImgByInitials () {
    const nameParts   = this.props.name.split(' ');
    const emailParts  = this.props.email.split('');

    const bgColor     = this.bgColors[Math.floor((Math.random() * 10) + 1)];

    let initials;

    if (nameParts.length > 1 && nameParts[0].length === 1 && nameParts[1].length === 1) {
      initials = `${nameParts[0]}${nameParts[1]}`;
    } else if (emailParts.length > 1 && emailParts[0].length === 1 && emailParts[1].length === 1) {
      initials = `${emailParts[0]}${emailParts[1]}`;
    } else {
      initials = 'N/A';
    }

    return (
      <svg
        className = {this.avatarClassName}
        height    = {this.props.size}
        width     = {this.props.size}
        viewBox   = {`0 0 ${this.props.size} ${this.props.size}`}
      >
        <rect
          width        = {this.props.size}
          height       = {this.props.size}
          stroke       = {bgColor}
          stroke-width = "0"
          fill         = {bgColor}
        />
        <text
          x                 = {this.props.size / 2}
          y                 = {this.props.size / 2}
          fill              = "#fff"
          fontSize          = {this.props.size / 3}
          fontFamily        = "PT Sans, sans-serif"
          textAnchor        = "middle"
          dominantBaseline  = "central"
        >
          {initials.toUpperCase()}
        </text>
      </svg>
    );
  }

  renderAvatarImgBySrc () {
    return (
      <img
        className = {this.avatarClassName}
        src       = {this.state.avatarSrc}
        alt       = {this.props.name.length > 0 ? this.props.name : this.props.email}
        onError   = {this.handleAvatarLoadError}
      />
    );
  }

  render () {
    return (
      this.state.isAvatarLoadError ? (
        this.renderAvatarImgByInitials()
      ) : (
        this.renderAvatarImgBySrc()
      )
    );
  }
}
