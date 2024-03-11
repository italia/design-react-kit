<h1 align="center">Design React Kit</h1>

<p align="center">
  <img src=".github/react-logo.png" alt="react-logo" width="120px" height="auto"/>
  <br>
  <i>Design React Kit is a toolkit based on Bootstrap Italia 
    <br> to build React web application.</i>
  <br>
</p>

<p align="center">
  <a href="https://italia.github.io/design-react-kit"><strong>italia.github.io/design-react-kit</strong></a>
  <br>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/design-react-kit"><img src="https://img.shields.io/npm/v/design-react-kit/unstable.svg" alt="NPM"></a>
    <a href="https://github.com/italia/design-react-kit/actions"><img src="https://github.com/italia/design-react-kit/actions/workflows/ci.yml/badge.svg" alt="Build"></a>
    <a href="https://codecov.io/gh/italia/design-react-kit"><img src="https://codecov.io/gh/italia/design-react-kit/branch/main/graph/badge.svg?token=0Ud6YSFi0r" alt="codecov"></a>
    <a href="https://github.com/italia/design-react-kit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/italia/design-react-kit.svg" alt="License"></a>
    <a href="https://github.com/italia/design-react-kit/issues"><img src="https://img.shields.io/github/issues/italia/design-react-kit.svg" alt="GitHub issues"></a>
</p>

<p align="center">
  <a href="https://developersitalia.slack.com/messages/C04J92F9XM2/">
    <img src="https://img.shields.io/badge/Slack%20channel-%23design--dev--react-blue.svg" alt="Join the #design-system-react channel" />
  </a>
  <a href="https://slack.developers.italia.it/">
    <img src="https://slack.developers.italia.it/badge.svg" alt="Get invited" />
  </a>
</p>

_Read this in other languages: [Italiano](README.md)._

_⚠️ Warning: this code is still under development and is not ready to be used! We are working on the update to bring the kit to version 5.0.0, comments and contributions from the entire community are more than welcome!_

