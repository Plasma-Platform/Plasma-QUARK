import React from 'react';

import Notification from '../Notification.jsx';

export default function N1G (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "default"
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
