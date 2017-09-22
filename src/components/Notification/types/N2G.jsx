import React from 'react';

import Notification from '../Notification';

const N2G = props => (
  <Notification
    type="error"
    position="absolute"
    placement="right"
    height="auto"
    width="auto"
    arrowPlacement="left"
    {...props}
  />
);

export default N2G;
