import React, { FC, HTMLAttributes, ElementType } from 'react';
import { Nav as NavBase } from 'reactstrap';

export interface NavProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Renderizza i componenti NavItem al suo interno come tab.
   */
  tabs?: boolean;
  /**
   * Renderizza i componenti NavItem al suo interno come pills.
   */
  pills?: boolean;
  /**
   * Renderizza i componenti NavItem al suo interno come card.
   */
  card?: boolean;
  /**
   * Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true` insieme a inHeader.
   */
  navbar?: boolean;
  /** Se abilitato tutti i NavItem all'interno avranno la stessa larghezza */
  justified?: boolean;
  /** Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile  */
  fill?: boolean;
  /** Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"` */
  vertical?: boolean | 'xs';
  /** Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra. */
  horizontal?: 'center' | 'end';
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
}

export const Nav: FC<NavProps> = ({
  tag = 'ul',
  vertical = false,
  ...attributes
}) => {
  return <NavBase tag={tag} vertical={vertical} {...attributes} />;
};
