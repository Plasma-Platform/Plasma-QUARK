import React from 'react';

import Notification from '../Notification.jsx';

export default function N2E (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "error"
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
