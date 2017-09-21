import React from 'react';

import Notification from '../Notification';

const N3A = props => (
  <Notification
    type="success"
    position="absolute"
    placement="left"
    height="fixed-small"
    width="auto"
    arrowPlacement="right"
    {...props}
  />
);

export default N3A;
