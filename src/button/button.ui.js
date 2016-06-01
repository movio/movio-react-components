import React from 'react';

import button from './button';

describe('button', function () {
  this.header(`
## Button

* Does cool stuff
* Oh yeah it does
`);

  before(() => {
    this.load(<button className="start">Click Me</button>);
  });

  it('change className', () => this.props({ className: 'changed' }));
});
