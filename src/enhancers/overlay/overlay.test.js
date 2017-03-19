import React from 'react';
import { mount } from 'enzyme';

import enhanceOverlay from './index.js';

const baseComponent = ({ ...props }) => <div {...props}>Component</div>;
const Tooltip = <div>Tooltip</div>;

const elLookup = selector => document.querySelectorAll(selector);

describe('enhanceOverlay', () => {
  let EnhancedComponent;
  let wrapper;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    wrapper = null;
    EnhancedComponent = null;
  });

  beforeEach(() => {
    EnhancedComponent = enhanceOverlay(baseComponent);
  });

  afterEach(() => {
    if (wrapper && wrapper.unmount) {
      wrapper.unmount();
    }
    jest.clearAllTimers();
  });

  it('should return a function', () => {
    expect(EnhancedComponent).toBeInstanceOf(Function);
  });

  it('should set up default props on the enhanced component, if not provided', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    expect(wrapper.props().delay).toEqual(0);
    expect(wrapper.props().display).toEqual(false);
    expect(wrapper.props().placement).toEqual('bottom');
    expect(wrapper.props().trigger).toEqual('click');
  });

  it('should render children', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(elLookup('.tether-element').length).toEqual(0);
    wrapper.setState({ display: true });
    expect(elLookup('.tether-element').length).toEqual(1);
  });

  it('should create a tether element when triggered', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    expect(elLookup('.tether-element').length).toEqual(0);
    wrapper.setState({ display: true });
    expect(elLookup('.tether-element').length).toEqual(1);
  });

  it('should set display state when it receives a new display prop', () => {
    wrapper = mount(<EnhancedComponent overlay={Tooltip}>EnhancedComponent</EnhancedComponent>);
    wrapper.setProps({ display: true });
    expect(wrapper.state().display).toEqual(true);
    wrapper.setProps({ display: false });
    expect(wrapper.state().display).toEqual(false);
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
    expect(wrapper.state().display).toEqual(false);
    jest.runTimersToTime(1001);
    expect(wrapper.state().display).toEqual(true);
  });
});
