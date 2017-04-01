import React from 'react';

import Notification from '../Notification.jsx';

export default function N2G (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "error"
      position       = "absolute"
      placement      = "right"
      height         = "auto"
      width          = "auto"
      arrowPlacement = "left"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
