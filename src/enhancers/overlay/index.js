// @flow
import React, { Component, cloneElement } from 'react';
import TetherComponent from 'react-tether';
import { uniqueId, get } from 'lodash';

const tracker = new WeakMap();

const TETHER_PLACEMENTS = {
  top: 'bottom center',
  bottom: 'top center',
  left: 'middle right',
  right: 'middle left',
};

type OverlayEventHandler = (args?: any) => mixed;

type Trigger = 'hover' | 'click';
type Placement = 'top' | 'bottom' | 'left' | 'right';

type Props = {
  children: React$Element<*>,
  delay: ?number,
  display: ?boolean,
  overlay: React$Element<*>,
  trigger: Trigger,
  onEntered: OverlayEventHandler,
  onExited: OverlayEventHandler,
  onClick: OverlayEventHandler,
  onMouseOver: OverlayEventHandler,
  onMouseOut: OverlayEventHandler,
  placement: Placement,
};

const enhanceOverlay = (ComposedComponent: ReactClass<*>): ReactClass<*> =>
  class EnhancedOverlay extends Component {
    props: Props;

    static defaultProps = {
      display: false,
      placement: 'bottom',
      trigger: 'click',
      delay: 0,
      onEntered: null,
      onExited: null,
      onClick: null,
      onMouseOver: null,
      onMouseOut: null,
    };

    constructor(props: Props, context) {
      super(props, context);
      tracker.set(this, { timeoutId: 0 });
      this.state = {
        display: props.display,
      };
    }

    componentWillReceiveProps({ display }) {
      if (display !== this.props.display) {
        this.handleDisplay(display);
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.display !== this.state.display) {
        const { onEntered, onExited } = this.props;
        const cb = this.state.display ? onEntered : onExited;
        if (cb) cb();
      }
    }

    createTrackerTimeout = (_display, _delay) =>
      setTimeout(() => {
        this.setState({ display: _display });
      }, _delay);

    clearTrackerTimout = (_tracker: WeakMap<*, *>) => {
      const getOverlayTracker = _tracker.get(this);
      if (getOverlayTracker) {
        clearTimeout(getOverlayTracker.timeoutId);
      }
    };

    componentWillUnmount() {
      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }
      this.clearTrackerTimout(tracker);
    }

    handleDisplay = display => {
      this.clearTrackerTimout(tracker);

      if (display === this.state.display) return;

      const { delay } = this.props;
      if (delay) {
        tracker.set(this, {
          timeoutId: this.createTrackerTimeout(display, delay),
        });
      } else {
        this.setState({ display });
      }
    };

    show = () => {
      this.handleDisplay(true);
    };

    hide = () => {
      this.handleDisplay(false);
    };

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

    renderOverlayOrNull = (display, overlay) => (display ? overlay : null);

    render() {
      const {
        overlay,
        trigger,
        placement,
        children,
        onClick,
        onMouseOver,
        onMouseOut,
      } = this.props;
      const { display } = this.state;

      const overlayId: string = get(
        overlay,
        'props.id',
        uniqueId('movio_rc_overlay')
      );
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
        <TetherComponent {...tetherProps}>
          <ComposedComponent {...extendedProps} />
          {this.renderOverlayOrNull(display, extendedOverlay)}
        </TetherComponent>
      );
    }
  };

export default enhanceOverlay;
