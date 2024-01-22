## List con controlli

I `LinkList` con controlli sono caratterizzati da icone a destra e sinistra del testo
Quella di destra descrittiva e quella di sinistra un eventuale azione aggiuntiva da gestire in JavaScript.

### Primary Action

#### Icona sinistra

Per aggiungere un icona a sinistra del testo bisogna aggiungere al `<LinkListItem>` la classe: `icon-left`.

All’interno del `<LinkListItem>` subito prima dello `<span>` contenente il testo, andremo ad inserire il tag `<i>` con classi `left` (per definirne la posizione) e classe `it-(classe icona)` per determinare quale icona inserire.
