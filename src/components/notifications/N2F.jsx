import React from 'react';

import Notification from '../Notification.jsx';

export default function N2F (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "error"
      position       = "absolute"
      placement      = "bottom"
      height         = "auto"
      width          = "auto"
      arrowPlacement = "top"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
