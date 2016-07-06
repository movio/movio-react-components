import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Logo, { styles } from './index';

describe('<Logo />', () => {
  it('should correctly the logo', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('svg').props().width).to.equal('92px');
    expect(wrapper.find('svg').props().height).to.equal('17px');
    expect(wrapper.find('svg').props().viewBox).to.equal('0 0 92 17');
  });

  it('should add a className to the parent container, if one is provided', () => {
    const wrapper = shallow(<Logo className="logo-class" />);
    expect(wrapper.hasClass('logo-class')).to.equal(true);
    expect(wrapper.hasClass(styles.container)).to.equal(true);
  });

  it('should add a svgClassName to the SVG, if one is provided', () => {
    const wrapper = shallow(<Logo svgClassName="svg-logo-class" />);
    expect(wrapper.find('svg').hasClass('svg-logo-class')).to.equal(true);
    expect(wrapper.find('svg').hasClass(styles.svg)).to.equal(true);
  });
});
