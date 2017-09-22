import React from 'react';

import Notification from '../Notification';

const N3F = props => (
  <Notification
    type="success"
    position="absolute"
    placement="bottom"
    height="auto"
    width="auto"
    arrowPlacement="top"
    {...props}
  />
);

export default N3F;
