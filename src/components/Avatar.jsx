import React from 'react';
import gravatarAPI from './utils/gravatarAPI.js';
import './Avatar.less';

export default class Avatar extends React.Component {
  static PropTypes = {
    email     : React.PropTypes.string,
    src       : React.PropTypes.string,
    name      : React.PropTypes.string,
    size      : React.PropTypes.number,
    className : React.PropTypes.string,
    rating    : React.PropTypes.string
  };

  static defaultProps = {
    size      : 60,
    rating    : 'g',
    className : '',
    src       : '',
    name      : ''
  };

  constructor (props) {
    super(props);
    this.state = {
      status      : 0,
      color       : '',
      initial     : '',
      displayName : '',
      size        : this.props.size,
      avatar      : ''
    };
  }

  /**
   * Returns svg avatar based on name provided
   * @param {string} name
   * @param {string} bg
   * @returns {string}
   * @private
   */
  _getTextAvatar = (name, bg = '#ffffff') => {
    const SVG = document.createElement('svg');
    SVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    SVG.setAttribute('pointer-events', 'none');
    SVG.setAttribute('width', this.state.size);
    SVG.setAttribute('height', this.state.size);
    SVG.setAttribute('style', 'background-color: ' + bg);

    const TEXT = document.createElement('text');
    TEXT.setAttribute('text-anchor', 'middle');
    TEXT.setAttribute('y', '50%');
    TEXT.setAttribute('x', '50%');
    TEXT.setAttribute('dy', '0.35em');
    TEXT.setAttribute('style', `font-family: "PT_Sans",sans-serif; font-size: ${this.props.size * 0.3}px`);
    TEXT.setAttribute('pointer-events', 'auto');
    TEXT.setAttribute('fill', 'white');

    TEXT.innerHTML = name;

    SVG.appendChild(TEXT);

    const svgString = encodeURIComponent(SVG.outerHTML.toString());
    return `data:image/svg+xml;base64,${window.btoa(svgString)}`;
  };

  _getSimpleImageBlock = (src = '') => {
    return (
      <div className={`avatar ${this.props.className}`}>
        <img
          src={src}
          height={this.state.size}
          width={this.state.size}
        />
      </div>
    );
  };

  _getGravatarBlock = () => {
    return (
      <div className={`avatar ${this.props.className}`}>
        <img
          alt="initials"
          height={this.state.size}
          width={this.state.size}
          src={this._getTextAvatar(this.state.initial, this.state.color)}
          className="avatar__initials"
        />
        <img
          alt={this.state.displayName}
          height={this.state.size}
          width={this.state.size}
          src={this.state.avatar}
          className="avatar__image"
        />
      </div>
    );
  };

  _setGravatarInfo = (props) => {
    let srcExist = !!props.src;
    let emailExist = !!props.email;
    if (!srcExist && emailExist) {
      gravatarAPI.getProfile(props).then(data => {
        this.setState(data);
      });
    }
  };

  componentWillReceiveProps (newProps) {
    this._setGravatarInfo(newProps);
  }

  componentDidMount () {
    this._setGravatarInfo(this.props);
  }

  render () {
    let html = '';
    let srcExist = !!this.props.src;
    if (srcExist) {
      html = this._getSimpleImageBlock(this.props.src);
    } else if (this.state.status) {
      html = this._getGravatarBlock();
    } else {
      const nameExist = !!this.props.name;
      const emailExist = !!this.props.email;
      if (!nameExist && !emailExist) {
        return false;
      }
      const initials = gravatarAPI.prepareInitials(nameExist ? this.props.name : this.props.email);
      const color = gravatarAPI.getColor(initials);
      html = this._getSimpleImageBlock(this._getTextAvatar(initials, color));
    }
    return html;
  }

}
