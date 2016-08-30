
[![Build Status](https://travis-ci.org/movio/movio-react-components.svg?branch=master)](https://travis-ci.org/movio/movio-react-components)

# Movio React Components
React Component library for Movio Components.

## Get Started
Install project dependencies and start local server:
```bash
$ npm install
$ npm start
```
View at [http://localhost:8080](http://localhost:8080)

### Generating component scaffolding
Generates basic scaffolding for a new component
```bash
$ ./bin/generate ComponentName
```

### Script list

Script | Description
--- | ---
`start` | Starts the Webpack dev server, available at [http://localhost:8080](http://localhost:8080)
`test` | Starts Karma for single run test (uses PhantomJS) *not for CI*
`test:ci` | Starts Karma for single run test (uses PhantomJS) *for CI*
`test:watch` | Starts Karma with watch
`lint` | Runs ESLint *not for CI*
`lint:ci` | Runs ESLint *for CI*
`format` | Fixes linting issues (where applicable)
`lint:style` | Runs Stylelint *not for CI*
`lint:style:ci` | Runs Stylelint *for CI*
`check` | Runs tests and linters *for CI*
`docs` | Generates component documentation
`serve:docs` | Serves the documentation at [http://localhost:8081](http://localhost:8081)
`serve:coverage` | Serves the coverage report at [http://localhost:8082](http://localhost:8082)

## Tests
Run unit tests using:
```bash
# Single run
$ npm test

# Auto watch
$ npm run test:watch
```
Coverage reports are available using:
```bash
# Served at http://localhost:8082
$ npm run serve:coverage
```
