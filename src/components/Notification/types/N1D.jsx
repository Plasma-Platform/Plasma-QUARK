import React from 'react';

import Notification from '../Notification';

const N1D = props => (
  <Notification
    type="default"
    position="absolute"
    placement="top"
    height="fixed-small"
    width="auto"
    arrowPlacement="bottom"
    {...props}
  />
);

export default N1D;
