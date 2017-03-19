import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import P, { styles } from './index';

describe('<P />', () => {
  it('should correctly render children, when text', () => {
    const component = <P>This is a sample paragraph. It has some level of text. There is a lot of it.</P>;
    const wrapper = shallow(component);
    expect(wrapper.text()).toEqual('This is a sample paragraph. It has some level of text. There is a lot of it.');
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('p-basic');
  });

  it('should append a className to the default, if provided', () => {
    const component = <P className="test-class">This is a sample paragraph. It has some level of text. There is a lot of it.</P>; //eslint-disable-line
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`test-class ${styles.p}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('p-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <P>This is a sample paragraph. It has some level of text. There is a lot of it.</P>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(styles.p);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('p-default-classname');
  });
});

