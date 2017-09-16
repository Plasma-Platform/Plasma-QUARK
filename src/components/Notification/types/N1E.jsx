import React from 'react';

import Notification from '../Notification';

const N1E = props => (
  <Notification
    type="default"
    position="absolute"
    placement="top"
    height="auto"
    width="auto"
    arrowPlacement="bottom"
    {...props}
  />
);

export default N1E;
