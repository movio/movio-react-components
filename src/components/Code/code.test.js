// @flow
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Code, { styles } from './index';

describe('<Code />', () => {
  it('should render a <code> block as the only child', () => {
    const component = <Code code="const a = (b) => b + 1;" />;
    const wrapper = shallow(component);
    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find('code')).toHaveLength(1);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('code-single-child');
  });

  it('should append a className to the default, if provided', () => {
    const component = <Code className="test-class" code="const a = (b) => b + 1;" />;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`test-class ${styles.container}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('code-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <Code code="const a = (b) => b + 1;" />;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(styles.container);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('code-default-classname');
  });

  it('should correctly render code block', () => {
    const wrapper = shallow(<Code code="const a = (b) => b + 1;" />);
    expect(wrapper.find('code').text()).toEqual('const a = (b) => b + 1;');
  });
});

