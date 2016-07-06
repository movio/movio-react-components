import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import P, { styles } from './index';

describe('<P />', () => {
  it('should correctly render children, when text', () => {
    const wrapper = shallow(<P>This is a sample paragraph. It has some level of text. There is a lot of it.</P>);
    expect(wrapper.text()).to.equal('This is a sample paragraph. It has some level of text. There is a lot of it.');
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(
      <P className="test-class">This is a sample paragraph. It has some level of text. There is a lot of it.</P>
    );
    expect(wrapper.prop('className')).to.equal(`test-class ${styles.p}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<P>This is a sample paragraph. It has some level of text. There is a lot of it.</P>);
    expect(wrapper.prop('className')).to.equal(styles.p);
  });
});

