import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Logo, { styles } from './index';

describe('<Logo />', () => {
  it('should correctly the logo', () => {
    const component = <Logo />;
    const wrapper = shallow(component);
    expect(wrapper.find('svg').props().width).toEqual('92px');
    expect(wrapper.find('svg').props().height).toEqual('17px');
    expect(wrapper.find('svg').props().viewBox).toEqual('0 0 92 17');
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('logo-basic');
  });

  it('should add a className to the parent container, if one is provided', () => {
    const component = <Logo className="logo-class" />;
    const wrapper = shallow(component);
    expect(wrapper.hasClass('logo-class')).toEqual(true);
    expect(wrapper.hasClass(styles.container)).toEqual(true);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('logo-container-classname');
  });

  it('should add a svgClassName to the SVG, if one is provided', () => {
    const component = <Logo svgClassName="svg-logo-class" />;
    const wrapper = shallow(component);
    expect(wrapper.find('svg').hasClass('svg-logo-class')).toEqual(true);
    expect(wrapper.find('svg').hasClass(styles.svg)).toEqual(true);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('logo-svg-classname');
  });
});
