import React from 'react';
import PropTypes from 'prop-types';

import './SwitcherGroup.less';

const SwitcherGroup = ({ children }) => (
  <div className="tm-quark-switcher-group">
    {children}
  </div>
);

SwitcherGroup.propTypes = {
  children: PropTypes.node,
};

SwitcherGroup.defaultProps = {
  children: null,
};

export default SwitcherGroup;
