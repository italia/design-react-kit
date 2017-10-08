
[![Build Status](https://travis-ci.org/Roma-JS/design-react.png?branch=master)](https://travis-ci.org/Roma-JS/design-react)

# design-react
A React toolkit that implements the Italia design system

An easy-to-use showcase tool called Storybook is available to browse the library and view the components in action.


### Requirements


* NodeJS & npm installed


## Getting started

Just clone the repo and run `npm install` to install dependencies and `npm run storybook` to run the server.

The Storybook is then available at http://localhost:8010

![storybook](/doc/storybook.png?raw=true)

A public version of Storybook is available [here](https://roma-js.github.io/design-react).

## How to create a new component

This section will guide you to the creation of a new component in the repository.
All the components live in the components folder: each component has its own folder with all the content it needs to work, the test files and the storybook story to publish.
As example the Button component lives in the components/Button folder and structure is the following:

```
components
    └── Button
        ├── Button.js
        └── Button.story.js
```

Some basic rules to follow when structuring the component:

* The components use a static CSS file imported in the main root.
    * The CSS file comes from the `design-web-toolkit` repository and it has been built from there
* The JS file for the component uses the JSX syntax.
    * Some components use some jQuery plugins.
* The .story.js file should only contains content related to that component.


Once created a new component and started Storybook check that the new component has been added properly and it renders as it should.


### Storybook

Storybook has been enriched with few addons to make the debug experience easier: if any validation or runtime errors are met the error will be printed in the page console.
In the component page it is also possible to access directly to the source code of the page, making Storybook a source of documentation.


## Publishing


### Storybook

There's a command to build a static version of the Storybook catalog so that it can be deployed anywere without any need of a webserver.

```sh
$ npm run build-storybook
```

The static pages of the building process are stored in the `out` folder.

#### known issues (open pull requests)

  - [Show JSX if PropVal is a React element](https://github.com/storybooks/storybook/pull/1455)
  - [Fixed prop type validation errors in info addon](https://github.com/storybooks/storybook/pull/1374)

### Module

To use the React UIKit as module in the app you can install it directly from npm:

```sh
$ npm install <package-name>
```

Then start to use the components in your app:

```jsx
import React from 'react';
import {Button, Nav, Alert} from '<package-name>';

// If you want to handle the css with webpack uncomment this line
// import '<package-name>/lib/index.css';

...
```

You can find an example of this [in this repository](https://github.com/Roma-JS/design-react-demo).
#### Preprocessors

If you're using preprocessors as SASS or Less you can import the CSS directly into your `main` file:

```scss
@import '<package-name>/lib/index.css;
```

## Continuous Integration

There's a TravisCI instance configured to run on this repository every time the `master` branch is updated. Currently only the Storybook build is deployed to the `gh-pages` branch and it is publicly visible at `https://<user>.github.io/design-react` - you need to configure Travis for your repo.

