import React from 'react';

import Notification from '../Notification.jsx';

export default function N3I (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "success"
      position       = "absolute"
      placement      = "left"
      height         = "auto"
      width          = "auto"
      arrowPlacement = "right"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
