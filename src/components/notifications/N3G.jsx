import React from 'react';

import Notification from '../Notification.jsx';

export default function N3G (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "success"
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
