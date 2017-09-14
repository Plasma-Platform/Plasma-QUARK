import React from 'react';

import Notification from '../Notification';

const N3I = props => (
  <Notification
    type="success"
    position="absolute"
    placement="left"
    height="auto"
    width="auto"
    arrowPlacement="right"
    {...props}
  />
);

export default N3I;
