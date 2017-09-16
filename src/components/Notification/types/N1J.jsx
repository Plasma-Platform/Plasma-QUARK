import React from 'react';

import Notification from '../Notification';

const N1J = props => (
  <Notification
    type="default"
    position="fixed"
    placement="right"
    height="auto"
    width="auto"
    showArrow="false"
    showCloseBtn
    {...props}
  />
);

export default N1J;
