import React, { FC, HTMLAttributes } from 'react';
import { CSSModule, ModalFooter as InnerModalFooter } from 'reactstrap';

export interface ModalFooterProps extends HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

export const ModalFooter: FC<ModalFooterProps> = (props) => (
  <InnerModalFooter {...props} />
);
