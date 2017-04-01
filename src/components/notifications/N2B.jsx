import React from 'react';

import Notification from '../Notification.jsx';

export default function N2B (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "error"
      position       = "absolute"
      placement      = "right"
      height         = "fixed-small"
      width          = "auto"
      arrowPlacement = "left"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
