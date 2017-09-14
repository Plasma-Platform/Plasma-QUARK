import React from 'react';

import Notification from '../Notification';

const N2F = props => (
  <Notification
    type="error"
    position="absolute"
    placement="bottom"
    height="auto"
    width="auto"
    arrowPlacement="top"
    {...props}
  />
);

export default N2F;
