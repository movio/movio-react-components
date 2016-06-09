import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';
import styles from './button.css';
import { expect } from 'chai';

const noop = () => {};

describe('<Button />', () => {
  it('should correctly render children, when text', () => {
    const wrapper = shallow(<Button onClick={noop}>This is a button</Button>);
    expect(wrapper.text()).to.equal('This is a button');
  });

  it('should append a className to the default, if provided', () => {
    const wrapper = shallow(<Button className="test-class" onClick={noop}>Movio Button</Button>);
    expect(wrapper.childAt(0).prop('className')).to.equal(`test-class ${styles.button}`);
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const wrapper = shallow(<Button onClick={noop}>Movio Button</Button>);
    expect(wrapper.childAt(0).prop('className')).to.equal(styles.button);
  });

  it('shoud add an onClick handler to the button', () => {
    const wrapper = shallow(<Button onClick={noop}>Button</Button>);
    expect(wrapper.childAt(0).prop('onClick')).to.equal(noop);
  });
});
