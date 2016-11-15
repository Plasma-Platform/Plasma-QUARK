/* global expect:false, test:false, it:false, describe:false */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TextFields from '../src/components/textFields';

describe('Testing Decorators [F1, F2, F3, F4]', () => {
  let PROPS = {
    sizeType : ['F1', 'F2', 'F3', 'F4'],
    type     : ['email', 'password', 'text', 'search']
  };

  it('4 sizes of TF with default parameters', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = shallow(<TextField />).html();
      expect(node).toMatchSnapshot();
    });
  });

  it('4 sizes of TF * 4 input types ', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      PROPS.type.forEach((type) => {
        let node = shallow(<TextField type={type} />).html();
        expect(node).toMatchSnapshot();
      });
    });
  });

  it('TextField[Type].value must return a value of input', () => {
    PROPS.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = mount(<TextField value='test value' />);
      let value = node.component.getInstance().value;
      expect(value).toEqual('test value');
    });
  });
});
