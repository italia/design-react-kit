import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';
import { Col, Container, Row } from 'reactstrap';

export interface HeroBodyProps extends HTMLAttributes<HTMLElement> {
  /** Eventuali classi aggiuntive */
  className?: string;
  testId?: string;
}

export const HeroBody: FC<HeroBodyProps> = ({ children, className, testId }) => {
  const classes = classname('it-hero-text-wrapper', 'bg-dark', className);
  return (
    <Container>
      <Row>
        <Col>
          <div className={classes} data-testid={testId}>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
