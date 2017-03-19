import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button, { styles } from './index';

const noop = () => {};

describe('<Button />', () => {
  it('should correctly render children, when text', () => {
    const component = <Button onClick={noop}>This is a button</Button>;
    const wrapper = shallow(component);
    expect(wrapper.text()).toEqual('This is a button');
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('button-children-text');
  });

  it('should append a className to the default, if provided', () => {
    const component = <Button className="test-class" onClick={noop}>Movio Button</Button>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`test-class ${styles.button}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('button-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <Button onClick={noop}>Movio Button</Button>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(styles.button);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('button-default-classname');
  });

  it('should add a disabled class to the button, if disabled', () => {
    const component = <Button onClick={noop} disabled={true}>Disabled Button</Button>;
    const wrapper = shallow(component);
    expect(wrapper.prop('className')).toEqual(`${styles.button} ${styles.disabled}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('button-disabled');
  });

  it('should add an onClick handler to the button', () => {
    const wrapper = shallow(<Button onClick={noop}>Button</Button>);
    expect(wrapper.prop('onClick')).toEqual(noop);
  });

  it('should trigger a click when onClick is fired', () => {
    const btnSpy = jest.fn();
    const wrapper = shallow(<Button onClick={btnSpy}>Button</Button>);
    wrapper.find('button').simulate('click');
    expect(btnSpy.mock.calls).toHaveLength(1);
  });
});
