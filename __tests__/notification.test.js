/* global expect:false, test:false, it:false, describe:false, jest:false, beforeEach:false */

import React from 'react';
import {shallow, mount} from 'enzyme';

import LargeNotification from '../src/components/LargeNotification.jsx';
import Notification from '../src/components/notifications';

describe('Notification view testing', () => {
  let notifications = [];

  beforeEach(() => {
    notifications = Object.keys(Notification);
  });

  it('takes a snapshot of Large Notification moved from UI-toolkit ', () => {
    let shot = shallow(<LargeNotification text="test" typographyCode="T1" />).html();
    expect(shot).toMatchSnapshot();
  });

  it('takes snapshots of all type of notifications', () => {
    let Component;
    let shot;
    notifications.forEach((type) => {
      Component = Notification[type];
      shot = shallow(<Component text="test" typographyCode="T1" onHideNotification={() => {}} />).html();
      expect(shot).toMatchSnapshot();
    });
  });

  it('sets position of notification', () => {
    let Component;
    let shot;
    const coords = {
      top  : 0,
      left : 0
    };

    notifications.forEach((type) => {
      Component = Notification[type];
      shot = mount(<Component text="test" typographyCode="T1" onHideNotification={() => {}} />);
      shot.node.setPosition = jest.fn(shot.node.setPosition);
      shot.node.setPosition(coords);
      expect(shot.node.setPosition).toBeCalled();
    });
  });
});