_⚠️ Warning: This kit was designed to work with Bootstrap Italia version 2.x. The kit for version 1.x of Bootstrap Italia has been deprecated and is located on the [4.x] branch (https://github.com/italia/design-react-kit/tree/4.x)._

## Intro

**Design React kit** is a set of React components that implements [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) and [Design UI Kit](https://github.com/italia/design-ui-kit) styling.
Components are showcased with [Storybook](https://storybook.js.org/).
Public version of Storybook is available [here](https://italia.github.io/design-react-kit) for the latest stable release, while [here](https://design-react-kit.vercel.app/) for the current development version built from `main` branch.
To play with the library, the [Playground React Kit](https://github.com/italia/design-react-kit-playground) is available.

## Table of contents

- [Usage](#usage)
- [How to contribute](#how-to-contribute-)
- [How to contribute with your own code](#how-to-contribute-with-your-own-code)
- [How to create new components](#how-to-create-new-components)
- [Useful links](#useful-links)

## Usage

To use Design React as a dependency in your React project you can install it from [npm](https://www.npmjs.com/~italia). We suggest to use `create-react-app` to create a new React webapp from scratch as follows:

```sh
create-react-app nome-app
cd nome-app
yarn add design-react-kit@unstable --save
```

## Add bootstrap-italia and fonts

The `design-react-kit` module does not include the CSS and font files in the bundle, so this needs to be installed as well:

```sh
yarn add bootstrap-italia typeface-lora typeface-roboto-mono typeface-titillium-web --save
```

## App.js

Then, you just need to import CSS e font editing `./src/App.js` as shown:

```jsx
import React from 'react';
import './App.css';
import { Alert } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

const App = () => {
  return <Alert>This is an Alert</Alert>;
};

export default App;
```

#### Loading Fonts

The Bootstrap Italia theme defines a specific set of font typefaces to work: `titillium-web`, `roboto-mono` and `lora`. The loading of this set of fonts can be left to the browser or controlled: in this last case it is necessary to use the `FontLoader` component exported by the library.
Declaring the `FontLoader` on top of the Application tree it is enough to trigger the loading of the fonts.

As alternative it is required to manually manage the loading via the `webfontloader` package:

```js
const WebFont = require('webfontloader');
WebFont.load({
  custom: {
    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
  }
});
```

### Peer dependencies

The library does not include `react` and `react-dom`, avoiding versions clashing and increasing the size of the bundle.
For this reason, for local development it will be necessary to manually install dependencies.

The command to be executed is

```sh
yarn install --peers
```

or alternatively manually

```sh
yarn install react react-dom
```

## How to contribute 💙

👉🏻 You can contribute to the library in various ways:

- With your own code, taking charge of an issue among those open and not already assigned among [the issues](https://github.com/italia/design-react-kit/issues) of React Kit (even a comment on the issue to notify the desire to take charge).
- By reporting bugs or improvements to the React Kit [official repository](https://github.com/italia/design-react-kit/).
- By writing to us on the [dedicated channel](https://developersitalia.slack.com/messages/C04J92F9XM2/) of Slack.

## How to contribute with your own code

The minimum requirements of your local environment should be:

- NodeJS (>= 18)
- Yarn

Clone the repo and run `yarn` to install the dependencies.
Then run the `yarn storybook:serve` command to start the development server.

Storybook will therefore be available at http://localhost:9001/

Public version of the Storybook is available [here](https://italia.github.io/design-react-kit).

Storybook has been enriched with some `addons` that make it more talented. Check dependencies on the `package.json` file for details.

## How to create new components

This section explains how to create new components in the repository.
All components reside in the `src` directory: each component is a folder with all that is needed to make it work.
_Storybook_ stories are instead under `stories`.  
Unit tests are under the `test` folder.

i.e. the `Button` component is shown below the `src/Button` path and its structure is as follows:

```
src
    └── Button
        ├── Button.tsx
stories
    └── Button
        ├── Button.stories.mdx
        ├── Button.stories.tsx
test
    ├── Button.test.tsx
```

Some basic rules for structuring the components:

- TSX file component files use JSX syntax.
- The `.stories.tsx` files only contains examples relative to component.
- The `.stories.mdx` files only contains documentation relative to component.
- The `.test.tsx` files only contains tests relative to component.

Once you have created a new component, with its history, starting _Storybook_ will be able to check that everything works as it should.

#### Snapshot tests

The testing system has been provided with a snapshot check on existing stories: this means that each story content is copied into a special file used as reference to check changes in the future. This might fail some test checks on the PR in case of new or changed stories.  
In such case it is possible to update the snapshot file with the following command:

```sh
yarn test -u
```

At this point create a new commit and update the PR. Make sure to check the new snapshot content whether it is in line with the changes made before pushing.

## Building library

To build the library and add files into the `dist` folder:

```sh
yarn build
```

## Useful links

- [Playground React Kit](https://github.com/italia/design-react-kit-playground)
- [Vercel Preview (updated with each commit)](https://design-react-kit.vercel.app/)

## Browsers support

The design kit follows the Guidelines for Public Services Design, within the Section [6.3.1.2.1. Supporto browser](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/2020.1/doc/user-interface/lo-sviluppo-di-un-interfaccia-e-i-web-kit.html#strumenti) via the package `browserslist-config-design-italia`.

## TypeScript typing definitions

The library has been rewritten in Typescript and types are exported in the bundle.

## Main contributors

A special thank you to those who made the development of this new version possible!

[![Sabatino Galasso](https://github.com/sabato-galasso.png?size=100)](https://github.com/sabato-galasso) | [![Marco Liberati](https://github.com/dej611.png?size=100)](https://github.com/dej611) | [![Matteo Avesani](https://github.com/Virtute90.png?size=100)](https://github.com/Virtute90) | [![Federico Turbino](https://github.com/federico-ntr.png?size=100)](https://github.com/federico-ntr) |
--- | --- | --- | --- |
Sabatino Galasso | Marco Liberati | Matteo Avesani | Federico Turbino |

and thanks to [OpenCity Labs](https://opencitylabs.it) team

<a href="https://opencitylabs.it"><img src="https://opencitylabs.it/wp-content/themes/opencity/assets/img/opencitylabs.png" alt="OpenCity Labs" width="300"></a>

---

All contributors (*made with [contributors-img](https://contrib.rocks)*)

<a href = "https://github.com/italia/design-react-kit/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=italia/design-react-kit"/>
</a>