/* global expect:false, it:false, describe:false, jest:false, beforeEach:false */
import React from 'react';
import {mount} from 'enzyme';
jest.mock('../src/components/utils/mouseTracker', () => {
  return {
    position: {
      target: {
        classList: {
          contains: () => false
        }
      }
    }
  };
});
import TextAreaMocked from '../src/components/TextArea.jsx';

describe('Textarea test which heeds mocked module', () => {
  let callback;
  beforeEach(() => {
    callback = jest.fn();
  });

  it('3.2 simulates blur on textarea (cursor NOT in it)', () => {
    let component = mount(<TextAreaMocked onBlur={callback} />);
    component.find('textarea').first().simulate('blur');
    expect(callback).toBeCalled();
  });
});