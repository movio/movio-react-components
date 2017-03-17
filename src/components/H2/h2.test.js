import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import H2, { styles } from './index';

describe('<H2 />', () => {
  it('should correctly render children, when text', () => {
    const wrapper = shallow(<H2>Title</H2>);
    expect(wrapper.text()).to.equal('Title');
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<H2 className="test-class">Title H2</H2>);
    expect(wrapper.prop('className')).to.equal(`test-class ${styles.h2}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<H2>Title H2</H2>);
    expect(wrapper.prop('className')).to.equal(styles.h2);
  });
});
