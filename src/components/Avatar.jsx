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
    src       : '',
    email     : '',
    name      : '',
    size      : 60,
    isRounded : false
  }

  state = {
    isImgLoaded: true
  }

  constructor (props) {
    super(props);

    this.initialSrc   = this.props.src;
    this.initialEmail = this.props.email;

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

  isNewSrc () {
    return this.props.src !== this.initialSrc && this.props.src.length > 0;
  }

  isNewEmail () {
    return this.props.email !== this.initialEmail && this.props.email.length > 0;
  }

  getAvatarClassName () {
    return `avatar${this.props.isRounded ? ' avatar_round' : ''}${this.props.className ? ' ' + this.props.className : ''}`;
  }

  getGravatarUrl () {
    return `//www.gravatar.com/avatar/${md5(this.props.email)}?s=${isRetina() ? this.props.size * 2 : this.props.size}&d=404`;
  }

  handleAvatarLoadError () {
    if (this.props.src.length > 0 && this.img.src.indexOf(this.props.src) >= 0) {
      this.img.src = this.getGravatarUrl();
    } else if (this.img.src.indexOf(this.getGravatarUrl()) >= 0) {
      this.setState({
        isImgLoaded: false
      });
    }
  }

  renderAvatarImgByInitials () {
    const avatarClassName = this.getAvatarClassName();

    const nameParts  = this.props.name.split(' ');
    const emailParts = this.props.email.split('');

    let initials;

    if (nameParts.length === 2 && nameParts[0].split('').length > 0 && nameParts[1].split('').length > 0) {
      initials = `${nameParts[0].split('')[0]}${nameParts[1].split('')[0]}`;
    } else if (emailParts.length === 2) {
      initials = `${emailParts[0]}${emailParts[1]}`;
    } else {
      initials = '';
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
          width         = {this.props.size}
          height        = {this.props.size}
          stroke        = {this.avatarBg}
          strokeWidth   = "0"
          strokeOpacity = {initials.length === 2 ? 1 : 0}
          fill          = {this.avatarBg}
          fillOpacity   = {initials.length === 2 ? 1 : 0}
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

    let src;

    if (this.state.isImgLoaded === false) {
      if (this.isNewSrc()) {
        this.initialSrc = this.props.src;
        src             = this.props.src;
      } else if (this.isNewEmail()) {
        this.initialEmail = this.props.email;
        src               = this.getGravatarUrl();
      }
    } else {
      src = this.props.src.length ? this.props.src : this.props.email.length ? this.getGravatarUrl() : '';
    }

    return (
      <img
        className = {avatarClassName}
        width     = {this.props.size}
        height    = {this.props.size}
        src       = {src}
        alt       = {this.props.name.length > 0 ? this.props.name : this.props.email}
        onError   = {this.handleAvatarLoadError}
        ref       = {(ref) => { this.img = ref; }}
      />
    );
  }

  render () {
    return (
      this.state.isImgLoaded === true || this.isNewSrc() || this.isNewEmail() ? (
        this.renderAvatarImgBySrc()
      ) : (
        this.renderAvatarImgByInitials()
      )
    );
  }
}
