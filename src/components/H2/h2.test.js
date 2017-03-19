import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import H2, { styles } from './index';

describe('<H2 />', () => {
  it('should correctly render children, when text', () => {
    const component = <H2>Title</H2>;
    const wrapper = shallow(component);
    expect(wrapper.text()).toEqual('Title');
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h2-children-text');
  });

  it('should append a className to the default, if provided', () => {
    const component = <H2 className="test-class">Title H2</H2>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`test-class ${styles.h2}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h2-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <H2>Title H2</H2>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(styles.h2);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h2-default-classname');
  });
});
