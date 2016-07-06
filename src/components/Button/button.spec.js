import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Button, { styles } from './index';

const noop = () => {};

describe('<Button />', () => {
  it('should correctly render children, when text', () => {
    const wrapper = shallow(<Button onClick={noop}>This is a button</Button>);
    expect(wrapper.text()).to.equal('This is a button');
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<Button className="test-class" onClick={noop}>Movio Button</Button>);
    expect(wrapper.prop('className')).to.equal(`test-class ${styles.button}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<Button onClick={noop}>Movio Button</Button>);
    expect(wrapper.prop('className')).to.equal(styles.button);
  });

  it('should add a disabled class to the button, if disabled', () => {
    const wrapper = shallow(<Button onClick={noop} disabled={true}>Disabled Button</Button>);
    expect(wrapper.prop('className')).to.equal(`${styles.button} ${styles.disabled}`);
  });

  it('should add an onClick handler to the button', () => {
    const wrapper = shallow(<Button onClick={noop}>Button</Button>);
    expect(wrapper.prop('onClick')).to.equal(noop);
  });

  it('should trigger a click when onClick is fired', () => {
    const btnSpy = spy();
    const wrapper = shallow(<Button onClick={btnSpy}>Button</Button>);
    wrapper.find('button').simulate('click');
    expect(btnSpy.calledOnce).to.equal(true);
  });
});
