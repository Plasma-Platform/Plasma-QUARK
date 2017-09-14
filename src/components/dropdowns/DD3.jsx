import React from 'react';

import Dropdown from '../Dropdown';

const DD3 = props => (
  <Dropdown
    type={3}
    labelSize="small"
    showLabelInButton
    buttonSize="large"
    showFilterBox
    showSelectedOption={false}
    {...props}
  />
);

export default DD3;
