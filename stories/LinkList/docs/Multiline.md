Ogni componente `LinkList` può avere un'icona (a destra o sinistra del testo) ed un abstract.

#### Icone

Per aggiungere un'icona bisogna aggiungere al `<LinkListItem>` la classi:

- `icon-right`: se si vuole posizionare l’icona a destra del testo
- `icon-left`: se si vuole posizionare l’icona a sinistra del testo

All’interno del `<LinkListItem>` subito dopo lo `<span>` contenente il testo, andremo ad inserire il tag `<i>` con classi `right` (per definirne la posizione) e classe `it-(classe icona)` per determinare quale icona inserire.
