/* global expect:false, test:false, it:false, describe:false */

import React from 'react';
import {shallow} from 'enzyme';
import TextFields from '../src/components/textFields';

describe('TextField Snapshots', () => {
  let props = {
    sizeType : ['F1','F2','F3','F4'],
    type: ['email', 'password', 'text', 'search'],
  };

  it('4 sizes of TF with default parameters', () => {
    props.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      let node = shallow(<TextField />).html();
      expect(node).toMatchSnapshot();
    });
  });

  it('4 sizes of TF * 4 input types ', () => {
    props.sizeType.forEach((size) => {
      let TextField = TextFields[size];
      props.type.forEach((type) => {
        let node = shallow(<TextField type={type} />).html();
        expect(node).toMatchSnapshot();
      })
    });
  });


});
