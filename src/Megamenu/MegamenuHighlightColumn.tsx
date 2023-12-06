import React, { FC } from 'react';
import { Col, ColProps, Row } from 'reactstrap';
import classNames from 'classnames';

export interface MegamenuHCProps extends ColProps {
  /** Quanto abilitato gestisce il contenuto della colonna come una sezione che può contentere immagini, testo, ect. */
  description?: boolean;
  /** Classi aggiuntive da usare per il componente Megamenu Highlight Column */
  className?: string;
}
export const MegamenuHighlightColumn: FC<MegamenuHCProps> = ({ description, className, children, ...attributes }) => {
  const classes = classNames(className, 'it-vertical', {
    'it-description': description
  });
  return (
    <Col {...attributes}>
      <Row className='max-height-col'>
        <Col className={classes}>
          {description ? <div className='description-content'>{children}</div> : <>{children}</>}
        </Col>
      </Row>
    </Col>
  );
};
