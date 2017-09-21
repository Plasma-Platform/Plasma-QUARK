import React from 'react';

import Notification from '../Notification';

const N2A = props => (
  <Notification
    type="error"
    position="absolute"
    placement="left"
    height="fixed-small"
    width="auto"
    arrowPlacement="right"
    {...props}
  />
);

export default N2A;
