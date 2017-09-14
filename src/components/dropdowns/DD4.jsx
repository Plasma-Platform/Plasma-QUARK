import React from 'react';

import Dropdown from '../Dropdown';

const DD4 = props => (
  <Dropdown
    type={4}
    showSelectedOption={false}
    showLabel={false}
    showOptionHTMLInButton={false}
    showFilterBox
    {...props}
  />
);

export default DD4;
