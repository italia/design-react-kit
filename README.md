<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [design-react-kit](#design-react-kit)
- [Integrazione](#integrazione)
- [Sviluppo](#sviluppo)
  - [Requisiti](#requisiti)
  - [Peer dependencies](#peer-dependencies)
  - [Storybook](#storybook)
  - [Build](#build)
    - [CI/CD](#cicd)
      - [Job `build`](#job-build)
      - [Job `deploy-github-pages`](#job-deploy-github-pages)
      - [Job `npm-publish`](#job-npm-publish)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# design-react-kit

`design-react-kit` estende il set di componenti di [reactstrap](https://reactstrap.github.io/) per Boostrap 4 ed implementa quelli presenti in [bootstrap-italia](https://italia.github.io/bootstrap-italia/).

# Integrazione

La libreria è composta da una parte di stili, ereditati dal package [bootstrap-italia](https://italia.github.io/bootstrap-italia/) che possono essere importati avendo installato la stessa con
```sh
$ npm install bootstrap-italia
```

A seconda del bundler utilizzato, e delle sue configurazioni, si potranno importare direttamente gli stili CSS generati
```js
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "bootstrap-italia/dist/css/italia-icon-font.css";
```

oppure i suoi sorgenti [Sass](https://sass-lang.com/)
```js
import "bootstrap-italia/src/scss/bootstrap-italia.scss";
```

I componenti React invece potranno essere utilizzati dopo aver installato il package con
```sh
$ npm install design-react-kit
```

ed importanto puntualmente gli stessi laddove necessario
```js
import { Alert } from "design-react-kit";

const Example = () => {
  return (
    <Alert>
        Questo è un alert
    </Alert>
  );
};
```

# Sviluppo

Ecco gli step necessari per contribuire allo sviluppo della libreria.

## Requisiti
- npm@5

## Peer dependencies

La libreria non include `react` e `react-dom`, evitando clashing di versioni e aumento inutile delle dimensioni del bundle.
Per questo motivo per lo sviluppo in locale sarà necessario installare manualmente le dipendenze.

Il comando da eseguire è
```sh
$ npm run install-dependencies
```
oppure in alternativa manualmente
```sh
$ npm install react react-dom
```

## Storybook

Come ambiente di sviluppo e test è possibile eseguire [Storybook](https://storybook.js.org/)

```sh
$ npm run storybook
```

## Build

La fase di build è gestita tramite [Rollup](https://rollupjs.org/) con la configurazione contenuta in `scripts/rollup.config.js`.

### CI/CD

La CI/CD è gestita con [CircleCI](https://circleci.com/gh/italia/design-react-kit).
Mentre la CI verrà eseguita su tutte le commit effettuate, incluso il branch `master`, la CD entrerà in funzione qualora venisse creata una nuova tag.

#### Job `build`

Prenderà in carico l'esecuzione di `npm run build`, avviando Rollup ed integrando le ultime modifiche effettuate su branch `master` e `tag`.

#### Job `deploy-github-pages`

Eseguirà i due comandi `npm run storybook:build` e `npm run storybook:deploy` necessari per buildare e deploylare la documentazione Storybook presente sulle GitHub Pages.

#### Job `npm-publish`

Effettuerà il `npm publish` necessario ad aggiornare il package [npm](https://www.npmjs.com/package/design-react-kit).

