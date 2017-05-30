import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import styles from './textInput.css';

class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
    };
  }

  static propTypes = {
    inputType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
  };

  static defaultProps = {
    inputType: 'text',
    placeholder: '...',
    disabled: false,
    className: null,
    containerClassName: null,
    labelClassName: null,
    label: null,
  };

  handleChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;
    onChange(value, event);
    this.setState({
      value: event.target.value,
    });
  };

  renderLabel = (label, inputId) => {
    const { labelClassName } = this.props;
    const labelClassList = classnames(labelClassName, styles.label);
    return <label className={labelClassList} htmlFor={inputId}>{label}</label>;
  };

  render() {
    const {
      label,
      inputType,
      placeholder,
      className,
      containerClassName,
      disabled,
      name,
    } = this.props;
    const { value } = this.state;
    const classList = classnames(className, styles.input);
    const containerClassList = classnames(containerClassName, styles.container);

    return (
      <fieldset className={containerClassList}>
        {label && this.renderLabel(label, name)}
        <input
          id={name}
          className={classList}
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
