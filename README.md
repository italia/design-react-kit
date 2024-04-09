<h1 align="center">Design React Kit</h1>

<p align="center">
  <img src=".github/react-logo.png" alt="react-logo" width="120px" height="auto"/>
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
    <a href="https://www.npmjs.com/package/design-react-kit"><img src="https://img.shields.io/npm/v/design-react-kit.svg" alt="NPM"></a>
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

_Read this in other languages: [English 🇬🇧](README.EN.md)._

_⚠️ Attenzione: questo kit è stato progettato per funzionare con la versione 2.x di Bootstrap Italia. Il kit per la versione 1.x di Bootstrap Italia è stato deprecato e si trova sul branch [4.x](https://github.com/italia/design-react-kit/tree/4.x)._

## Intro

**Design React kit** è un set di componenti React che implementa [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) e gli stili presenti su [Design UI Kit](https://github.com/italia/design-ui-kit).
Per navigare la libreria e visualizzare i componenti, è stato utilizzato [Storybook](https://storybook.js.org/).
La versione pubblica dello Storybook è disponibile [qui](https://italia.github.io/design-react-kit) per l'ultima release stabile pubblicata.
Per giocare con la libreria è disponibile il [Playground React Kit](https://github.com/italia/design-react-kit-playground).

# Indice

- [Indice](#indice)
  - [Come usare il kit](#come-usare-il-kit)
    - [Aggiungere bootstrap-italia ed i font](#aggiungere-bootstrap-italia-ed-i-font)
    - [Esempio](#esempio)
    - [Caricamento Font](#caricamento-font)
    - [Peer dependencies](#peer-dependencies)
  - [Come contribuire 💙](#come-contribuire-)
    - [Con il codice](#con-il-codice)
    - [Impostare l'ambiente locale](#impostare-lambiente-locale)
  - [Come creare nuovi componenti](#come-creare-nuovi-componenti)
    - [Snapshot tests](#snapshot-tests)
  - [Compilazione libreria](#compilazione-libreria)
  - [Link utili](#link-utili)
  - [Supporto browsers](#supporto-browsers)
  - [TypeScript typings](#typescript-typings)
  - [Contributor della libreria](#contributor-della-libreria)

## Come usare il kit

Per utilizzare Design React come dipendenza in un'app è possibile installarla da [npm](https://www.npmjs.com/~italia). Suggeriamo di usare `create vite` per creare una nuova webapp React, come segue:

```sh
yarn create vite my-react-app --template react
cd nome-app
yarn add design-react-kit --save
```

Maggiori informazioni per crere una nuova app con React:

- [Documentazione ufficiale](https://react.dev/learn/start-a-new-react-project)
- [Vitejs](https://vitejs.dev/guide/#getting-started)

### Aggiungere bootstrap-italia ed i font

Il `design-react-kit` non include il CSS ed i file font, ed è quindi necessario installarli a parte:

```sh
yarn add bootstrap-italia typeface-lora typeface-roboto-mono typeface-titillium-web --save
```

### Esempio

A questo punto, è sufficiente importare esplicitamente nella app CSS e font se si è usato `create vite` all'interno del file `./src/App.js`:

```tsx
import React from 'react';
import './App.css';
import { Alert } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

function App() {
  return <Alert>This is an Alert</Alert>;
}

export default App;
```

Puoi consultare questo template web con StackBlitz:
[Template web](https://stackblitz.com/edit/vitejs-vite-yy8bnk?file=src%2FApp.tsx)

### Caricamento Font

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

### Peer dependencies

La libreria non include `react` e `react-dom`, evitando clashing di versioni e aumento inutile delle dimensioni del bundle.
Per questo motivo per lo sviluppo in locale sarà necessario installare manualmente le dipendenze.

Il comando da eseguire è

```sh
yarn install --peers
```

oppure in alternativa manualmente

```sh
yarn install react react-dom
```

## Come contribuire 💙

👉🏻 È possibile contribuire alla libreria in vari modi:

- Con il proprio codice, prendendo in carico una issue tra quelle aperte e non già assegnate tra [le issue](https://github.com/italia/design-react-kit/issues) di React Kit (è sufficiente anche un commento sulla issue per notificare la volontà di presa in carico).
- Attraverso la segnalazione di bug o miglioramenti al [repository ufficiale](https://github.com/italia/design-react-kit/) di React Kit.
- Scrivendoci sul [canale dedicato](https://developersitalia.slack.com/messages/C04J92F9XM2/) di Slack.

### Con il codice

Vorresti dare una mano su Design React Kit? **Sei nel posto giusto!**

Se non l'hai già fatto, inizia spendendo qualche minuto per approfondire la tua conoscenza sulle
[linee guida di design per i servizi web della PA](https://design-italia.readthedocs.io/it/stable/index.html),
e fai riferimento alle [indicazioni su come contribuire a Design React Kit](https://github.com/italia/design-react-kit/blob/main/CONTRIBUTING.md).

### Impostare l'ambiente locale

I requisiti minimi del tuo ambiente locale devono essere:

- NodeJS (>= 18)
- Yarn

Clona il repository ed esegui `yarn` per installare le dipendenze.
Quindi esegui

```sh
yarn storybook:serve
```

per avviare il server di sviluppo.

Storybook sarà quindi disponibile all'indirizzo http://localhost:9001/

Storybook è stato arricchito con alcuni `addons` che lo rendono più parlante.

## Come creare nuovi componenti

Questa sezione guiderà alla creazione di nuovi componenti nel repository.
Tutti i componenti risiedono nella cartella `src`: ogni componente possiede una sua cartella con tutto ciò che è necessario per farlo funzionare.
Le storie `Storybook` invece sono sotto `stories`.
I test unitari risiedono nella cartella `test`.
Il componente `Button` ad esempio è presente sotto il percorso `src/Button` e la sua struttura è la seguente:

```
├── src
│    └── Button
│        └── Button.tsx
├── stories
│    ├── Components
│    │   └── Button.stories.tsx
│    └── Documentation
│        └── Button.mdx
└── test
     └── Button.test.tsx
```

Alcune regole di base per strutturare i componenti:

- I file TSX file del componente utilizza la sintassi JSX.
- I file `.stories.tsx` dovrebbero contenere solo quanto relativo al componente stesso.
- I file `.mdx` dovrebbero contenere solo documentazione relativa al componente stesso
- I file `.test.tsx` dovrebbero contenere solo test relativi al componente stesso.

Una volta creato un nuovo componente, con la sua story, avviando Storybook sarà possibile controllare che tutto funzioni come dovrebbe.

Documentazione:

- [Storybook](https://storybook.js.org/docs/get-started)
- [MDX](https://storybook.js.org/docs/writing-docs/mdx)

### Snapshot tests

Il sistema di testing prevede un controllo delle storie presenti, mediante una tecnica chiamata "snapshot" testing: il contenuto della storia Storybook verrà copiato in un file speciale e preservato per notificare eventuali cambiamenti in futuro. Questo fa si che l'aggiunta di nuove storie potrebbe risultare in un fallimento del task "test" in una PR.
Qualora fosse stata aggiunta una nuova storia o modificata una già presente, sarà necessario aggiornare il file di snapshot come segue:

```sh
yarn test -u
```

A questo punto creare un nuovo commit ed aggiornare la PR con il file di snapshot aggiornato. Controllare che le modifiche apportate siano corrette prima di aggiornare la PR.

## Compilazione libreria

Per compilare la libreria e generare i file nella cartella `dist`, è sufficiente lanciare il comando dedicato:

```sh
yarn build
```

## Link utili

- [Playground React Kit](https://github.com/italia/design-react-kit-playground)

## Supporto browsers

Il kit segue le indicazioni riportate nelle Linee Guida di Design per i servizi web della Pubblica Amministrazione, sezione [6.3.1.2.1. Supporto browser](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/2020.1/doc/user-interface/lo-sviluppo-di-un-interfaccia-e-i-web-kit.html#strumenti) mediante l'utilizzo del pacchetto `browserslist-config-design-italia`.

## TypeScript typings

La libreria è stata portata a Typescript ed i tipi sono esportati con essa.

## Contributor della libreria

Un grazie speciale a chi ha reso possibile lo sviluppo di questa libreria!

| [![Sabatino Galasso](https://github.com/sabato-galasso.png?size=100)](https://github.com/sabato-galasso) | [![Marco Liberati](https://github.com/dej611.png?size=100)](https://github.com/dej611) | [![Matteo Avesani](https://github.com/Virtute90.png?size=100)](https://github.com/Virtute90) | [![Federico Turbino](https://github.com/federico-ntr.png?size=100)](https://github.com/federico-ntr) |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Sabatino Galasso                                                                                         | Marco Liberati                                                                         | Matteo Avesani                                                                               | Federico Turbino                                                                                     |

e al contributo di [OpenCity Labs](https://opencitylabs.it)

<a href="https://opencitylabs.it"><img src="https://opencitylabs.it/wp-content/themes/opencity/assets/img/opencitylabs.png" alt="OpenCity Labs" width="300"></a>

---

Tutti i contributor (_made with [contributors-img](https://contrib.rocks)_)

<a href = "https://github.com/italia/design-react-kit/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=italia/design-react-kit"/>
</a>
