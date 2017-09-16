import React from 'react';

import Notification from '../Notification';

const N3G = props => (
  <Notification
    type="success"
    position="absolute"
    placement="right"
    height="auto"
    width="auto"
    arrowPlacement="left"
    {...props}
  />
);

export default N3G;
