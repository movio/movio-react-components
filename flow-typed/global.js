// @flow
// Put global manual declarations here

// For hot module loading - configureStore
declare var module: {
  hot: {
    accept(path: ?string, cb: () => void): void,
  },
};

// React helper types
type ReactChildren = React$Element<*> | string;
