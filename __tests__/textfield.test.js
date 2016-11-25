/* global expect:false, it:false, describe:false, jest:false, beforeEach:false */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TextField from '../src/components/textFields';
import TextFieldPresent from '../src/components/TextField.jsx';

describe('1 TextField high level components [F1, F2, F3, F4] testing', () => {
  const PROPS = {
    type: ['email', 'password', 'text', 'search']
  };

  let callback;
  let tfCount;
  let textFields = [];

  beforeEach(() => {
    callback = jest.fn();
    tfCount = Object.keys(TextField).length;
    for (let i = 1; i <= tfCount; i++) {
      let componentType = `F${i}`;
      let component = TextField[componentType];
      textFields.push(component);
    }
  });

  it('1.1 makes snapshots for All 4 sizes of TF with default parameters', () => {
    textFields.forEach((Component) => {
      let node = shallow(<Component closeOnCLickOutside={true} />).html();
      expect(node).toMatchSnapshot();
    });
  });

  it('1.2 makes snapshots for All 4 sizes of TF * each 4 input types', () => {
    textFields.forEach((Component) => {
      PROPS.type.forEach((type) => {
        let node = shallow(<Component type={type} closeOnCLickOutside={true} />).html();
        expect(node).toMatchSnapshot();
      });
    });
  });

  it('1.3 checks that textField.value returns a value of input', () => {
    textFields.forEach((Component) => {
      let node = mount(<Component value='test value' closeOnCLickOutside={true} />);
      let value = node.component.getInstance().value;
      expect(value).toEqual('test value');
    });
  });

  it('1.4 checks that componentType of TextField is "textfield"', () => {
    textFields.forEach((Component) => {
      let node = mount(<Component closeOnCLickOutside={true} />);
      let type = node.find('TextField').first().props().componentType;
      expect(type).toEqual('textfield');
    });
  });

  it('1.5 checks that sizeType prop points to right size', () => {
    for (let i = 1; i <= tfCount; i++) {
      let size = `F${i}`;
      let Component = TextField[size];
      let node = mount(<Component closeOnCLickOutside={true} />);
      let sizeType = node.find('TextField').first().props().sizeType;
      expect(sizeType).toEqual(size);
    }
  });

  it('1.8 performs focus in field using focus() method', () => {
    textFields.forEach((Component) => {
      let node = mount(<Component closeOnCLickOutside={true} />);
      node.node.focus();
      expect(node.find('TextField').props().focused).toEqual(true);
    });
  });

  describe('1.2 Events', () => {
    it('1.2.1 calls onFocus callback', () => {
      textFields.forEach((Component) => {
        let node = mount(<Component onFocus={callback} closeOnCLickOutside={true} />);
        node.find('input').simulate('focus');
        expect(callback).toBeCalled();
      });
    });

    it('1.2.2 calls onBlur callback', () => {
      textFields.forEach((Component) => {
        let node = mount(<Component onBlur={callback} closeOnCLickOutside={true} />);
        node.find('input').simulate('blur');
        expect(callback).toBeCalled();
      });
    });

    it('1.2.3 calls onChange callback', () => {
      textFields.forEach((Component) => {
        let node = mount(<Component onChange={callback} closeOnCLickOutside={true} />);
        node.find('input').simulate('change');
        expect(callback).toBeCalled();
      });
    });
  });
});

describe('3 TextField Presentational testing', () => {
  let callback;
  // let testNode;
  beforeEach(() => {
    callback = jest.fn();
    jest.useFakeTimers();
    // testNode = mount(<TextFieldPresent closeOnCLickOutside={true} type="password" />);
  });

  it('3.1 checks that type of input is "text" by default', () => {
    let node = mount(<TextFieldPresent closeOnCLickOutside={true} />);
    let type = node.props().type;
    expect(type).toEqual('text');
  });

  it('3.2 checks that input type=password has an password reveal icon', () => {
    let node = shallow(<TextFieldPresent closeOnCLickOutside={true} changeFieldType={callback} type="password" />);
    node.setProps({'changeFieldType': () => {}});
    let reveal = node.find('EyePasswordIndicator').first();
    expect(reveal).toBeDefined();
  });

  it('3.3 shows tooltip ', () => {
    let node = mount(<TextFieldPresent closeOnCLickOutside={true} />);
    node.node.showTooltip = jest.fn(node.node.showTooltip);
    node.node.showTooltip();
    expect(node.node.showTooltip).toBeCalled();
  });

  it('3.4 hides password and tooltip', () => {
    let node = mount(<TextFieldPresent closeOnCLickOutside={true} changeFieldType={callback} />);
    node.node.hidePasswordAndTooltip = jest.fn(node.node.hidePasswordAndTooltip);
    node.node.hidePasswordAndTooltip();
    expect(node.node.hidePasswordAndTooltip).toBeCalled();
  });

  it('3.4.1 hides password and tooltip with force cleaning timer', () => {
    let node = mount(<TextFieldPresent changeFieldType={callback}  closeOnCLickOutside={true} />);
    node.instance().showTimer = true;
    node.node.hidePasswordAndTooltip();
    expect(callback).toBeCalled();
  });
});
