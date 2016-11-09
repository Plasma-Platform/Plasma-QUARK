/* global expect:false, test:false, it:false, describe:false */

import React from 'react';
import {shallow} from 'enzyme';
import Avatar from '../src/components/Avatar';
const avatar = shallow(<Avatar email="shaggrath@mail.ru"/>);
let params = {
  email  : 'stevenreed@templatemonster.me',
  size   : 60,
  name   : 'Tester',
  rating : 'g'
};
describe('Functional methods test:', () => {
  it('Method: getProfile(), Promise is work normal', async function() {
    try {
      const data = await avatar.instance().getProfile(params);
      expect(data.status).toEqual(1);
    } catch (object) {
      throw object;
    }
  });

  it(`Method: getSize(), must return size (number) from ${params.size}`, () => {
    expect(typeof avatar.instance().getSize(params.size)).toEqual('number');
  });

  it(`Method: getGravatarSrc(), must return url (string)`, () => {
    expect(typeof avatar.instance().getGravatarSrc('https://secure.gravatar.com/avatar/8bd2cedcb98c7a43c4f206e312568529', params)).toEqual('string');
  });

  it(`Method: setGravatarInfo(), must return url (string)`, async function() {
    try {
      await avatar.instance().setGravatarInfo(params);
    } catch (object) {
      throw object;
    }
    expect(typeof avatar.instance().getGravatarSrc('https://secure.gravatar.com/avatar/8bd2cedcb98c7a43c4f206e312568529', params)).toEqual('string');
  });

  describe(`Method: prepareInitials(), must return string with length 2`, () => {
    const phrases = ['Hello', 'Hello world', 'Hello my world'];
    phrases.forEach((element) => {
      it(`Call method with phrase "${element}" return the first two letters`, () => {
        expect(avatar.instance().prepareInitials(element).length).toEqual(2);
        expect(typeof avatar.instance().prepareInitials(element)).toEqual('string');
      });
    });
  });

  describe(`Method: getColor(), must return HEX color code`, () => {
    const testData = [
      {
        name  : 'SR',
        color : '#006023'
      },
      {
        name  : 'СС',
        color : '#546E7A'
      }
    ];
    testData.forEach((element) => {
      it(`Call method with "${element.name}"`, () => {
        expect(avatar.instance().getColor(element.name)).toEqual(element.color);
      });
    });
  });
});

test('Avatar with src', () => {
  const tree = shallow(
    <Avatar src="https://secure.gravatar.com/avatar/8bd2cedcb98c7a43c4f206e312568529"/>
  ).html();
  expect(tree).toMatchSnapshot();
});

test('Avatar with name', () => {
  const tree = shallow(
    <Avatar name="Steven Reed"/>
  ).html();
  expect(tree).toMatchSnapshot();
});

test('Avatar with email', () => {
  const component = shallow(
    <Avatar email={params.email}/>
  );
  component.setState({
    status      : 1,
    color       : '#006023',
    initial     : 'SR',
    displayName : 'Stven Reed',
    size        : 60,
    avatar      : 'http://1.gravatar.com/avatar/62615b629807a5c1f83e9d1060162003?d=https%3A%2F%2Fcdn2wp-templatemonster.netdna-ssl.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fonepixel.png&r=g&s=60'
  });
  const tree = component.html();
  expect(tree).toMatchSnapshot();
});
test('Avatar with email but without gravatar', () => {
  const component = shallow(
    <Avatar email={params.email}/>
  );
  component.setState({
    status: 0
  });
  const tree = component.html();
  expect(tree).toMatchSnapshot();
});
