import React from 'react';

import Notification from '../Notification.jsx';

export default function N1F (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "default"
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
