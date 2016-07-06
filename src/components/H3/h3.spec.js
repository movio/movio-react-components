import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import H3, { styles } from './index';

describe('<H3 />', () => {
  it('should correctly render children, when text', () => {
    const wrapper = shallow(<H3>Title</H3>);
    expect(wrapper.text()).to.equal('Title');
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<H3 className="test-class">Title H3</H3>);
    expect(wrapper.prop('className')).to.equal(`test-class ${styles.h3}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<H3>Title H3</H3>);
    expect(wrapper.prop('className')).to.equal(styles.h3);
  });
});
