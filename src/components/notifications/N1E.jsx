import React from 'react';

import Notification from '../Notification.jsx';

export default function N1E (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "default"
      position       = "absolute"
      placement      = "top"
      height         = "auto"
      width          = "auto"
      arrowPlacement = "bottom"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
