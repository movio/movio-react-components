import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import Scaffolding from 'Layouts/Scaffolding';

import './styles/global.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Scaffolding);

if (module.hot) {
  module.hot.accept('Layouts/Scaffolding', () => {
    render(Scaffolding);
  });
}

