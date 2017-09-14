import React from 'react';

import Dropdown from '../Dropdown';

const DD7 = props => (
  <Dropdown
    type={7}
    showButton={false}
    showLabel={false}
    optionSize="large"
    optionIconSize="large"
    {...props}
  />
);

export default DD7;
