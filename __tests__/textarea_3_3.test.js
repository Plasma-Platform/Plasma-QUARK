/* global expect:false, it:false, describe:false, jest:false, */
import React from 'react';
import {mount} from 'enzyme';
jest.mock('../src/components/utils/mouseTracker', () => {
  return {
    position: {
      target: {
        classList: {
          contains: () => true
        }
      }
    }
  };
});
import TextAreaMocked from '../src/components/TextArea.jsx';

describe('Textarea test which heeds mocked module', () => {
  it('3.3 simulates blur on textarea (cursor IN it)', () => {
    let component = mount(<TextAreaMocked />);
    component.node.input.focus = jest.fn(component.node.input.focus);
    component.find('textarea').first().simulate('blur');
    expect(component.node.input.focus).toBeCalled();
  });
});
