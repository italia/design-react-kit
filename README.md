[![Build Status](https://travis-ci.org/italia/design-react.svg?branch=master)](https://travis-ci.org/italia/design-react)
[![Build Status](https://circleci.com/gh/italia/design-react.svg?branch=master)](https://circleci.com/gh/italia/design-react)
[![Join the #design-devel channel](https://img.shields.io/badge/Slack%20channel-%23design--js-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)


# design-react
A React toolkit that implements `Bootstrap Italia`

An easy-to-use showcase tool called Storybook is available to browse the library and view the components in action.


### Requirements


* NodeJS & npm installed


## Getting started

Just clone the repo and run `npm install` to install dependencies and `npm run storybook` to run the server.

The Storybook is then available at http://localhost:6006

![storybook](/doc/storybook.png?raw=true)

A public version of Storybook is available [here](https://italia.github.io/design-react).

## How to create a new component

This section will guide you to the creation of a new component in the repository.
All the components live in the `components` folder: each component has its own folder with all the content it needs to work, the test files and the storybook story to publish.
As example the `Button` component lives in the `src/components/Button` folder and structure is the following:

```

src
    └── components
            └── Button
                ├── Button.js
                └── Button.stories.js
```

Some basic rules to follow when structuring the component:

* The JS file for the component uses the JSX syntax.
* The `.stories.js` file should only contains content related to that component.


Once created a new component and started Storybook check that the new component has been added properly and it renders as it should.


### Storybook

Storybook has been enriched with few addons to make the debug experience easier: if any validation or runtime errors are met the error will be printed in the page console.
In the component page it is also possible to access directly to the source code of the page, making Storybook a source of documentation.


## Publishing


### Storybook

There's a command to build a static version of the Storybook catalog so that it can be deployed anywere without any need of a webserver.

```sh
$ npm run storybook:build
```

The static pages of the building process are stored in the `storybook-static` folder.

#### known issues (open pull requests)

- 

### Module

To use the React Design Kit as module in the app you can install it directly from npm:

```sh
$ npm install design-react
```

Then start to use the components in your app:

```jsx
import React from 'react';
import { Button, Nav, Alert } from 'design-react';

// If you want to handle the CSS with your bundler uncomment this line
// import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
// import "bootstrap-italia/dist/css/italia-icon-font.css";

...
```

#### Preprocessors

If you're using preprocessors as SASS or Less you can import the CSS directly into your `main` file:

```scss
@import "bootstrap-italia/src/scss/bootstrap-italia.scss";
```

## Continuous Integration

There's a CircleCI instance configured to run on this repository every time the `master` branch is updated. 
Currently only the Storybook build is deployed to the `gh-pages` branch and it is publicly visible at `https://italia.github.io/design-react`.
