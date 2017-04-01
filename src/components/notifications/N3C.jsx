import React from 'react';

import Notification from '../Notification.jsx';

export default function N3C (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "success"
      position       = "absolute"
      placement      = "bottom"
      height         = "fixed-small"
      width          = "auto"
      arrowPlacement = "top"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
