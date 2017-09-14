import React from 'react';

import Notification from '../Notification';

const N2B = props => (
  <Notification
    type="error"
    position="absolute"
    placement="right"
    height="fixed-small"
    width="auto"
    arrowPlacement="left"
    {...props}
  />
);

export default N2B;
