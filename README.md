<h1 align="center">Design React Kit</h1>

<p align="center">
  <img src=".github/angular_design_kit.png" alt="react-logo" width="120px" height="120px"/>
  <br>
  <i>Design React Kit è un toolkit basato su Bootstrap Italia 
    <br> per la creazione di applicazioni web sviluppate con React.</i>
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

_Read this in other languages: [English](README.EN.md)._

**Importante**: questo kit è stato progettato per funzionare con la versione 2.x di Bootstrap Italia. Il kit per la versione 1.x di Bootstrap Italia è stato deprecato e si trova sul branch [4.x](https://github.com/italia/design-react-kit/tree/4.x).

## Intro

**Design React kit** è un set di componenti React che implementa [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) e gli stili presenti su [Design UI Kit](https://github.com/italia/design-ui-kit), come [mostrato su InVision](https://invis.io/TWMUZS6VFP5).

Per navigare la libreria e visualizzare i componenti, è stato utilizzato [Storybook](https://storybook.js.org/).

La versione pubblica dello Storybook è disponibile [qui](https://italia.github.io/design-react-kit) per l'ultima release stabile pubblicata, mentre [qui](https://design-react-kit.vercel.app/) per la versione di sviluppo relativa al branch `main`.

## Indice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Requisiti](#requisiti)
- [Come usare il kit](#come-usare-il-kit)
  - [Peer dependencies](#peer-dependencies)
- [Come iniziare](#come-iniziare)
- [Come creare nuovi componenti](#come-creare-nuovi-componenti)
- [Publishing](#publishing)
- [Continuous Integration](#continuous-integration)
  - [Job `build`](#job-build)
  - [Job `deploy-github-pages`](#job-deploy-github-pages)
  - [Job `npm-publish`](#job-npm-publish)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Requisiti

- NodeJS
- Yarn

## Come usare il kit

Per utilizzare Design React come dipendenza in un'app è possibile installarla da [npm](https://www.npmjs.com/~italia). Suggeriamo di usare `create-react-app` per creare una nuova webapp React, come segue:

```sh
$ create-react-app nome-app
$ cd nome-app
$ yarn add design-react-kit --save
```

## Aggiungere bootstrap-italia ed i font

Il `design-react-kit` non include il CSS ed i file font, ed è quindi necessario installarli a parte:

```sh
$ yarn add bootstrap-italia typeface-lora typeface-roboto-mono typeface-titillium-web --save
```

## App.js

A questo punto, è sufficiente importare esplicitamente nella app CSS e font se si è usato `create-react-app` all'interno del file `./src/App.js`:

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

#### Caricamento Font

Il tema Bootstrap Italia utilizza un set specifico di font typeface: `titillium-web`, `roboto-mono` e `lora`. Il caricamento di questi font è lasciato al browser ma, volendo può essere controllato tramite l'apposito componente `FontLoader`.
È sufficiente dichiarare il componente `FontLoader` in cima all'app react per permettere il caricamento.

In alternativa è necessario gestire il caricamento dei font manualmente mediante il pacchetto `webfontloader`:

```js
const WebFont = require('webfontloader');
WebFont.load({
  custom: {
    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
  }
});
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

## Come iniziare

Clona il repository ed esegui `yarn` per installare le dipendenze.
Quindi esegui `yarn storybook:serve` per avviare il server di sviluppo.

Storybook sarà quindi disponibile all'indirizzo http://localhost:9001/

![storybook](/assets/storybook-screenshot.jpg?raw=true)

Storybook è stato arricchito con alcuni `addons` che lo rendono più parlante.

## Come creare nuovi componenti

Questa sezione guiderà alla creazione di nuovi componenti nel repository.
Tutti i componenti risiedono nella cartella `src`: ogni componente possiede una sua cartella con tutto ciò che è necessario per farlo funzionare.
Le storie `Storybook` invece sono sotto `stories`.
I test unitari risiedono nella cartella `test`.
Il componente `Button` ad esempio è presente sotto il percorso `src/Button` e la sua struttura è la seguente:

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

Alcune regole di base per strutturare i componenti:

- I file TSX file del componente utilizza la sintassi JSX.
- I file `.stories.tsx` dovrebbero contenere solo quanto relativo al componente stesso.
- I file `.stories.mdx` dovrebbero contenere solo documentazione relativa al componente stesso
- I file `.test.tsx` dovrebbero contenere solo test relativi al componente stesso.

Una volta creato un nuovo componente, con la sua story, avviando Storybook sarà possibile controllare che tutto funzioni come dovrebbe.

### Come contribuire

Per inviare nuovi contenuti o bug fix è necessario fare un fork del repository, quindi partire dal branch `main` per un nuovo branch contenente la funzionalità: una volta completa la funzionalità (con relativi test ove possibile), sarà necessario fare una PR sul repository principale.

#### Snapshot tests

Il sistema di testing prevede un controllo delle storie presenti, mediante una tecnica chiamata "snapshot" testing: il contenuto della storia Storybook verrà copiato in un file speciale e preservato per notificare eventuali cambiamenti in futuro. Questo fa si che l'aggiunta di nuove storie potrebbe risultare in un fallimento del task "test" in una PR.
Qualora fosse stata aggiunta una nuova storia o modificata una già presente, sarà necessario aggiornare il file di snapshot come segue:

```
yarn test -u
```

A questo punto creare un nuovo commit ed aggiornare la PR con il file di snapshot aggiornato. Controllare che le modifiche apportate siano corrette prima di aggiornare la PR.

## Publishing

E' disponibile un comando per generare una versione statica del catalogo Storybook così che possa essere deployato senza utilizzo di un webserver.

```sh
$ yarn storybook:build
```

Le pagine statiche ottenute dal processo di build saranno generate sotto la folder `storybook-static`.

## Compilazione libreria

Per compilare la libreria e generare i file nella cartella `dist`, è sufficiente lanciare il comando dedicato:

```sh
$ yarn build
```

## Supporto browsers

Il kit segue le indicazioni riportate nelle Linee Guida di Design per i servizi web della Pubblica Amministrazione, sezione [6.3.1.2.1. Supporto browser](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/2020.1/doc/user-interface/lo-sviluppo-di-un-interfaccia-e-i-web-kit.html#strumenti) mediante l'utilizzo del pacchetto `browserslist-config-design-italia`.

## TypeScript typings

La libreria è stata portata a Typescript ed i tipi sono esportati con essa.

## Ringraziamenti

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Grazie a [Chromatic](https://www.chromatic.com/) per aver fornito la piattaforma di visual testing che ci aiuta a revisionare cambiamenti UI e intercettare regressioni visuali.
