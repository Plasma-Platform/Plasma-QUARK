import React from 'react';

import Notification from '../Notification';

const N2D = props => (
  <Notification
    type="error"
    position="absolute"
    placement="top"
    height="fixed-small"
    width="auto"
    arrowPlacement="bottom"
    {...props}
  />
);

export default N2D;
