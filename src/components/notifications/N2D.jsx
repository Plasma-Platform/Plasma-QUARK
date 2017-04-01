import React from 'react';

import Notification from '../Notification.jsx';

export default function N2D (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "error"
      position       = "absolute"
      placement      = "top"
      height         = "fixed-small"
      width          = "auto"
      arrowPlacement = "bottom"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
