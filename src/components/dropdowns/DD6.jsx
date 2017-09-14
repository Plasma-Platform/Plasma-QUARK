import React from 'react';

import Dropdown from '../Dropdown';

const DD6 = props => (
  <Dropdown
    type={6}
    showLabel={false}
    buttonSize="large"
    optionSize="large"
    optionIconRadioStyle
    {...props}
  />
);

export default DD6;
