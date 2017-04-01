import React from 'react';

import Notification from '../Notification.jsx';

export default function N3B (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "success"
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
