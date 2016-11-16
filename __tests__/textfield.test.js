/* global expect:false, test:false, it:false, describe:false, jest:false, beforeEach:false */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TextFields from '../src/components/textFields';
import ControlledComponent from '../src/components/AbstractField.jsx';

describe('1 TextField high level components [F1, F2, F3, F4] testing', () => {
  let PROPS = {
    sizeType : ['F1', 'F2', 'F3', 'F4'],
    type     : ['email', 'password', 'text', 'search']
  };

  let testNode;
  let input;
  let focus;
  let blur;
  let change;

  beforeEach(() => {
    focus = jest.fn();
    blur = jest.fn();
    change = jest.fn();
    testNode = mount(<TextFields.F1 onFocus={focus} onBlur={blur} onChange={change}/>);
    input = testNode.find('input').first();
  });

  it('1.1 makes snapshots for All 4 sizes of TF with default parameters', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = shallow(<TextField />).html();
      expect(node).toMatchSnapshot();
    });
  });

  it('1.2 makes snapshots for All 4 sizes of TF * each 4 input types', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      PROPS.type.forEach((type) => {
        let node = shallow(<TextField type={type} />).html();
        expect(node).toMatchSnapshot();
      });
    });
  });

  it('1.3 checks that textField.value returns a value of input', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = mount(<TextField value='test value' />);
      let value = node.component.getInstance().value;
      expect(value).toEqual('test value');
    });
  });

  it('1.4 checks that componentType of TextField is "textfield"', () => {
    let node = mount(<TextFields.F1 />);
    let type = node.find('TextField').first().props().componentType;
    expect(type).toEqual('textfield');
  });

  it('1.5 checks that sizeType prop points to right size', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = mount(<TextField />);
      let sizeType = node.find('TextField').first().props().sizeType;
      expect(sizeType).toEqual(size);
    });
  });

  it('1.6 checks that type of input is "text" by default', () => {
    let node = mount(<TextFields.F1 />);
    let type = node.find('TextField').first().props().type;
    expect(type).toEqual('text');
  });

  it('1.7 checks that input type=password has an password reveal icon', () => {
    let node = mount(<TextFields.F1 type="password"/>);
    let reveal = node.find('EyePasswordIndicator').first();
    expect(reveal).toBeDefined();
  });

  describe('1.2 High level component events testing', () => {
    it('1.2.1 calls onFocus callback', () => {
      input.simulate('focus');
      expect(focus).toBeCalled();
    });

    it('1.2.2 calls onBlur callback', () => {
      input.simulate('blur');
      expect(blur).toBeCalled();
    });

    it('1.2.3 calls onChange callback', () => {
      input.simulate('change');
      expect(change).toBeCalled();
    });
  });
});

describe('2 Controlled component (AbstractField) testing', () => {
  let focus;
  let testNode;
  let input;
  let blur;
  let change;

  beforeEach(() => {
    focus = jest.fn();
    blur = jest.fn();
    change = jest.fn();
    testNode = mount(<ControlledComponent onFocus={focus} onBlur={blur} onChange={change}/>);
    input = testNode.find('input').first();
  });

  describe('2.1 Focus testing', () => {
    it('2.1.1 defines onFocus callback presence', () => {
      expect(testNode.props().onFocus).toBeDefined();
    });

    it('2.1.2 calls onFocus callback', () => {
      input.simulate('focus');
      expect(focus).toBeCalled();
    });

    it('2.1.3 checks that onFocus added "text-field_focused" class into wrapping element', () => {
      input.simulate('focus');
      let classes = testNode.find('.abstract-field').first().props().className;
      expect(classes).toMatch('_focused');
    });

    it('2.1.4 checks that onFocus made state.focused = true', () => {
      input.simulate('focus');
      expect(testNode.state('focused')).toEqual(true);
    });
  });

  describe('2.2 Blur testing', () => {
    it('2.2.1 defines onBlur callback presence', () => {
      expect(testNode.props().onBlur).toBeDefined();
    });

    it('2.2.2 calls onBlur callback', () => {
      input.simulate('blur');
      expect(blur).toBeCalled();
    });

    it('2.2.3 checks that onBlur removed "text-field_focused" class from wrapping element', () => {
      input.simulate('focus');
      input.simulate('blur');
      let classes = testNode.find('.abstract-field').first().props().className;
      expect(classes).not.toMatch('_focused');
    });

    it('2.2.4 checks that onBlur made state.focused = false', () => {
      input.simulate('focus');
      input.simulate('blur');
      expect(testNode.state('focused')).toEqual(false);
    });
  });

  describe('2.3 Change testing', () => {
    it('2.3.1 defines onChange callback presence', () => {
      expect(testNode.props().onChange).toBeDefined();
    });

    it('2.3.2 calls onChange callback', () => {
      let newVal = '777';
      input.simulate('change', {target: {value: newVal}});
      expect(input.props().value).toMatch(newVal);
    });

    it('2.3.3 changes field\'s value with non-empty string, cause state.filled=true', () => {
      let newVal = '7';
      input.simulate('change', {target: {value: newVal}});
      expect(testNode.state('filled')).toEqual(true);
    });

    it('2.3.4 cleans field\'s value, cause state.filled=false', () => {
      input.simulate('change', {target: {value: ''}});
      expect(testNode.state('filled')).toEqual(false);
    });
  });
});
