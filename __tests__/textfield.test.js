/* global expect:false, test:false, it:false, describe:false */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TextFields from '../src/components/textFields';
import ControlledComponent from '../src/components/AbstractField.jsx';

describe('Testing TextField high level components [F1, F2, F3, F4]', () => {
  let PROPS = {
    sizeType : ['F1', 'F2', 'F3', 'F4'],
    type     : ['email', 'password', 'text', 'search']
  };

  it('All 4 sizes of TF with default parameters (snapshots)', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = shallow(<TextField />).html();
      expect(node).toMatchSnapshot();
    });
  });

  it('All 4 sizes of TF * each 4 input types (snapshots)', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      PROPS.type.forEach((type) => {
        let node = shallow(<TextField type={type} />).html();
        expect(node).toMatchSnapshot();
      });
    });
  });

  it('textField.value must return a value of input', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = mount(<TextField value='test value' />);
      let value = node.component.getInstance().value;
      expect(value).toEqual('test value');
    });
  });

  it('componentType of TextField must be "textfield"', () => {
    let node = mount(<TextFields.F1 />);
    let type = node.find('TextField').first().props().componentType;
    expect(type).toEqual('textfield');
  });

  it('sizeType prop points to right size', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = mount(<TextField />);
      let sizeType = node.find('TextField').first().props().sizeType;
      expect(sizeType).toEqual(size);
    });
  });

  it('type of input must be "text" by default', () => {
    let node = mount(<TextFields.F1 />);
    let type = node.find('TextField').first().props().type;
    expect(type).toEqual('text');
  });
});

describe('Controlled component (AbstractField) testing', () => {


});
