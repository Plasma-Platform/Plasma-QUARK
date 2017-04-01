import React from 'react';

import Notification from '../Notification.jsx';

export default function N1I (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "default"
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
