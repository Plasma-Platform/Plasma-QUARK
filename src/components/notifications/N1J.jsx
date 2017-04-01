import React from 'react';

import Notification from '../Notification.jsx';

export default function N1I (props) {
  const {children, ...notificationProps} = props;
  return (
    <Notification
      type         = "default"
      position     = "fixed"
      placement    = "right"
      height       = "auto"
      width        = "auto"
      showArrow    = "false"
      showCloseBtn
      {...notificationProps}
    >
      {children}
    </Notification>
  );
}
