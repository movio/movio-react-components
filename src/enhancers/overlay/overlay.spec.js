import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { useFakeTimers } from 'sinon';

import enhanceOverlay from './index.js';

const baseComponent = ({ ...props }) => <div {...props}>Component</div>;
const Tooltip = <div>Tooltip</div>;

const elLookup = selector => document.querySelectorAll(selector);

describe('enhanceOverlay', () => {
  let EnhancedComponent;
  let clock;
  let wrapper;

  before(() => {
    clock = useFakeTimers();
  });

  after(() => {
    clock.restore();
  });

  beforeEach(() => {
    EnhancedComponent = enhanceOverlay(baseComponent);
  });

  afterEach(() => {
    if (wrapper && wrapper.unmount) {
      wrapper.unmount();
    }
  });

  it('should return a function', () => {
    expect(EnhancedComponent).to.be.a('function');
  });

  it('should set up default props on the enhanced component, if not provided', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    expect(wrapper.props().delay).to.equal(0);
    expect(wrapper.props().display).to.equal(false);
    expect(wrapper.props().placement).to.equal('bottom');
    expect(wrapper.props().trigger).to.equal('click');
  });

  it('should render children', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    expect(wrapper.find('div')).to.have.length(1);
    expect(elLookup('.tether-element').length).to.equal(0);
    wrapper.setState({ display: true });
    expect(elLookup('.tether-element').length).to.equal(1);
  });

  it('should create a tether element when triggered', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    expect(elLookup('.tether-element').length).to.equal(0);
    wrapper.setState({ display: true });
    expect(elLookup('.tether-element').length).to.equal(1);
  });

  it('should set display state when it receives a new display prop', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    wrapper.setProps({ display: true });
    expect(wrapper.state().display).to.equal(true);
    wrapper.setProps({ display: false });
    expect(wrapper.state().display).to.equal(false);
  });

  it('should correctly delay displaying if "delay" is set', () => {
    wrapper = mount(
      <EnhancedComponent
        overlay={Tooltip}
        delay={1000}
      >
        EnhancedComponent
      </EnhancedComponent>
    );
    wrapper.setProps({ display: true });
    expect(wrapper.state().display).to.equal(false);
    clock.tick(1001);
    expect(wrapper.state().display).to.equal(true);
  });
});
