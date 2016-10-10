import React      from 'react';
import classnames from 'classnames';

import Notifications from 'ui-toolkit/lib/notifications';

let notificationTimeout;

export function prepareNotification(notification, handleHide) {
  if (notification) {
    const NotificationComponent = Notifications[notification.code];
    const notificationClassnames = classnames({
      'animatedRightToLeft': notification.code === 'N2A',
      'animatedLeftToRight': notification.code === 'N2B',
      'animatedUpToDown': notification.code === 'N2C',
      'animatedDownToUp': notification.code === 'N2D',
    });

    return (
      < NotificationComponent
        className           = {notificationClassnames}
        onHideNotification  = {handleHide}
        text                = {notification.text}
        maxWidth            = {notification.maxWidth}
      />
    );
  }

  return null;
}

export function delay(func) {
  notificationTimeout = setTimeout(func, 200);
}

export function clearDelay(func) {
  clearTimeout(notificationTimeout);
  func();
}
