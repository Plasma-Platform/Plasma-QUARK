/* global expect:false, it:false, describe:false, jest:false, beforeEach:false */

import React from 'react';
import {mount} from 'enzyme';
import AbstractField from '../src/components/AbstractField.jsx';

describe('AbstractField testing', () => {
  let testNode;
  let input;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    testNode = mount(<AbstractField onFocus={callback} onBlur={callback} onChange={callback} closeOnCLickOutside={true}  />);
    input = testNode.find('input').first();
  });

  describe('1 Focus testing', () => {
    it('1.1 defines onFocus callback presence', () => {
      expect(testNode.props().onFocus).toBeDefined();
    });

    it('1.2 calls onFocus callback', () => {
      input.simulate('focus');
      expect(callback).toBeCalled();
    });

    it('1.3 checks that onFocus added "text-field_focused" class into wrapping element', () => {
      input.simulate('focus');
      let classes = testNode.find('.abstract-field').first().props().className;
      expect(classes).toMatch('_focused');
    });

    it('1.4 checks that onFocus made state.focused = true', () => {
      input.simulate('focus');
      expect(testNode.state('focused')).toEqual(true);
    });

    it('1.5 tests autofocus prop', () => {
      let testNode = mount(<AbstractField autofocus closeOnCLickOutside={true}  />);
      expect(testNode.state().focused).toEqual(true);
    });
  });

  describe('2 Blur testing', () => {
    it('2.1 defines onBlur callback presence', () => {
      expect(testNode.props().onBlur).toBeDefined();
    });

    it('2.2 calls onBlur callback', () => {
      input.simulate('blur');
      expect(callback).toBeCalled();
    });

    it('2.3 checks that onBlur removed "text-field_focused" class from wrapping element', () => {
      input.simulate('focus');
      input.simulate('blur');
      let classes = testNode.find('.abstract-field').first().props().className;
      expect(classes).not.toMatch('_focused');
    });

    it('2.4 checks that onBlur made state.focused = false', () => {
      input.simulate('focus');
      input.simulate('blur');
      expect(testNode.state('focused')).toEqual(false);
    });
  });

  describe('3 Change testing', () => {
    it('3.1 defines onChange callback presence', () => {
      expect(testNode.props().onChange).toBeDefined();
    });

    it('3.2 calls onChange callback', () => {
      let newVal = '777';
      input.simulate('change', {target: {value: newVal}});
      expect(input.props().value).toMatch(newVal);
    });

    it('3.3 changes field\'s value with non-empty string, cause state.filled=true', () => {
      let newVal = '7';
      input.simulate('change', {target: {value: newVal}});
      expect(testNode.state('filled')).toEqual(true);
    });

    it('3.4 cleans field\'s value, cause state.filled=false', () => {
      input.simulate('change', {target: {value: ''}});
      expect(testNode.state('filled')).toEqual(false);
    });
  });

  describe('4 Functions ', () => {
    it('4.1 receives the value of input', () => {
      testNode.setProps({'value': 'test'});
      let value = testNode.node.getValue();
      expect(value).toEqual('test');
    });

    it('4.2 sets up validation status to invalid and starts animation', () => {
      testNode.node.setValidationStatus(false, 'Error');
      expect(testNode.state('isValid')).toEqual(false);
      expect(testNode.state('animated')).toEqual(true);
    });

    it('4.3 changes field type', () => {
      let newType = 'email';
      testNode.node.changeFieldType(newType);
      expect(input.node.type).toEqual(newType);
    });

    it('4.4 animates field', () => {
      testNode.node.activateAnimation();
      expect(testNode.state('animated')).toEqual(true);
      let wrapperClasses = testNode.find('.abstract-field').props().className;
      expect(wrapperClasses).toMatch('animated');
    });

    it('4.5 resets validation status', () => {
      testNode.node.resetValidationStatus();
      expect(testNode.state('isValid')).toEqual(undefined);
      let wrapperClasses = testNode.find('.abstract-field').props().className;
      expect(wrapperClasses).not.toMatch(/valid |invalid /);
    });

    it('4.6 gets validation status', () => {
      testNode.node.setValidationStatus(false, 'Error');
      let status = testNode.node.getValidationStatus();
      expect(status).toEqual(false);
    });

    it('4.7 trims string on blur', () => {
      let testNode = mount(<AbstractField closeOnCLickOutside={true} />);
      let input = testNode.find('input');
      let newVal = '   spaces';
      input.simulate('focus');
      input.node.value = newVal;
      input.simulate('change', {target: {value: newVal}});
      input.simulate('blur');
      expect(input.node.value).toEqual(newVal.trim());
    });
  });
});
