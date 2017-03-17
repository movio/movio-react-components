import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tooltip, { styles } from './index';

describe('<Tooltip />', () => {
  it('should correctly render children, when text', () => {
    const wrapper = shallow(<Tooltip>Title</Tooltip>);
    expect(wrapper.text()).to.equal('Title');
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<Tooltip className="test-class">Title Tooltip</Tooltip>);
    expect(wrapper.prop('className')).to.equal(`test-class ${styles.container}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<Tooltip>Title Tooltip</Tooltip>);
    expect(wrapper.prop('className')).to.equal(styles.container);
  });
});

