import React from 'react';

import Notification from '../Notification';

const N1G = props => (
  <Notification
    type="default"
    position="absolute"
    placement="right"
    height="auto"
    width="auto"
    arrowPlacement="left"
    {...props}
  />
);

export default N1G;
