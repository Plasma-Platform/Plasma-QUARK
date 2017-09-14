import React from 'react';

import Notification from '../Notification';

const N2I = props => (
  <Notification
    type="error"
    position="absolute"
    placement="left"
    height="auto"
    width="auto"
    arrowPlacement="right"
    {...props}
  />
);

export default N2I;
