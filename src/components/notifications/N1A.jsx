import React from 'react';

import Notification from '../Notification';

const N1A = props => (
  <Notification
    type="default"
    position="absolute"
    placement="left"
    height="fixed-small"
    width="auto"
    arrowPlacement="right"
    {...props}
  />
);

export default N1A;
