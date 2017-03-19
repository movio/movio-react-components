import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import H3, { styles } from './index';

describe('<H3 />', () => {
  it('should correctly render children, when text', () => {
    const component = <H3>Title</H3>;
    const wrapper = shallow(component);
    expect(wrapper.text()).toEqual('Title');
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h3-children-text');
  });

  it('should append a className to the default, if provided', () => {
    const component = <H3 className="test-class">Title H3</H3>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`test-class ${styles.h3}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h3-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <H3>Title H3</H3>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(styles.h3);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h3-default-classname');
  });
});
