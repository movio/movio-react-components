import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import H1, { styles } from './index';

describe('<H1 />', () => {
  it('should correctly render children, when text', () => {
    const component = <H1>Title</H1>;
    const wrapper = shallow(component);
    expect(wrapper.text()).toEqual('Title');
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h1-children-text');
  });

  it('should append a className to the default, if provided', () => {
    const component = <H1 className="test-class">Title H1</H1>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`test-class ${styles.h1}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h1-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <H1>Title H1</H1>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(styles.h1);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('h1-default-classname');
  });
});
