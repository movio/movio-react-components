import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import TextInput, { styles } from './index';

const noop = () => {};

describe('<TextInput />', () => {
  it('should render one <input> element', () => {
    const wrapper = shallow(<TextInput name="sample-input" onChange={noop} />);
    expect(wrapper.find('input').length).to.equal(1);
  });

  it('should optionally render a <label> element, if provided', () => {
    const wrapper = shallow(<TextInput name="sample-input" onChange={noop} label="Label" />);
    expect(wrapper.find('label').length).to.equal(1);
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<TextInput name="sample-input" className="test-class" onChange={noop} />);
    expect(wrapper.find('input').prop('className')).to.equal(`test-class ${styles.input}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<TextInput name="sample-input" onChange={noop} />);
    expect(wrapper.find('input').prop('className')).to.equal(styles.input);
  });

  it('should execute input prop onChange when the input value changes', () => {
    const fn = v => v;
    const spiedFn = spy(fn);
    const synthEv = { target: { value: 'a' } };
    const wrapper = shallow(<TextInput name="sample-input" onChange={spiedFn} />);
    expect(spiedFn.callCount).to.equal(0);
    wrapper.find('input').simulate('change', synthEv);
    expect(spiedFn.calledOnce).to.be.true;
    expect(spiedFn.firstCall.calledWith('a', synthEv));
  });
});
