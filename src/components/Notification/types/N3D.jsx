import React from 'react';

import Notification from '../Notification';

const N3D = props => (
  <Notification
    type="success"
    position="absolute"
    placement="top"
    height="fixed-small"
    width="auto"
    arrowPlacement="bottom"
    {...props}
  />
);

export default N3D;
