import React from 'react';

import Notification from '../Notification.jsx';

export default function N2A (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "error"
      position       = "absolute"
      placement      = "left"
      height         = "fixed-small"
      width          = "auto"
      arrowPlacement = "right"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
