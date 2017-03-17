import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import H1, { styles } from './index';

describe('<H1 />', () => {
  it('should correctly render children, when text', () => {
    const wrapper = shallow(<H1>Title</H1>);
    expect(wrapper.text()).to.equal('Title');
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<H1 className="test-class">Title H1</H1>);
    expect(wrapper.prop('className')).to.equal(`test-class ${styles.h1}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<H1>Title H1</H1>);
    expect(wrapper.prop('className')).to.equal(styles.h1);
  });
});
