
[![Build Status](https://travis-ci.org/movio/movio-react-components.svg?branch=master)](https://travis-ci.org/movio/movio-react-components)

# Movio React Components
Component library for Movio Components built on [carte-blanche](https://github.com/carteb/carte-blanche).

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

## Documentation
Documentation for the components can be generated and viewed using:

```bash
# Generate docs
$ npm run docs

# Serve docs (at http://localhost:8081)
$ npm run serve:docs
```

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
