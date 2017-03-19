import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Tooltip, { styles } from './index';

describe('<Tooltip />', () => {
  it('should correctly render children, when text', () => {
    const component = <Tooltip>Title</Tooltip>;
    const wrapper = shallow(component);
    expect(wrapper.text()).toEqual('Title');
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('tooltip-basic');
  });

  it('should append a className to the default, if provided', () => {
    const component = <Tooltip className="test-class">Title Tooltip</Tooltip>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`test-class ${styles.container}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('tooltip-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <Tooltip>Title Tooltip</Tooltip>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(styles.container);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('tooltip-default-classname');
  });
});

