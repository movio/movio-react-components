import React, { PropTypes, Component, cloneElement } from 'react';
import TetherComponent from 'react-tether';
import { uniqueId } from 'lodash';

const tracker = new WeakMap();

const TETHER_PLACEMENTS = {
  top: 'bottom center',
  bottom: 'top center',
  left: 'middle right',
  right: 'middle left',
};

const enhanceOverlay = ComposedComponent => class EnhancedOverlay extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number,
    display: PropTypes.bool,
    overlay: PropTypes.element,
    trigger: PropTypes.oneOf(['hover', 'click']),
    onEntered: PropTypes.func,
    onExited: PropTypes.func,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  };

  static defaultProps = {
    display: false,
    placement: 'bottom',
    trigger: 'click',
    delay: 0,
  };

  constructor(props, context) {
    super(props, context);
    tracker.set(this, { timeoutId: 0 });
    this.state = {
      display: props.display,
    };
  }

  componentWillReceiveProps({ display }) {
    if (display !== this.props.display) this.handleDisplay(display);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.display !== this.state.display) {
      const { onEntered, onExited } = this.props;
      const cb = this.state.display ? onEntered : onExited;
      if (cb) cb();
    }
  }

  createTrackerTimeout = (_display, _delay) => setTimeout(() => { this.setState({ display: _display }); }, _delay);

  clearTrackerTimout = _tracker => clearTimeout(_tracker.get(this).timeoutId);

  componentWillUnmount() {
    if (super.componentWillUnmount) super.componentWillUnmount();
    this.clearTrackerTimout(tracker);
  }

  handleDisplay = display => {
    this.clearTrackerTimout(tracker);

    if (display === this.state.display) return;

    const { delay } = this.props;
    if (delay) {
      tracker.set(this, { timeoutId: this.createTrackerTimeout(display, delay) });
    } else {
      this.setState({ display });
    }
  };

  show = () => {
    this.handleDisplay(true);
  }

  hide = () => {
    this.handleDisplay(false);
  }

  toggleHide = eventType => (...args) => {
    this.hide();
    const cb = this.props[eventType];
    if (cb) cb(...args);
  };

  toggleShow = eventType => (...args) => {
    this.show();
    const cb = this.props[eventType];
    if (cb) cb(...args);
  };

  toggleDisplay = (...args) => {
    this.state.display ? this.hide() : this.show();
    const cb = this.props.onClick;
    if (cb) cb(...args);
  };

  renderOverlayOrNull = (display, overlay) => display ? overlay : null;

  render() {
    const { overlay,
            trigger,
            placement,
            children,
            onClick,
            onMouseOver,
            onMouseOut,
          } = this.props;
    const { display } = this.state;

    const overlayId = overlay.props.id || uniqueId('movio_rc_overlay');
    const extendedOverlay = cloneElement(overlay, { id: overlayId });

    const eventHandlers = {
      hover: {
        onMouseOver: this.toggleShow('onMouseOver'),
        onMouseOut: this.toggleHide('onMouseOut'),
      },
      click: {
        onClick: this.toggleDisplay,
      },
    }[trigger];

    const tetherProps = { attachment: TETHER_PLACEMENTS[placement] };

    const extendedProps = {
      children,
      onClick,
      onMouseOver,
      onMouseOut,
      ...eventHandlers,
    };

    return (
      <TetherComponent
        {...tetherProps}
      >
        <ComposedComponent {...extendedProps} />
        {this.renderOverlayOrNull(display, extendedOverlay)}
      </TetherComponent>
    );
  }
};

export default enhanceOverlay;
