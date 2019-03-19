[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://circleci.com/gh/italia/design-react-kit)
[![Partecipa sul canale #design-devel](https://img.shields.io/badge/Slack%20channel-%23design--devel-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Ricevi un invito a Slack](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)

*Read this in other languages: [English](README.EN.md).*

*Il branch di default è ora `next`, dove sono in fase di sviluppo e di fix i componenti che faranno uso di:*
- *Storybook v5.0.0*
- *Bootstrap Italia stabile v1.2.2*

Preview del branch `next` qui: https://design-react-kit.netlify.com/

## Intro

**Design React kit** è un set di componenti React che [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) e gli stili presenti su [Design UI Kit](https://github.com/italia/design-ui-kit), come [mostrato su InVision](https://invis.io/TWMUZS6VFP5).

Per navigare la libreria e visualizzare i componenti, è stato utilizzato [Storybook](https://storybook.js.org/).

La versione pubblica dello Storybook (relativa al branch `master`) è disponibile [qui](https://italia.github.io/design-react-kit).

## Indice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

  - [Requisiti](#requisiti)
- [Come iniziare](#come-iniziare)
- [Come creare nuovi componenti](#come-creare-nuovi-componenti)
  - [Storybook](#storybook)
- [Publishing](#publishing)
  - [Storybook](#storybook-1)
    - [Problemi noti](#problemi-noti)
  - [Package](#package)
    - [Peer dependencies](#peer-dependencies)
    - [Stili CSS](#stili-css)
    - [Preprocessori](#preprocessori)
- [Continuous Integration](#continuous-integration)
  - [Job `build`](#job-build)
  - [Job `deploy-github-pages`](#job-deploy-github-pages)
  - [Job `npm-publish`](#job-npm-publish)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Requisiti

* NodeJS
* Yarn

## Come iniziare

Clona il repository ed esegui `yarn storybook:serve` per avviare il server di sviluppo.
Uno script si occuperà di eseguire il comando `yarn install` necessario ad installare le dipendenze. 

Storybook sarà quindi disponibile all'indirizzo http://localhost:6006

![storybook](/doc/storybook.png?raw=true)


## Come creare nuovi componenti

Questa sezione guiderà alla creazione di nuovi componenti nel repository.
Tutti i componenti risiedono nella folder `components`: ogni componente possiede una sua folder con tutto ciò che è necessario per farlo funzionare.
Le storie `Storybook` invece sono sotto `stories`. 
Il componente `Button` ad esempio è presente sotto il path `src/components/Button` e la sua struttura è la seguente:

```
src
    └── components
        └── Button
            ├── Button.js
stories
    └── Button
        ├── Button.stories.js
```

Alcune regole di base per strutturare i componenti:

* I file JS file del componente utilizza la sintassi JSX.
* I file `.stories.js` dovrebbero contenere solo quanto relativo al componente stesso.

Una volta creato un nuovo componente, con la sua story, avviando Storybook sarà  possibile controllare che tutto funzioni come dovrebbe.

### Storybook

Storybook è stato arricchito con alcuni `addons` che lo rendono più parlante.

## Publishing

E' disponibile un comando per generare una versione statica del catalogo Storybook così che possa essere deployato senza utilizzo di un webserver.

```sh
$ yarn run storybook
```

Le pagine statiche ottenute dal processo di build saranno generate sotto la folder  `storybook-static`.

### Package

Per utilizzare Design React come dipendenza in un'app è possibile installarla da [npm](https://www.npmjs.com/~italia):

```sh
$ npm install design-react-kit
```

Quindi importa ed utilizza il componente:

```jsx
import React from 'react';
import { Alert } from "design-react-kit";

const Example = () => {
  return (
    <Alert>
        Questo è un alert
    </Alert>
  );
};
```

#### Peer dependencies

La libreria non include `react` e `react-dom`, evitando clashing di versioni e aumento inutile delle dimensioni del bundle.
Per questo motivo per lo sviluppo in locale sarà necessario installare manualmente le dipendenze.

Il comando da eseguire è
```sh
$ yarn install --peers
```
oppure in alternativa manualmente
```sh
$ yarn install react react-dom
```

#### Stili CSS

La libreria è composta da una parte di stili, ereditati dal package [bootstrap-italia](https://italia.github.io/bootstrap-italia/) che possono essere importati avendo installato la stessa con:

```sh
$ yarn install bootstrap-italia
```

A seconda del bundler utilizzato, e delle sue configurazioni, si potranno importare direttamente gli stili CSS generati:

```js
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
```

Nota: a partire dalla versione 1

#### Preprocessori

Avendo a disposizione il preprocessore [Sass](https://sass-lang.com/) sarà possibile integrare (e customizzare) i sorgenti della stessa:

```scss
@import "bootstrap-italia/src/scss/bootstrap-italia.scss";
```
