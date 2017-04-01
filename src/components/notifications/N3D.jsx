import React from 'react';

import Notification from '../Notification.jsx';

export default function N3D (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type           = "success"
      position       = "absolute"
      placement      = "top"
      height         = "fixed-small"
      width          = "auto"
      arrowPlacement = "bottom"
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
