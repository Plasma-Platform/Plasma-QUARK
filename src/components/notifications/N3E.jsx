import React from 'react';

import Notification from '../Notification.jsx';

export default function N3E (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "success"
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
