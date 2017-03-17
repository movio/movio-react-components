import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Code, { styles } from './index';

describe('<Code />', () => {
  it('should render a <code> block as the only child', () => {
    const wrapper = shallow(<Code code="const a = (b) => b + 1;" />);
    expect(wrapper.children()).to.have.length(1);
    expect(wrapper.find('code')).to.have.length(1);
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<Code className="test-class" code="const a = (b) => b + 1;" />);
    expect(wrapper.prop('className')).to.equal(`test-class ${styles.container}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<Code code="const a = (b) => b + 1;" />);
    expect(wrapper.prop('className')).to.equal(styles.container);
  });

  it('should correctly render code block', () => {
    const wrapper = shallow(<Code code="const a = (b) => b + 1;" />);
    expect(wrapper.find('code').text()).to.equal('const a = (b) => b + 1;');
  });
});

