import React from 'react';

import Notification from '../Notification';

const N3E = props => (
  <Notification
    type="success"
    position="absolute"
    placement="top"
    height="auto"
    width="auto"
    arrowPlacement="bottom"
    {...props}
  />
);

export default N3E;
