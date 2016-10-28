import md5 from 'md5';
import fetchJSONP from 'fetch-jsonp';
import querystring from 'query-string';
import isRetina from 'is-retina';

const URL = '//gravatar.com/';
const DEFAULT = 'https://cdn2wp-templatemonster.netdna-ssl.com/wp-content/uploads/2016/10/onepixel.png'; // default image
const COLORS = [ // array colors
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

class GravatarApi {
  /**
   * Main function
   *
   * @param {Object} atts
   * @returns {Promise.<T>}
   */
  getProfile = (atts = {}) => {
    return fetchJSONP(URL + `${md5(atts.email)}.json`, {
      timeout: 1000
    }).then(response => {
      return response.json();
    }).then(response => {
      let data = response.entry[0];
      return {
        status      : 1,
        color       : this.getColor(data.displayName),
        initial     : this.prepareInitials(data.displayName),
        displayName : data.displayName,
        size        : this._getSize(atts.size),
        avatar      : this._getGravatarSrc(data.thumbnailUrl, atts)
      };
    }).catch(response => {
      return {
        status: 0
      };
    });
  };

  /**
   * Generate size for retina display
   *
   * @param {number} size
   * @returns {number}
   * @private
   */
  _getSize = (size) => {
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
  _getGravatarSrc = (cleanURL, atts) => {
    const query = querystring.stringify({
      s : this._getSize(atts.size),
      r : atts.rating,
      d : DEFAULT
    });
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
  getColor = (name = false) => {
    if (name) {
      let literal = name[0].toUpperCase();
      return COLORS[literal.charCodeAt(0).toString()[0]];
    } else {
      return COLORS[0];
    }
  }

}

export default new GravatarApi();
