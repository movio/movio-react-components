// @flow
import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './textInput.css';

type Props = {
  inputType: string,
  name: string,
  onChange: (value: string, event: SyntheticInputEvent) => void,
  placeholder: string,
  className: string,
  disabled: boolean,
  label?: string,
};

type State = {
  value: string,
};

class TextInput extends Component {
  props: Props;
  state: State;

  constructor(props: Props, context: *) {
    super(props, context);
    this.state = {
      value: '',
    };
  }

  static defaultProps = {
    inputType: 'text',
    placeholder: '...',
    disabled: false,
    className: '',
  };

  handleChange = (event: SyntheticInputEvent) => {
    const { onChange } = this.props;
    const value = event.target.value;
    onChange(value, event);
    this.setState({
      value: event.target.value,
    });
  };

  renderLabel = (label: string, name: string) => (
    <label className={styles.label} htmlFor={name}>{label}</label>
  );

  render() {
    const {
      label,
      inputType,
      placeholder,
      className,
      disabled,
      name,
    } = this.props;
    const { value } = this.state;
    const classList = classnames({
      [className]: className && !disabled,
      [styles.container]: true,
    });

    return (
      <fieldset className={classList}>
        {label && this.renderLabel(label, name)}
        <input
          id={name}
          className={styles.input}
          type={inputType}
          placeholder={placeholder}
          onChange={e => this.handleChange(e)}
          value={value}
          disabled={disabled}
        />
      </fieldset>
    );
  }
}

export default TextInput;
export { styles };
