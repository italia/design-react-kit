import React from 'react'
import PropTypes from 'prop-types'
import { Nav as NavBase } from 'reactstrap'

const propTypes = {
  /** Renderizza i componenti NavItem al suo interno come tab. */
  tabs: PropTypes.bool,
  /** Renderizza i componenti NavItem al suo interno come pills. */
  pills: PropTypes.bool,
  /** Renderizza i componenti NavItem al suo interno come tab. */
  card: PropTypes.bool,
  /** Se abilitato tutti i NavItem all'interno avranno la stessa larghezza */
  justified: PropTypes.bool,
  /** Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile  */
  fill: PropTypes.bool,
  /** Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"` */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra. */
  horizontal: PropTypes.string,
  /** Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true` insieme a inHeader. */
  navbar: PropTypes.bool,
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  tag: 'ul',
  vertical: false
}

const Nav = ({ ...attributes }) => {
  return <NavBase {...attributes} />
}

Nav.propTypes = propTypes
Nav.defaultProps = defaultProps
export default Nav
