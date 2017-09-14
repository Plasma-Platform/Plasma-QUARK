import React from 'react';

import Notification from '../Notification';

const N3B = props => (
  <Notification
    type="success"
    position="absolute"
    placement="right"
    height="fixed-small"
    width="auto"
    arrowPlacement="left"
    {...props}
  />
);

export default N3B;
