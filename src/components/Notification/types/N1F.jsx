import React from 'react';

import Notification from '../Notification';

const N1F = props => (
  <Notification
    type="default"
    position="absolute"
    placement="bottom"
    height="auto"
    width="auto"
    arrowPlacement="top"
    {...props}
  />
);

export default N1F;
