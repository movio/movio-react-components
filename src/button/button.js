import React, { Component, PropTypes } from 'react';

/**
 * Button for all your pressing needs
 */
class Button extends Component {

  static propTypes = {
    /**
     * css class name
     */
    className: PropTypes.string,
    /**
     * used it it's a route
     */
    handleRoute: PropTypes.func,
    /**
     * destination if not a route
     */
    href: PropTypes.string,
    /**
     * handle click
     */
    onClick: PropTypes.func,
    /**
     * ???
     */
    children: PropTypes.node.isRequired,
  };

  render() {
    const className = this.props.className ? this.props.className : styles.button;

    // Render an anchor tag
    const anchor = (
      <a className={className} href={this.props.href} onClick={this.props.onClick}>{this.props.children}</a>
    );

    // If the Button has a handleRoute prop, we want to render a button
    const buttonElement = (
      <button className={className} onClick={this.props.handleRoute} >{this.props.children}</button>
    );

    const button = this.props.handleRoute ? anchor : buttonElement;

    return (
      <div className={styles.buttonWrapper}>
        {button}
      </div>
    );
  }
}

export default Button;
