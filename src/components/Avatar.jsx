import React from 'react';
import md5 from 'md5';
import fetchJSONP from 'fetch-jsonp';
import isRetina from 'is-retina';
import Base64 from 'js-base64';
import Underscore from 'underscore';
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
    this.componentIsMounted = false;
    this.url = 'https://gravatar.com/';
    this.default = 'https://cdn2wp-templatemonster.netdna-ssl.com/wp-content/uploads/2016/10/onepixel.png';
    this.colors = [ // array colors
      '#1A76D2',
      '#546E7A',
      '#E64A19',
      '#0B8738',
      '#FFA001',
      '#996969',
      '#42A5F5',
      '#243238',
      '#006023',
      '#FF6F00'
    ];
    this.state = {
      status      : null,
      color       : '',
      initial     : '',
      displayName : '',
      size        : this.props.size,
      avatar      : ''
    };
  }

  /**
   * Main function
   *
   * @param {Object} atts
   * @returns {Promise.<T>}
   */
  getProfile = Underscore.memoize((atts = {}) => {
    return fetchJSONP(`${this.url}${md5(atts.email)}.json`).then((response) => {
      return response.json();
    }).then((response) => {
      let data = response.entry[0];
      return {
        status      : 1,
        color       : this.getColor(data.displayName),
        initial     : this.prepareInitials(data.displayName),
        displayName : data.displayName,
        size        : this.getSize(atts.size),
        avatar      : this.getGravatarSrc(data.thumbnailUrl, atts)
      };
    }).catch(() => {
      return {
        status : 0
      };
    });
  }, (input) => {
    return JSON.stringify(input);
  });

  /**
   * Generate size for retina display
   *
   * @param {number} size
   * @returns {number}
   * @private
   */
  getSize = (size) => {
    let modernBrowser = true;  // server-side, we render for modern browsers
    if (typeof window !== 'undefined') {
      // this is not NodeJS
      modernBrowser = 'srcset' in document.createElement('img');
    }
    return !modernBrowser && isRetina() ? size * 2 : size;
  };

  /**
   * Generate src for gravatar with query params
   *
   * @param {String} cleanURL
   * @param {Object} atts
   * @returns {string}
   * @private
   */
  getGravatarSrc = (cleanURL, atts) => {
    const query = `a=${this.getSize(atts.size)}&r=${atts.rating}&d=${this.default}`;
    return `${cleanURL}?${query}`;
  };

  /**
   * Get initials from gravatar display name
   *
   * @param {String} name
   * @returns {string}
   * @private
   */
  prepareInitials = (name) => {
    if (name) {
      const parts = name.split(' ');
      let result = '';
      if (parts.length > 1) {
        result = (parts[0][0] + parts[1][0]).toUpperCase();
      } else if (parts[0].length > 1) {
        result = (parts[0][0] + parts[0][1]).toUpperCase();
      }
      return result;
    }
  };

  /**
   * Check the color for display name
   *
   * @param {String} name
   * @returns {string}
   * @private
   */
  getColor = (name = '') => {
    const nameExist = !!name;
    if (nameExist) {
      const literal = name[0].toUpperCase();
      return this.colors[literal.charCodeAt(0).toString()[0]];
    } else {
      return this.colors[0];
    }
  };

  /**
   * Returns svg avatar based on name provided
   * @param {string} name
   * @param {string} bg
   * @returns {string}
   * @private
   */
  getTextAvatar = (name, bg = '#1A76D2') => {
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
    const svgString = SVG.outerHTML.toString();
    return `data:image/svg+xml;base64,${Base64.Base64.encodeURI(svgString)}`;
  };

  getSimpleImageBlock = (src = '') => {
    return (
      <div className={`avatar ${this.props.className}`}>
        <img
          src={src}
          height={this.state.size}
          width={this.state.size}
          alt="image"
        />
      </div>
    );
  };

  getGravatarBlock = () => {
    return (
      <div className={`avatar ${this.props.className}`}>
        <img
          alt="initials"
          height={this.state.size}
          width={this.state.size}
          src={this.getTextAvatar(this.state.initial, this.state.color)}
          className="avatar__initials"
        />
        <img
          alt="avatar"
          height={this.state.size}
          width={this.state.size}
          src={this.state.avatar}
          className="avatar__image"
        />
      </div>
    );
  };

  setGravatarInfo = (props) => {
    if (!props.src && !!props.email) {
      this.getProfile(props).then(data => {
        if (this.componentIsMounted) {
          this.setState(data);
        }
      });
    }
  };

  componentWillUnmount () {
    this.componentIsMounted = false;
  }

  componentWillReceiveProps (newProps) {
    this.setGravatarInfo(newProps);
  }

  componentDidMount () {
    this.componentIsMounted = true;
    this.setGravatarInfo(this.props);
  }

  render () {
    let html = '';
    const srcExist = !!this.props.src;
    if (srcExist) {
      html = this.getSimpleImageBlock(this.props.src);
    } else if (this.state.status) {
      html = this.getGravatarBlock();
    } else {
      const nameExist = !!this.props.name;
      const emailExist = !!this.props.email;
      if ((!nameExist && !emailExist) || (emailExist && this.state.status === null)) {
        return false;
      }
      const initials = this.prepareInitials(nameExist ? this.props.name : this.props.email);
      const color = this.getColor(initials);
      html = this.getSimpleImageBlock(this.getTextAvatar(initials, color));
    }
    return html;
  }

}
