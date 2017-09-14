import React from 'react';

import Notification from '../Notification';

const N1B = props => (
  <Notification
    type="default"
    position="absolute"
    placement="right"
    height="fixed-small"
    width="auto"
    arrowPlacement="left"
    {...props}
  />
);

export default N1B;
