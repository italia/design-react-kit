import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Col, Container, Navbar, Row } from 'reactstrap';

import { SLIM, CENTER, NAVBAR, useHeaderContext } from './HeaderContext';

export interface HeaderContentProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente HeaderContent */
  className?: string;
  /** Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu */
  megamenu?: boolean;
  /** Parametro per il controllo responsive del componente secondo Bootstrap Italia. */
  expand?: boolean | 'sm' | 'md' | 'lg' | 'xl';
  testId?: string;
}

export const HeaderContent = ({ className, megamenu, testId, ...attributes }: HeaderContentProps) => {
  const type = useHeaderContext();
  const classes = classNames(className, {
    'it-header-slim-wrapper-content': type === SLIM,
    'it-header-center-content-wrapper': type === CENTER,
    navbar: type === NAVBAR,
    'has-megamenu': megamenu
  });

  const Content =
    type === NAVBAR ? (
      <Navbar className={classes} {...attributes} data-testid={testId} />
    ) : (
      <div className={classes} {...attributes} data-testid={testId} />
    );
  return (
    <Container>
      <Row>
        <Col>{Content}</Col>
      </Row>
    </Container>
  );
};
