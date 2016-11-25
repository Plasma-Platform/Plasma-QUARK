/* global expect:false, test:false, it:false, describe:false, jest:false, beforeEach:false */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TextArea from '../src/components/textareas';
import TextAreaPresent from '../src/components/TextArea.jsx';

describe('1 TextArea high level components [TA1-8] testing', () => {
  let callback;
  let textAreas = [];

  beforeEach(() => {
    callback = jest.fn();
    let taCount = Object.keys(TextArea).length;
    for (let i = 1; i <= taCount; i++) {
      let componentType = `TA${i}`;
      let component = TextArea[componentType];
      textAreas.push(component);
    }
  });

  describe('1.1 Events testing', () => {
    it('1.1.1 calls onFocus callback', () => {
      textAreas.forEach((Component) => {
        let testNode = shallow(<Component onFocus={callback} />);
        testNode.simulate('focus');
        expect(callback).toBeCalled();
      });
    });

    it('1.1.2 calls onBlur callback', () => {
      textAreas.forEach((Component) => {
        let testNode = shallow(<Component onBlur={callback} />);
        testNode.simulate('blur');
        expect(callback).toBeCalled();
      });
    });

    it('1.1.3 calls onChange callback', () => {
      textAreas.forEach((Component) => {
        let testNode = shallow(<Component onChange={callback} />);
        testNode.simulate('change');
        expect(callback).toBeCalled();
      });
    });
  });

  describe('1.2 API', () => {
    it('1.2.1 performs focus using focus() method', () => {
      textAreas.forEach((Component) => {
        let testNode = mount(<Component />);
        testNode.node.focus();
        let classes = testNode.find('.abstract-field').props().className;
        expect(classes).toMatch('focused');
      });
    });

    it('1.2.2 gets value of textarea', () => {
      textAreas.forEach((Component) => {
        let testNode = mount(<Component value="test text" />);
        let value = testNode.node.getValue();
        expect(value).toMatch('test text');
      });
    });
  });
});

describe('2 Snapshot testing', () => {
  it('2.1 takes a shot of all High level text area types (default props)', () => {
    for (let i = 1; i <= 8; i++) {
      let type = `TA${i}`;
      let TA = TextArea[type];
      let component = shallow(<TA />).html();
      expect(component).toMatchSnapshot();
    }
  });

  it('2.2 takes a shot of disabled stateless TextArea components (TextArea.jsx)', () => {
    let component = shallow(<TextAreaPresent
      value="test"
      disabled
    />).html();
    expect(component).toMatchSnapshot();
  });

  it('2.3 takes a shot of stateless TextArea components (TextArea.jsx)', () => {
    let component = shallow(<TextAreaPresent value="test" />).html();
    expect(component).toMatchSnapshot();
  });
});

describe('3 Presentational TextArea testing', () => {
  let callback;
  beforeEach(() => {
    callback = jest.fn();
  });

  it('3.1 simulates focus using focus() method', () => {
    let component = mount(<TextAreaPresent onFocus={callback} />);
    component.node.focus();
    expect(callback).toBeCalled();
  });
});
