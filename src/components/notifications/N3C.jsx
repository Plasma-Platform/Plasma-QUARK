import React from 'react';

import Notification from '../Notification';

const N3C = props => (
  <Notification
    type="success"
    position="absolute"
    placement="bottom"
    height="fixed-small"
    width="auto"
    arrowPlacement="top"
    {...props}
  />
);

export default N3C;
