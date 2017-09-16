import React from 'react';

import Notification from '../Notification';

const N1I = props => (
  <Notification
    type="default"
    position="absolute"
    placement="left"
    height="auto"
    width="auto"
    arrowPlacement="right"
    {...props}
  />
);

export default N1I;
