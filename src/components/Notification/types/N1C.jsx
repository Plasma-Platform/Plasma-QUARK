import React from 'react';

import Notification from '../Notification';

const N1C = props => (
  <Notification
    type="default"
    position="absolute"
    placement="bottom"
    height="fixed-small"
    width="auto"
    arrowPlacement="top"
    {...props}
  />
);

export default N1C;
