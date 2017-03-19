import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TextInput, { styles } from './index';

const noop = () => {};

describe('<TextInput />', () => {
  it('should render one <input> element', () => {
    const component = <TextInput name="sample-input" onChange={noop} />;
    const wrapper = shallow(component);
    expect(wrapper.find('input')).toHaveLength(1);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('text-input-basic');
  });

  it('should optionally render a <label> element, if provided', () => {
    const component = <TextInput name="sample-input" onChange={noop} label="Label" />;
    const wrapper = shallow(component);
    expect(wrapper.find('label')).toHaveLength(1);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('text-input-label');
  });

  it('should append a className to the default, if provided', () => {
    const component = <TextInput name="sample-input" className="test-class" onChange={noop} />;
    const wrapper = shallow(component);
    expect(wrapper.find('input').prop('className')).toEqual(`test-class ${styles.input}`);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('text-input-custom-classname');
  });

  it('should use the default className from the stylesheet, if not provided', () => {
    const component = <TextInput name="sample-input" onChange={noop} />;
    const wrapper = shallow(component);
    expect(wrapper.find('input').prop('className')).toEqual(styles.input);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot('text-input-default-classname');
  });

  it('should execute input prop onChange when the input value changes', () => {
    const spy = jest.fn(v => v);
    const synthEv = { target: { value: 'a' } };
    const component = <TextInput name="sample-input" onChange={spy} />;
    const wrapper = shallow(component);
    expect(spy.mock.calls).toHaveLength(0);
    wrapper.find('input').simulate('change', synthEv);
    expect(spy.mock.calls).toHaveLength(1);
    expect(spy.mock.calls[0]).toEqual(['a', synthEv]);
  });
});
