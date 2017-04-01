import React from 'react';

import Notification from '../Notification.jsx';

export default function N3A (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "success"
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
