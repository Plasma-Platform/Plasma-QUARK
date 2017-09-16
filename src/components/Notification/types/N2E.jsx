import React from 'react';

import Notification from '../Notification';

const N2E = props => (
  <Notification
    type="error"
    position="absolute"
    placement="top"
    height="auto"
    width="auto"
    arrowPlacement="bottom"
    {...props}
  />
);

export default N2E;
