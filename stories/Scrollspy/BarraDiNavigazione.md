## Esempio in barra di navigazione

Scorri l'area sottostante la barra di navigazione e guarda come lo stato `active` nella voce di menu si sposti alla successiva evidenziandola.

Per aggiungere `<Scrollspy>` ad una barra di navigazione, inserisci la `<Navbar>` dentro a `<Scrollspy>` e aggiungi alcune o tutte le seguenti proprietà a quest'ultimo:

*   `items`: array contenente gli id delle varie sezioni
*   `rootEl`: il nome dell'elemento radice contenente tutte le sezioni. Questo verrà poi usato per selezionare l'elemento con `querySelector`
*   `componentTag`: definisce quale tipo di tag usare
*   `onUpdate`: callback che viene chiamata ad ogni cambio di sezione

<!-- STORY -->

### Note

Il componente `Scrollspy` ad oggi utilizza [react-scrollspy](https://github.com/makotot/react-scrollspy).
