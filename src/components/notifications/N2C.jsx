import React from 'react';

import Notification from '../Notification';

const N2C = props => (
  <Notification
    type="error"
    position="absolute"
    placement="bottom"
    height="fixed-small"
    width="auto"
    arrowPlacement="top"
    {...props}
  />
);

export default N2C;
