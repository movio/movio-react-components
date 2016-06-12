import React, { PropTypes } from 'react';

import styles from './button.css';

/**
 * Button for all your pressing needs
 */

/**
 * Button Component
 * @class
 * @version 0.1
 */
const Button = (props) => {
  const className = props.className ? `${props.className} ${styles.button}` : styles.button;

  return (
    <div className={styles.buttonWrapper}>
      <button className={className} onClick={props.onClick} >{props.children}</button>
    </div>
  );
};

/**
 * @property {object}     propTypes              - Button PropTypes
 * @property {string}     propTypes.className    - Input class name for the button, defaults to styles.button
 * @property {function}   propTypes.onClick      - On Click handler
 * @property {node}       propTypes.children     - Child node(s)
 */
Button.propTypes = {
  /**
   * css class name
   */
  className: PropTypes.string,
  /**
   * handle click
   */
  onClick: PropTypes.func.isRequired,
  /**
   * child node(s)
   */
  children: PropTypes.node.isRequired,
};

export default Button;

export {
  styles,
};
