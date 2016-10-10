import React      from 'react';
import classnames from 'classnames';

import Notifications from 'ui-toolkit/lib/notifications';

let notificationTimeout;

export function prepareNotification(notification, handleHide) {
  if (notification) {
    const NotificationComponent = Notifications[notification.code];
    const notificationClassnames = classnames({
      'animatedRightToLeft' : ['N1A','N2A','N3A'].indexOf(notification.code) >= 0,
      'animatedLeftToRight' : ['N1B','N2B','N3B'].indexOf(notification.code) >= 0,
      'animatedUpToDown'    : ['N1C','N2C','N3C'].indexOf(notification.code) >= 0,
      'animatedDownToUp'    : ['N1D','N2D','N3D'].indexOf(notification.code) >= 0,
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
