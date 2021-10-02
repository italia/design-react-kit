import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';
import { Col, Container, Row } from 'reactstrap';

export interface HeroBodyProps extends HTMLAttributes<HTMLElement> {}

export const HeroBody: FC<HeroBodyProps> = ({ children, className }) => {
  const classes = classname('it-hero-text-wrapper', className);
  return (
    <Container>
      <Row>
        <Col>
          <div className={classes}>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};
