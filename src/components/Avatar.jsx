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
    className : React.PropTypes.string,
    isRounded : React.PropTypes.bool
  }

  static defaultProps = {
    size      : 60,
    name      : '',
    email     : '',
    isRounded : false
  }

  state = {
    isImgLoaded: true
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

    this.avatarBg = this.bgColors[Math.floor((Math.random() * 10) + 1)];
  }

  getAvatarClassName () {
    return `avatar${this.props.isRounded ? ' avatar_round' : ''}${this.props.className ? ' ' + this.props.className : ''}`;
  }

  getGravatarUrl () {
    return `//www.gravatar.com/avatar/${md5(this.props.email)}?s=${isRetina() ? this.props.size * 2 : this.props.size}&d=404`;
  }

  handleAvatarLoadError () {
    if (this.img.src === this.props.src) {
      this.img.src = this.getGravatarUrl();
    } else if (this.img.src === this.getGravatarUrl()) {
      this.setState({
        isImgLoaded: false
      });
    }
  }

  renderAvatarImgByInitials () {
    const avatarClassName = this.getAvatarClassName();

    const nameParts   = this.props.name.split(' ');
    const emailParts  = this.props.email.split('');

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
        className = {avatarClassName}
        height    = {this.props.size}
        width     = {this.props.size}
        viewBox   = {`0 0 ${this.props.size} ${this.props.size}`}
        ref       = {(ref) => { this.img = ref; }}
      >
        <rect
          width       = {this.props.size}
          height      = {this.props.size}
          stroke      = {this.avatarBg}
          strokeWidth = "0"
          fill        = {this.avatarBg}
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
    const avatarClassName = this.getAvatarClassName();

    return (
      <img
        className = {avatarClassName}
        width     = {this.props.size}
        height    = {this.props.size}
        src       = {this.props.src.length > 0 ? this.props.src : this.getGravatarUrl()}
        alt       = {this.props.name.length > 0 ? this.props.name : this.props.email}
        onError   = {this.handleAvatarLoadError}
        ref       = {(ref) => { this.img = ref; }}
      />
    );
  }

  render () {
    return (
      this.state.isImgLoaded ? (
        this.renderAvatarImgBySrc()
      ) : (
        this.renderAvatarImgByInitials()
      )
    );
  }
}
